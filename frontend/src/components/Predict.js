import React, { Component } from "react";
// import { db } from "../firebase";
import withAuthorization from "./withAuthorization";
// import axios from 'axios';


class Predict extends Component {

  constructor(props)
  {
    super(props)
  this.state = {
    users: null,
    username: '',
    loading: true,
    first_name: '',
    last_name: '',
    email: '',
    grade: '',
    update: 0,
    gre: '',
    we: '',
    toefl:'',
    resume: '',
    sop: '',
    entry: '',
    uid: '',
    redirect: null,
    lor1: '',
    lor2: '',
    lor3: '',
    lor4: '',
    progresssop: '',
    progressresume: '',
    url_resume: '',
    url_sop: '',
    college1: '',
    college2: '',
    college3: '',
    college4: '',
    college5: ''
  };
  console.log(this.props.location.state)
  }
  componentDidMount() {
    this.setState({
      mit: this.props.location.state.mit,
      first_name: this.props.location.state.first_name,
      usc: this.props.location.state.usc,
      ncsu: this.props.location.state.ncsu,
      utd: this.props.location.state.utd,
      neu: this.props.location.state.neu
    })
  }

  render() {
    return (
      <div>
        <h1>Under Construction</h1>
        <div>
    <h4>Thank you for your patience {this.state.first_name}</h4>
    <p>Possibility of Acceptance</p>
    <p>MIT {this.state.mit}</p>
    <p>USC {this.state.usc}</p>
    <p>NCSU {this.state.ncsu}</p>
    <p>UTD {this.state.utd}</p>
    <p>NEU {this.state.neu}</p>
        </div>
        </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Predict); //grants authorization to open endpoint if an user is signed in
// export default Predict;