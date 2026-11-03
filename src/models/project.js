const getProjectModel = (sequelize, { DataTypes }) => {
  const Project = sequelize.define("project", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tecnologias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
      onDelete: "CASCADE",
    });
  };

  return Project;
};

export default getProjectModel;
