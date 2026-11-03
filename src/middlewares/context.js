import models from "../models/index.js";

const contextMiddleware = (req, res, next) => {
  req.context = {
    models,
  };
  next();
};

export default contextMiddleware;
