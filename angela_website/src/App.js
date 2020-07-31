import React from "react";
import "./sass/styles.scss";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Project_Overview from "./pages/project_overview/Project_Overview";
import Pasadena_pups from "./pages/Projects/Pasadena_pups/Pasadena_pups";
import Finley from "./pages/Projects/Pasadena_pups/Finley/Finley";
import Rocky from "./pages/Projects/Pasadena_pups/Rocky/Rocky";
import Pablo_brandi from "./pages/Projects/Pasadena_pups/Pablo_brandi/Pablo_brandi";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Project_Overview} />
        <Route path="/pasadena_pups" component={Pasadena_pups} />
        {/*Individual Pieces Routes*/}
        <Route path="/finley" component={Finley} />
        <Route path="/rocky" component={Rocky} />
        <Route path="/pablo_brandi" component={Pablo_brandi} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
