import React from "react";
import "./App.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_VOTES = gql`
  query {
    votes(projectId: 1) {
      id
    }
  }
`;

function Votes() {
  const { loading, error, data } = useQuery(GET_VOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.projects.map(({ id, firstName }) => (
    <div key={id}>
      <p>
        {id}: {firstName}
      </p>
    </div>
  ));
}

export default Votes;
