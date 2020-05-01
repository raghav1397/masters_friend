import React, {  } from "react";
// import Navigation from "./Navigation/Navigation";
import { withRouter } from "react-router-dom";
import SignInForm from "./SignInForm" 
// import * as routes from "../constants/routes";
import Navigation from "../Navigation/Navigation";
import { ThemeProvider} from "@material-ui/core/styles";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
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

const SignInPage = ({ history }) => {
 
  return (
    <div className="div-flex">
      <ThemeProvider theme={customTheme}>
      <Navigation/>
      <div>
        <SignInForm history={history} />
      </div>
      </ThemeProvider>
    </div>
  );
};

export default withRouter(SignInPage);