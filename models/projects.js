const project = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    name: DataTypes.STRING
  });
  return Project;
};

export default project;
