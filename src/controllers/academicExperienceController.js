import { academicExperienceService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getAcademicExperiences = async (req, res, next) => {
  try {
    const records = await academicExperienceService.getAllAcademicExperiences();
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const getAcademicExperience = async (req, res, next) => {
  try {
    const record = await academicExperienceService.getAcademicExperienceById(req.params.academicExperienceId);
    if (!record) {
      throw new AppError("Experiência acadêmica não encontrada.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const getAcademicExperiencesByProfile = async (req, res, next) => {
  try {
    const records = await academicExperienceService.getAcademicExperiencesByProfileId(req.params.profileId);
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const createAcademicExperience = async (req, res, next) => {
  try {
    const record = await academicExperienceService.createAcademicExperience(req.body);
    return res.status(201).send(record);
  } catch (error) {
    return next(error);
  }
};

const updateAcademicExperience = async (req, res, next) => {
  try {
    const record = await academicExperienceService.updateAcademicExperience(req.params.academicExperienceId, req.body);
    if (!record) {
      throw new AppError("Experiência acadêmica não encontrada.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const deleteAcademicExperience = async (req, res, next) => {
  try {
    const record = await academicExperienceService.deleteAcademicExperience(req.params.academicExperienceId);
    if (!record) {
      throw new AppError("Experiência acadêmica não encontrada.", 404);
    }
    return res.status(200).send({ message: "Experiência acadêmica removida com sucesso." });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAcademicExperiences,
  getAcademicExperience,
  getAcademicExperiencesByProfile,
  createAcademicExperience,
  updateAcademicExperience,
  deleteAcademicExperience,
};
