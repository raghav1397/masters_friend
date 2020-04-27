import React, { Component } from "react";
import {storage} from '../firebase/auth';
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import Select from 'react-select';
import axios from 'axios';
// import ReactDom from 'react-dom';

class HomePage extends Component {
  state = {
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
    lor4: ''
  };

  
  componentDidMount() {

    const { loggedUser } = this.props;
    if(loggedUser)
    {
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        email: res.val().email,
        loading: false,
        uid: loggedUser.uid
      });
      console.log(res.val())
     
    });
    }
    else{
      this.props.history.push('/SignIn')
    }
  }

  onChange = (e) => { 
    this.setState({ [e.target.name]: e.target.value })  
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const fileInput1 = document.getElementById('file-id');
    var resume1 = fileInput1.files[0];
    const resume_name = this.state.uid + '_resume.pdf';
    const fileInput2 = document.getElementById('file-id2');
    var sop1 = fileInput2.files[0];
    const sop_name = this.state.uid + '_sop.pdf';
    if(resume1)
    {
      resume1 = new File([resume1], resume_name, { type: resume1.type });
      console.log(resume1)
      const uploadTask1 = storage.ref(`resume/${this.state.uid}/${resume1.name}`).put(resume1);
      uploadTask1.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress)
        // this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      });
    }
    if(sop1)
    {
    sop1 = new File([sop1], sop_name, { type: sop1.type });
      const uploadTask2 = storage.ref(`sop/${this.state.uid}/${sop1.name}`).put(sop1);
      
    uploadTask2.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress)
        // this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      });
    }
  
      db.doCreateFrom(this.state.username,this.state.email,this.state.first_name,this.state.last_name,this.state.grade,this.state.gre,this.state.we,this.state.toefl,this.state.uid,this.state.lor1,this.state.lor2,this.state.lor3,this.state.lor4)
          .then(() => {
            this.props.history.push('/Predict')
          })
          .catch(error => {
          });

          axios.post('https://masters-backend-1.wl.r.appspot.com/', {
            // username: this.state.username,
            // first_name: this.state.first_name,
            // last_name: this.state.last_name,
            'email': (this.state.email).toString(),
            'grade': this.state.grade,
            'gre': this.state.gre,
            'work_ex': this.state.we,
            'toefl': this.state.toefl,
            'uid': (this.state.uid).toString(),
            'lor1': this.state.lor1,
            'lor2': this.state.lor2,
            'lor3': this.state.lor3,
            'lor4': this.state.lor4
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

  }

  updateStatelor1(element) {
    this.setState({
      lor1: element
    });
    console.log(this.state.lor1.value)
  }
  updateStatelor2(element) {
    this.setState({
      lor2: element
    });
    console.log(this.state.lor2.value)
  }
  updateStatelor3(element) {
    this.setState({
      lor3: element
    });
    console.log(this.state.lor3.value)
  }
  updateStatelor4(element) {
    this.setState({
      lor4: element
    });
    console.log(this.state)
  }

  render() {
    const { username, loading } = this.state;
    var options = [
        { value: '6' , label: 'Professor (or) Manager' },
        { value: '4', label: 'Associate Professor (or) Team Leader' },
        { value: '2', label: 'Assistant Professor (or) Co-Worker' }
    ];

    return (
      <div>
        <h1>University Suggestor</h1>
        {!loading && <p className="centered">Hello {username}!</p>}
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Fill this Form</h1>
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your last name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="grade">College CGPA</label>
              <input
                type="number" 
                className="form-control"
                pattern="[0-9]*"
                name="grade"
                placeholder="Enter Score"
                value={this.state.grade}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gre">GRE</label>
              <input
                type="number" 
                className="form-control"
                pattern="[0-9]*"
                name="gre"
                placeholder="Enter Score"
                value={this.state.gre}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="we">Work Experience (Months)</label>
              <input
                type="number" 
                className="form-control"
                pattern="[0-9]*"
                name="we"
                placeholder="Enter Months"
                value={this.state.we}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="toefl">TOEFL/IELTS Score</label>
              <input
                type="number" 
                className="form-control"
                pattern="[0-9]*"
                name="toefl"
                placeholder="Enter Score"
                value={this.state.toefl}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lor1">Designation of your LOR Provider 1</label>
              <div>
              <Select
                name="lor1"
                defaultValue={{ label: "None", value: "-1" }}
                value={this.state.lor1}
                options={options}
                onChange={this.updateStatelor1.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="lor2">Designation of your LOR Provider 2</label>
              <div>
              <Select
                name="lor2"
                defaultValue={{ label: "None", value: "-1" }}
                value={this.state.lor2}
                options={options}
                onChange={this.updateStatelor2.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="lor3">Designation of your LOR Provider 3</label>
              <div>
              <Select
                name="lor3"
                defaultValue={{ label: "None", value: "-1" }}
                value={this.state.lor3}
                options={options}
                onChange={this.updateStatelor3.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="lor4">Designation of your LOR Provider 4</label>
              <div>
              <Select
                name="lor4"
                defaultValue={{ label: "None", value: "-1" }}
                value={this.state.lor4}
                options={options}
                onChange={this.updateStatelor4.bind(this)}
              />
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file" 
                id="file-id"
                name="resume"
                className="form-control"
                // value={this.state.resume}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sop">Upload SOP</label>
              <input
                type="file" 
                id="file-id2"
                name="sop"
                className="form-control"
                // value={this.state.sop}
                // onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Submit!
            </button>
          </form>
          <br></br>
        <p>
          IMPORTANT : Make sure to fill all the fields or else confidence score of your univesity suggestion may reduce !!!!
          </p>
     
        <p>
          NOTE : This page is only accessible by signed in users.
        </p>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
