const vote = (sequelize, DataTypes) => {
  const Vote = sequelize.define("vote", {
    projectId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    score: DataTypes.INTEGER
  });

  Vote.associate = function(models) {
    models.Vote.belongsTo(models.Project, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Vote;
};

export default vote;
