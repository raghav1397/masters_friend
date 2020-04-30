import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Navigation from "../Navigation/Navigation";

import * as routes from "../../constants/routes";

const SignUpPage = ({ history }) => (
  <div className="div-flex">
    <Navigation/>
    <div>
      <SignUpForm history={history} />
    </div>
  </div>
);

//################### Sign Up Link ###################
//used in the sign in when the user don't have an account registered yet
const SignUpLink = () => (
  <p>
    New here? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

//exports
export default withRouter(SignUpPage); //using a HoC to get access to history
export { SignUpLink };
