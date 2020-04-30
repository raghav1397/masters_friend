import React, { Component } from "react";
import { Button, Form, Alert, Container, Row, Col } from "reactstrap";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in
import { auth } from "../firebase";
import { db } from "../firebase";
import { storage } from "../firebase/auth";
import Navigation from "./Navigation/Navigation";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: "",
  error: null,
  showingAlert: false,
  users: null,
  username: "",
  loading: true,
  first_name: "",
  last_name: "",
  grade: "",
  update: 0,
  gre: "",
  we: "",
  toefl: "",
  resume: "",
  sop: "",
  entry: "",
  uid: "",
  redirect: null,
  lor1: "",
  lor2: "",
  lor3: "",
  lor4: "",
  progresssop: "",
  progressresume: "",
  url_resume: "",
  url_sop: "",
};

class AccountPage extends Component {
  componentDidMount() {
    const { loggedUser } = this.props;
    console.log(loggedUser.uid);
    if (loggedUser) {
      db.doGetAnUnser(loggedUser.uid).then((res) => {
        this.setState({
          username: res.val().username,
          email: res.val().email,
          loading: false,
          uid: loggedUser.uid,
        });
        console.log(res.val());
      });
    }
    db.doGetForm(loggedUser.uid).then((res) => {
      this.setState({
        first_name: res.val().first_name,
        last_name: res.val().last_name,
        grade: res.val().grade,
        gre: res.val().gre,
        we: res.val().work_ex,
        toefl: res.val().toefl,
        lor1: res.val().lor1,
        lor2: res.val().lor2,
        lor3: res.val().lor3,
        lor4: res.val().lor4,
      });
      console.log(res.val());
    });
  }

  Previewresume = (e) => {
    const name1 = this.state.uid + "_resume.pdf";
    const dateRef = storage.ref(`resume/${this.state.uid}`);
    dateRef
      .child(`${name1}`)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        const win = window.open(url, "_blank");
        if (win != null) {
          win.focus();
        }
      })
      .catch((error) => {
        // Handle any errors
        const url1 = "";
        const win = window.open(url1, "_blank");
        if (win != null) {
          win.focus();
        }
      });
  };

  Previewsop = (e) => {
    const name1 = this.state.uid + "_sop.pdf";
    const dateRef = storage.ref(`sop/${this.state.uid}`);
    dateRef
      .child(`${name1}`)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        const win = window.open(url, "_blank");
        if (win != null) {
          win.focus();
        }
      })
      .catch((error) => {
        // Handle any errors
        const url1 = "";
        const win = window.open(url1, "_blank");
        if (win != null) {
          win.focus();
        }
      });
  };

  Page = (e) => {
    this.props.history.push("/Home");
  };

  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const email = this.state.email;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
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
      showingAlert: true,
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 4000);
  };

  render() {
    const { error, showingAlert } = this.state;

    return (
      <div>
        <Navigation />
        <Container>
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
              <Button type="submit">Reset My Password</Button>
            </div>
          </Form>
          <form>
            <br></br>
            <h1 className="h3 mb-3 font-weight-normal">Your Form Data</h1>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="name">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    disabled={true}
                    value={this.state.first_name}
                  />
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="name">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    disabled={true}
                    value={this.state.last_name}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="grade">College CGPA</label>
                  <input
                    type="number"
                    className="form-control"
                    pattern="[0-9]*"
                    disabled={true}
                    name="grade"
                    value={this.state.grade}
                  />
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="gre">GRE</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled={true}
                    pattern="[0-9]*"
                    name="gre"
                    value={this.state.gre}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="we">Work Experience (Months)</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled={true}
                    pattern="[0-9]*"
                    name="we"
                    value={this.state.we}
                  />
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="toefl">TOEFL/IELTS Score</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled={true}
                    pattern="[0-9]*"
                    name="toefl"
                    value={this.state.toefl}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="lor1">
                    Designation of your LOR Provider 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={true}
                    name="first_name"
                    value={this.state.lor1.label}
                  />
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="lor2">
                    Designation of your LOR Provider 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={true}
                    name="first_name"
                    value={this.state.lor2.label}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="lor3">
                    Designation of your LOR Provider 3
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={true}
                    name="first_name"
                    value={this.state.lor3.label}
                  />
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="lor4">
                    Designation of your LOR Provider 4
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={true}
                    name="first_name"
                    value={this.state.lor4.label}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="resume">Uploaded Resume</label>
                  <br></br>
                  <center>
                    <Button type="button" onClick={this.Previewresume}>
                      Preview Resume
                    </Button>
                  </center>
                </div>
              </Col>
              <Col sm="5">
                <div className="form-group">
                  <label htmlFor="sop">Uploaded SOP</label>
                  <br></br>
                  <center>
                    <Button type="button" onClick={this.Previewsop}>
                      Preview Resume
                    </Button>
                  </center>
                </div>
              </Col>
            </Row>
            <center>
              <p>
                NOTE : If you have not updated a field in the form, the field
                will be blank !!!
              </p>
              <Button type="button" onClick={this.Page}>
                Click Here to Edit your Form
              </Button>
            </center>
          </form>
          <br></br>
        </Container>
      </div>
    );
  }
}

const authCondition = (authUser) =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);
