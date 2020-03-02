import { gql } from "apollo-server-express";

import projectSchema from "./projects";
import voteSchema from "./votes";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, projectSchema, voteSchema];
