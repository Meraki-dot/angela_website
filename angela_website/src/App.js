import React from 'react';
import './sass/styles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Project_Overview from './pages/project_overview/Project_Overview';
import Pasadena_pups from './pages/Projects/Pasadena_pups/Pasadena_pups';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Project_Overview} />
        <Route path="/pasadena_pups" component={Pasadena_pups} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
