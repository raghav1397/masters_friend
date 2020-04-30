import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import PasswordForgetForm1 from "./PasswordForgetForm"
//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => (
  <div className="div-flex">
    <div>
      <PasswordForgetForm1 />
    </div>
  </div>
);

//################### PasswordForget Link ###################
const PasswordForgetLink = () => (
  <p>
    Forgot password? <Link to={routes.PASSWORD_FORGET}>Reset it</Link>
  </p>
);

export default PasswordForgetPage;
export { PasswordForgetLink };
