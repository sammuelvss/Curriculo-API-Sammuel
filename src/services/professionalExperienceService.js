import models from "../models/index.js";

const getAllProfessionalExperiences = async () => {
  return await models.ProfessionalExperience.findAll({
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getProfessionalExperienceById = async (id) => {
  return await models.ProfessionalExperience.findByPk(id, {
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getProfessionalExperiencesByProfileId = async (profileId) => {
  return await models.ProfessionalExperience.findAll({
    where: { profile_id: profileId },
  });
};

const createProfessionalExperience = async (data) => {
  return await models.ProfessionalExperience.create(data);
};

const updateProfessionalExperience = async (id, data) => {
  const record = await models.ProfessionalExperience.findByPk(id);
  if (!record) return null;
  return await record.update(data);
};

const deleteProfessionalExperience = async (id) => {
  const record = await models.ProfessionalExperience.findByPk(id);
  if (!record) return null;
  await record.destroy();
  return record;
};

export default {
  getAllProfessionalExperiences,
  getProfessionalExperienceById,
  getProfessionalExperiencesByProfileId,
  createProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience,
};
