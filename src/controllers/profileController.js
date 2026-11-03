import { profileService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getProfiles = async (req, res, next) => {
  try {
    const profiles = await profileService.getAllProfiles();
    return res.status(200).send(profiles);
  } catch (error) {
    return next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const profile = await profileService.getProfileById(req.params.profileId);
    if (!profile) {
      throw new AppError("Perfil não encontrado.", 404);
    }
    return res.status(200).send(profile);
  } catch (error) {
    return next(error);
  }
};

const createProfile = async (req, res, next) => {
  try {
    const profile = await profileService.createProfile(req.body);
    return res.status(201).send(profile);
  } catch (error) {
    return next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const profile = await profileService.updateProfile(req.params.profileId, req.body);
    if (!profile) {
      throw new AppError("Perfil não encontrado.", 404);
    }
    return res.status(200).send(profile);
  } catch (error) {
    return next(error);
  }
};

const deleteProfile = async (req, res, next) => {
  try {
    const profile = await profileService.deleteProfile(req.params.profileId);
    if (!profile) {
      throw new AppError("Perfil não encontrado.", 404);
    }
    return res.status(200).send({ message: "Perfil removido com sucesso." });
  } catch (error) {
    return next(error);
  }
};

export default {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
