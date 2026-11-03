import { AppError } from "../utils/index.js";

const notFoundMiddleware = (req, res, next) => {
  next(new AppError(`Rota não encontrada: ${req.originalUrl}`, 404));
};

export default notFoundMiddleware;
