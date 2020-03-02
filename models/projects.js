const project = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    name: DataTypes.STRING
  });

  Project.associate = function(models) {
    models.Project.hasMany(models.Vote);
  };
  return Project;
};

export default project;
