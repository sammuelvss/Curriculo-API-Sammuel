const getProfileModel = (sequelize, { DataTypes }) => {
  const Profile = sequelize.define("profile", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
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
    resumo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Profile.associate = (models) => {
    Profile.hasMany(models.AcademicExperience, {
      foreignKey: "profile_id",
      as: "academicExperiences",
      onDelete: "CASCADE",
    });
    Profile.hasMany(models.ProfessionalExperience, {
      foreignKey: "profile_id",
      as: "professionalExperiences",
      onDelete: "CASCADE",
    });
    Profile.hasMany(models.Project, {
      foreignKey: "profile_id",
      as: "projects",
      onDelete: "CASCADE",
    });
  };

  return Profile;
};

export default getProfileModel;
