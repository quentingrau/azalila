import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './views/Home'
import Realisations from './views/Realisations'
import NotFound from './views/NotFound'
import Formules from "./views/Formules";
import Printemps from "./views/Printemps";
import Ete from "./views/Ete";
import Automne from "./views/Automne";
import Hiver from "./views/Hiver";
import Champetre from "./views/Champetre";
import Chic from "./views/Chic";
import Provencal from "./views/Provencal";
import Cool from "./views/Cool";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router basename="/">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/realisations">
          <Realisations />
        </Route>
        <Route path="/formules">
          <Formules />
        </Route>
        <Route path="/printemps">
          <Printemps />
        </Route>
        <Route path="/ete">
          <Ete />
        </Route>
        <Route path="/automne">
          <Automne />
        </Route>
        <Route path="/hiver">
          <Hiver />
        </Route>
        <Route path="/champetre">
          <Champetre />
        </Route>
        <Route path="/chic">
          <Chic />
        </Route>
        <Route path="/provencal">
          <Provencal />
        </Route>
        <Route path="/cool">
          <Cool />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
