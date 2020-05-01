import React, { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../Copyright"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
    error: null,
    showingAlert: false,
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const history = props.history;

  function handlesubmit(event) {
    const { email, password } = state;
    console.log(email, password);
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Hi");
        // setState(
        // 	...state, {
        // 	email: "",
        // 	password: "",
        // 	error: null,
        // 	showingAlert: false,
        // });
        console.log("NVM");
        history.push(routes.LANDING);
      })
      .catch((error) => {
        setState(...state, {
          error: error,
        });
        timer(); //defined below
      });

    event.preventDefault();
  }

  function timer() {
    setState(...state, {
      showingAlert: true,
    });

    setTimeout(() => {
      setState(...state, {
        showingAlert: false,
      });
    }, 4000);
  }

  function facebookLogin() {
    auth
      .GoogleAuthProvide()
      .then((authUser) => {
        console.log("authUser", authUser);

        db.doCreateUser(
          //store some info from facebook into the firebase db
          authUser.user.uid,
          authUser.user.displayName,
          authUser.user.email
        )
          .then(() => {
            console.log(history);
            history.push(routes.LANDING);
          })
          .catch((error) => {
            setState(...state, {
              error: error,
            });
          });
      })
      .catch((error) => {
        setState(...state, {
          error: error,
        });
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handlesubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
			<SignUpLink />
            </Grid>
            <Grid item>
              <PasswordForgetLink/>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <GoogleLoginButton onClick={facebookLogin}/>
      </Box>
      <br></br>
      <center>
      <p>NOTE : Sign In to use Univesity Predictor</p>
      </center>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
