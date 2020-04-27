import React, { Component } from "react";
import { Button, Form, Alert } from "reactstrap";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in
import { auth } from "../firebase";
import { db } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null,
  showingAlert: false
};

class AccountPage extends Component {
  componentDidMount() {

    const { loggedUser } = this.props;
    console.log(loggedUser.uid)
    if(loggedUser)
    {
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        email: res.val().email
      });
      console.log(res.val())
     
    });
    }
  }

state = { ...INITIAL_STATE };

  onSubmit = event => {
    const email = this.state.email;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //show alert message for some seconds
      });
    event.preventDefault();
    setTimeout(function () {
      window.location.reload(1);
  }, 3000);  
  };

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);

  };

  render() {
    const { error, showingAlert } = this.state;

    return (
      <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}
        <br></br>
        <h5>Reset Link will be sent to your Email</h5>
        <br></br>
        <Form onSubmit={this.onSubmit}>
          <div className="text-center">
            <Button type="submit">
              Reset My Password
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);