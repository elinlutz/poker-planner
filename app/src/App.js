import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProjectsPage from "./pages/ProjectsPage";

import Project from "./pages/Project";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

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
              <ProjectsPage />
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
