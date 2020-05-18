import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SellPage from '../pages/SellPage';

const routes = () => {
  return (
    <Switch>
      <Route key="home-page" path="/" exact component={HomePage} />
      <Route key="sell-page" path="/sell-page" exact component={SellPage}></Route>
      <Route key="not-found-page" path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default routes;
