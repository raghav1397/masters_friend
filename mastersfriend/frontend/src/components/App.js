// import React, { Component } from "react";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";

// import { firebase } from "../firebase";
import * as routes from "../constants/routes";

//nav stuff
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import Predict from "./Predict";
// import PasswordForgetaccount from "./PasswordForgetaccount";

import withAuthentication from "./withAuthentication";
/*eslint-disable */
const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation />

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PREDICT} component={Predict} />
      {/* <Route exact path={routes.PasswordForgetaccount} component={PasswordForgetaccount} /> */}
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
    </Container>
  </BrowserRouter>
);

export default withAuthentication(App); //using HoC to handle session
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('Press Ctrl+C to quit.');
// });
