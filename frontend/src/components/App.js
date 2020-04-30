// import React, { Component } from "react";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import * as routes from "../constants/routes";

//nav stuff
import LandingPage from "./Landing";
import SignUpPage from "./Sign_In_Up/SignUp";
import SignInPage from "./Sign_In_Up/SignIn";
import PasswordForgetPage from "./Sign_In_Up/PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import Predict from "./Predict";

import withAuthentication from "./withAuthentication";
/*eslint-disable */
const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PREDICT} component={Predict} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App); //using HoC to handle session

