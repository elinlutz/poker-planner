import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    projects: [Project!]
    project(id: ID!): Project!
  }

  extend type Mutation {
    createNewProject(name: String!): Project!
    deleteProject(id: ID!): Boolean!
    updateProject(id: ID!, name: String!): Project!
  }

  type Project {
    id: ID!
    name: String!
    votes: [Vote]!
  }

  type Vote {
    id: ID!
    firstName: String!
    lastName: String!
    score: Boolean!
  }
`;
