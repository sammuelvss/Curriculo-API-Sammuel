import "dotenv/config";
import express from "express";
import models, { sequelize } from "./models/index.js";
import {
  corsMiddleware,
  logMiddleware,
  contextMiddleware,
  notFoundMiddleware,
  errorMiddleware,
} from "./middlewares/index.js";
import * as routes from "./routes/index.js";
import { seedInitialData } from "./utils/seedData.js";

const app = express();

app.set("trust proxy", true);

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logMiddleware);
app.use(contextMiddleware);

const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC === "true";
let initPromise = null;

const ensureDatabaseReady = async () => {
  if (!initPromise) {
    initPromise = (async () => {
      await sequelize.sync({ force: eraseDatabaseOnSync });
      await seedInitialData();
    })().catch((err) => {
      initPromise = null;
      throw err;
    });
  }
  return initPromise;
};

app.use(async (req, res, next) => {
  if (req.path === "/") {
    return next();
  }
  try {
    await ensureDatabaseReady();
    return next();
  } catch (error) {
    return next(error);
  }
});

app.get("/", (req, res) => {
  return res.send("API Currículo Express - Sammuel Victor executando...");
});

app.use("/profiles", routes.profile);
app.use("/academic-experiences", routes.academicExperience);
app.use("/professional-experiences", routes.professionalExperience);
app.use("/projects", routes.project);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
