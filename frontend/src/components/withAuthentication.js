import React from "react";
import { firebase } from "../firebase";

import AuthUserContext from "./AuthUserContext"; //using provider's context api

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      const { authUser } = this.state;
      console.log("withAuthentication file authUser", authUser);
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props}></Component>
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
