import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    projects: [Projects!]
    project(id: ID!): Project!
  }

  extend type Mutation {
    createNewProject(text: String!): Project!
    deleteProject(id: ID!): Boolean!
    updateProject(id: ID!, text: String!): Project!
  }

  type Project {
    id: ID!
    name: String!
  }
`;
