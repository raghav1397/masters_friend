import React from "react";
import { Link, withRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Navigation from "../Navigation/Navigation";
import * as routes from "../../constants/routes";
import { useTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles/index";

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285F4",
    },
    secondary: {
      main: "#DB4437", // yellow = "#F4B400", green = "#0F9D58"
    }
  },
});


const SignUpPage = ({ history }) => {
  const theme = useTheme();
  return(
  <div className="div-flex">
    <MuiThemeProvider theme={customTheme}>
    <Navigation/>
    <div>
      <SignUpForm history={history} />
    </div>
    </MuiThemeProvider>
  </div>
  );
  }

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
