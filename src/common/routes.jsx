import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = () => {
  return (
    <Switch>
      <Route key="home-page" path="/" exact component={HomePage} />
      <Route key="not-found-page" path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default routes;
