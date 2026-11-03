import models from "../models/index.js";

const getAllProfiles = async () => {
  return await models.Profile.findAll({
    include: [
      { model: models.AcademicExperience, as: "academicExperiences" },
      { model: models.ProfessionalExperience, as: "professionalExperiences" },
      { model: models.Project, as: "projects" },
    ],
  });
};

const getProfileById = async (id) => {
  return await models.Profile.findByPk(id, {
    include: [
      { model: models.AcademicExperience, as: "academicExperiences" },
      { model: models.ProfessionalExperience, as: "professionalExperiences" },
      { model: models.Project, as: "projects" },
    ],
  });
};

const createProfile = async (data) => {
  return await models.Profile.create(data);
};

const updateProfile = async (id, data) => {
  const profile = await models.Profile.findByPk(id);
  if (!profile) return null;
  return await profile.update(data);
};

const deleteProfile = async (id) => {
  const profile = await models.Profile.findByPk(id);
  if (!profile) return null;
  await profile.destroy();
  return profile;
};

export default {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
};
