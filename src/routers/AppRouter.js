import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../components/Login";
import RetroApp from "../components/RetroApp";
import NotFoundPage from "../components/NotFoundPage";
import Indecision from "../components/IndecisionApp/IndecisionApp";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={RetroApp} />
        <Route path="/indecision" component={Indecision} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
