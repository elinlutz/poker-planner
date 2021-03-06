import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);

const models = {
  Project: sequelize.import("./projects"),
  Vote: sequelize.import("./votes")
};

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();
seed();

async function seed() {
  models.Project.create({
    name: "SuperApp"
  });
  models.Vote.create({
    firstName: "Elin",
    lastName: "Lu",
    score: 8,
    projectId: 2
  });
}

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
