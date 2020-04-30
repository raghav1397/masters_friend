import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import PasswordForgetForm1 from "./PasswordForgetForm"
import Navigation from "../Navigation/Navigation";
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
//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => {
  const theme = useTheme();
  return(
  <div className="div-flex">
    <MuiThemeProvider theme={customTheme}>
    <Navigation/>
    <div>
      <PasswordForgetForm1 />
    </div>
    </MuiThemeProvider>
  </div>
  );
  }

//################### PasswordForget Link ###################
const PasswordForgetLink = () => (
  <p>
    Forgot password? <Link to={routes.PASSWORD_FORGET}>Reset it</Link>
  </p>
);

export default PasswordForgetPage;
export { PasswordForgetLink };
