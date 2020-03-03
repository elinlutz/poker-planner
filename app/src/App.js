import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Project from "./pages/Project";

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
  let match = useRouteMatch();

  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h2>Projects</h2>
      {data.projects.map(({ id, name }) => (
        <div>
          <div key={id}>
            <Link to={`${match.url}/${id}`}>
              {id}: {name}
            </Link>
          </div>
        </div>
      ))}
      <Switch>
        <Route path={`${match.path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </>
  );
}

function Home() {
  console.log("Home");
  return <h1>Startsida</h1>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <li>
            <Link to="/">Hem</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
