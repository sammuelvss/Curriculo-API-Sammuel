import { projectService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProjects = async (req, res, next) => {
  try {
    const records = await projectService.getAllProjects();
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const record = await projectService.getProjectById(req.params.projectId);
    if (!record) {
      throw new AppError("Projeto não encontrado.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const getProjectsByProfile = async (req, res, next) => {
  try {
    const records = await projectService.getProjectsByProfileId(req.params.profileId);
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const record = await projectService.createProject(req.body);
    return res.status(201).send(record);
  } catch (error) {
    return next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const record = await projectService.updateProject(req.params.projectId, req.body);
    if (!record) {
      throw new AppError("Projeto não encontrado.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const record = await projectService.deleteProject(req.params.projectId);
    if (!record) {
      throw new AppError("Projeto não encontrado.", 404);
    }
    return res.status(200).send({ message: "Projeto removido com sucesso." });
  } catch (error) {
    return next(error);
  }
};

export default {
  getProjects,
  getProject,
  getProjectsByProfile,
  createProject,
  updateProject,
  deleteProject,
};
