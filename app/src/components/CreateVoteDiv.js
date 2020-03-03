import React from "react";
import "../App.css";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const PLACE_VOTE_MUTATION = gql`
  mutation {
    placeVote(projectId: 1) {
      firstName
      lastName
      score
    }
  }
`;

function CreateVoteDiv() {
  const { loading, error, data } = useMutation(PLACE_VOTE_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>Create Vote Div</p>
    </div>
  );
}

export default CreateVoteDiv;
