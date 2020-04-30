import React, {  } from "react";

import { withRouter } from "react-router-dom";
import SignInForm from "./SignInForm" 
// import * as routes from "../constants/routes";
// import Navigation from "./Navigation/Navigation";

const SignInPage = ({ history }) => {
  return (
    <div className="div-flex">
      <div>
        <SignInForm history={history} />
      </div>
    </div>
  );
};

export default withRouter(SignInPage);