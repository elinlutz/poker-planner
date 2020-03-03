import React from "react";
import "../App.css";
import { useQuery } from "@apollo/react-hooks";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { gql } from "apollo-boost";

import Project from "./Project";

const GET_ALL_PROJECTS = gql`
  query {
    projects {
      id
      name
    }
  }
`;

function ProjectsPage() {
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

export default ProjectsPage;
