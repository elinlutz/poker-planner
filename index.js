import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import models, { sequelize } from "./models";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();
const port = process.env.PORT || 8000;

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

sequelize.sync().then(async () =>
  app.listen(
    {
      port
    },
    () => {
      console.log(`Running Apollo Server on http://localhost:${port}/graphql`);
    }
  )
);
