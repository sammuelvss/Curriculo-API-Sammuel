const getProfessionalExperienceModel = (sequelize, { DataTypes }) => {
  const ProfessionalExperience = sequelize.define("professional_experience", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inicio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fim: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  ProfessionalExperience.associate = (models) => {
    ProfessionalExperience.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
      onDelete: "CASCADE",
    });
  };

  return ProfessionalExperience;
};

export default getProfessionalExperienceModel;
