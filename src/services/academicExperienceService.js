import models from "../models/index.js";

const getAllAcademicExperiences = async () => {
  return await models.AcademicExperience.findAll({
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getAcademicExperienceById = async (id) => {
  return await models.AcademicExperience.findByPk(id, {
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getAcademicExperiencesByProfileId = async (profileId) => {
  return await models.AcademicExperience.findAll({
    where: { profile_id: profileId },
  });
};

const createAcademicExperience = async (data) => {
  return await models.AcademicExperience.create(data);
};

const updateAcademicExperience = async (id, data) => {
  const record = await models.AcademicExperience.findByPk(id);
  if (!record) return null;
  return await record.update(data);
};

const deleteAcademicExperience = async (id) => {
  const record = await models.AcademicExperience.findByPk(id);
  if (!record) return null;
  await record.destroy();
  return record;
};

export default {
  getAllAcademicExperiences,
  getAcademicExperienceById,
  getAcademicExperiencesByProfileId,
  createAcademicExperience,
  updateAcademicExperience,
  deleteAcademicExperience,
};
