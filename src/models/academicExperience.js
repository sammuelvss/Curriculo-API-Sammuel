const getAcademicExperienceModel = (sequelize, { DataTypes }) => {
  const AcademicExperience = sequelize.define("academic_experience", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    instituicao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    curso: {
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
  });

  AcademicExperience.associate = (models) => {
    AcademicExperience.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
      onDelete: "CASCADE",
    });
  };

  return AcademicExperience;
};

export default getAcademicExperienceModel;
