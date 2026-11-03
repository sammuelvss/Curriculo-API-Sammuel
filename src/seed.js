import "dotenv/config";
import { sequelize } from "./models/index.js";
import { seedInitialData } from "./utils/seedData.js";

const syncAndSeedDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    await sequelize.sync({ force: true });
    console.log("Tabelas sincronizadas (recriadas). Inserindo dados iniciais...");
    await seedInitialData();
    process.exit(0);
  } catch (error) {
    console.error("Erro ao sincronizar/popular banco de dados:", error);
    process.exit(1);
  }
};

syncAndSeedDatabase();
