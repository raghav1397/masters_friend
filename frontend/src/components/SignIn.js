import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
  Alert,
  Container,
} from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";

import { withRouter } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth, db } from "../firebase";
import * as routes from "../constants/routes";
import Navigation from "./Navigation/Navigation";

const SignInPage = ({ history }) => {
  return (
    <div className="div-flex">
      <div>
      <Navigation />

        <SignInForm history={history} />
        <Row>
          <Col className="text-center text-md-right" xs="6">
            <SignUpLink />
          </Col>
          <Col className="text-center text-md-left" xs="6">
            <PasswordForgetLink />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showingAlert: false,
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey("error", error));
        this.timer(); //defined below
      });

    event.preventDefault();
  };

  facebookLogin = () => {
    const { history } = this.props;
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
            // this.setState({
            //   ...INITIAL_STATE
            // });
            history.push(routes.HOME); //redirects to Home Page
          })
          .catch((error) => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch((error) => {
        this.setState(byPropKey("error", error));
      });
  };

  timer = () => {
    this.setState({
      showingAlert: true,
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 4000);
  };

  render() {
    const { email, password, error, showingAlert } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      
      <Container>
        <br></br>
        <div>
          {showingAlert && (
            <Alert color="danger" onLoad={this.timer}>
              {error.message}
            </Alert>
          )}

          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={(event) =>
                      this.setState(byPropKey("email", event.target.value))
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="pass-test"
                    value={password}
                    onChange={(event) =>
                      this.setState(byPropKey("password", event.target.value))
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div className="text-center">
                  <Button
                    disabled={isInvalid}
                    className="btn-round"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>

          <hr />

          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <GoogleLoginButton
                className="btn-round"
                onClick={this.facebookLogin}
              />
              <br></br>
              <p>
                NOTE: University Predictor is only accessible by signed in
                users.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
