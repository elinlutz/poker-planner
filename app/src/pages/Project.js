import React from "react";
import { gql } from "apollo-boost";

import { useParams } from "react-router-dom";
import CreateVoteDiv from "../components/CreateVoteDiv";

const GET_ONE_PROJECT = gql`
  query {
    project(id: id) {
      id
      name
      votes {
        id
        firstName
        lastName
      }
    }
  }
`;

const Project = () => {
  let { projectId } = useParams();
  return (
    <>
      <h3>Requested project ID: {projectId}</h3>
      <CreateVoteDiv />
    </>
  );
};

export default Project;
