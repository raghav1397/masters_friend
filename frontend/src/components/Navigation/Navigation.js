import React from "react";

import AuthUserContext from "../AuthUserContext";
import NavigationAuth from "./NavigationAuth";
import NavigationNonAuth from "./NavigationNoAuth";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth  userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

export default Navigation;
