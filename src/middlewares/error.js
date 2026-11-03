const errorMiddleware = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    const messages = err.errors.map((e) => e.message);
    return res.status(400).json({
      status: "fail",
      message: "Erro de validação",
      errors: messages,
    });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    const messages = err.errors.map((e) => e.message);
    return res.status(409).json({
      status: "fail",
      message: "Registro duplicado",
      errors: messages,
    });
  }

  if (err.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({
      status: "fail",
      message: "Referência inválida: o perfil informado (profile_id) não existe.",
    });
  }

  if (err.name === "SequelizeDatabaseError" && err.parent?.code === "22P02") {
    return res.status(400).json({
      status: "fail",
      message: "Formato de ID (UUID) inválido.",
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  console.error("ERRO INESPERADO:", err);
  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
};

export default errorMiddleware;
