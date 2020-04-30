import React, { useState } from "react";
import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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

export default function SignUpForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
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
    const { username, email, passwordOne } = state;
    console.log(email, passwordOne);
    auth.doCreateUserWithEmailAndPassword(email, passwordOne).then((authUser) => {
      db.doCreateUser(authUser.uid, username, email)
        .then(() => {
          console.log(authUser.uid);
          history.push(routes.HOME); //redirects to Home Page
        })
        .catch((error) => {
          setState(...state, {
            error: error,
          });
          timer();
        })
        .catch((error) => {
          setState(...state, {
            error: error,
          });
          timer();
        })
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

  const {
    username,
    passwordTwo
  } = state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="username"
            name="username"
            id="userName"
            placeholder="John Doe"
            value={username}
            onChange={handleChange}
            autoFocus
          />
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
            name="passwordOne"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            name="passwordTwo"
            id="examplePassword2"
            placeholder="Confirm Password"
            value={passwordTwo}
            onChange={handleChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handlesubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
