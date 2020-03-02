import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    votes(projectId: ID!): [Vote!]
    vote(id: ID!): Vote!
  }

  extend type Mutation {
    placeVote(
      projectId: ID!
      firstName: String!
      lastName: String!
      score: Int!
    ): Vote!
    deleteVote(id: ID!): Boolean!

    updateVote(
      id: ID!
      firstName: String!
      lastName: String!
      score: Int!
    ): Vote!
  }

  type Vote {
    id: ID!
    firstName: String!
    lastName: String!
    score: Int!
  }
`;
