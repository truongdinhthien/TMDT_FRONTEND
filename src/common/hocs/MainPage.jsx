import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "../routes";

const MainPage = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default MainPage;
