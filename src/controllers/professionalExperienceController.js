import { professionalExperienceService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProfessionalExperiences = async (req, res, next) => {
  try {
    const records = await professionalExperienceService.getAllProfessionalExperiences();
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const getProfessionalExperience = async (req, res, next) => {
  try {
    const record = await professionalExperienceService.getProfessionalExperienceById(req.params.professionalExperienceId);
    if (!record) {
      throw new AppError("Experiência profissional não encontrada.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const getProfessionalExperiencesByProfile = async (req, res, next) => {
  try {
    const records = await professionalExperienceService.getProfessionalExperiencesByProfileId(req.params.profileId);
    return res.status(200).send(records);
  } catch (error) {
    return next(error);
  }
};

const createProfessionalExperience = async (req, res, next) => {
  try {
    const record = await professionalExperienceService.createProfessionalExperience(req.body);
    return res.status(201).send(record);
  } catch (error) {
    return next(error);
  }
};

const updateProfessionalExperience = async (req, res, next) => {
  try {
    const record = await professionalExperienceService.updateProfessionalExperience(req.params.professionalExperienceId, req.body);
    if (!record) {
      throw new AppError("Experiência profissional não encontrada.", 404);
    }
    return res.status(200).send(record);
  } catch (error) {
    return next(error);
  }
};

const deleteProfessionalExperience = async (req, res, next) => {
  try {
    const record = await professionalExperienceService.deleteProfessionalExperience(req.params.professionalExperienceId);
    if (!record) {
      throw new AppError("Experiência profissional não encontrada.", 404);
    }
    return res.status(200).send({ message: "Experiência profissional removida com sucesso." });
  } catch (error) {
    return next(error);
  }
};

export default {
  getProfessionalExperiences,
  getProfessionalExperience,
  getProfessionalExperiencesByProfile,
  createProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience,
};
