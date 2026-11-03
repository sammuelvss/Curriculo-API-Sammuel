import models from "../models/index.js";

const getAllProjects = async () => {
  return await models.Project.findAll({
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getProjectById = async (id) => {
  return await models.Project.findByPk(id, {
    include: [{ model: models.Profile, as: "profile", attributes: ["id", "nome"] }],
  });
};

const getProjectsByProfileId = async (profileId) => {
  return await models.Project.findAll({
    where: { profile_id: profileId },
  });
};

const createProject = async (data) => {
  return await models.Project.create(data);
};

const updateProject = async (id, data) => {
  const record = await models.Project.findByPk(id);
  if (!record) return null;
  return await record.update(data);
};

const deleteProject = async (id) => {
  const record = await models.Project.findByPk(id);
  if (!record) return null;
  await record.destroy();
  return record;
};

export default {
  getAllProjects,
  getProjectById,
  getProjectsByProfileId,
  createProject,
  updateProject,
  deleteProject,
};
