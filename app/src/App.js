import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_PROJECTS = gql`
  query {
    projects {
      id
      name
    }
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

function Projects() {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.projects.map(({ id, name }) => (
    <div key={id}>
      <a href={`/${id}`}>
        {id}: {name}
      </a>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>Projects</p>
          <Projects />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
