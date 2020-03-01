const vote = (sequelize, DataTypes) => {
  const Vote = sequelize.define("vote", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    score: DataTypes.INTEGER
  });

  return Vote;
};

export default vote;
