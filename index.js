import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import models, { sequelize } from "./models";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models
  }
});

server.applyMiddleware({
  app,
  path: "/graphql"
});

app.listen(
  {
    port: 8000
  },
  () => {
    console.log("Running Apollo Server on http://localhost:8000/graphql");
  }
);
