import React, { Component } from "react";
import { storage } from "../firebase/auth";
import { Button, Container } from "reactstrap";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import Select from "react-select";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navigation from "./Navigation/Navigation";
import LoadingOverlay from 'react-loading-overlay';
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

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      username: "",
      loading: true,
      first_name: "",
      last_name: "",
      email: "",
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
      uni: [],
      loading1: false,
      univ_name: [],
      univ_score: [],
      univ_score_new: []
    };
  }

  componentDidMount() {
    // const theme = useTheme();
    const { loggedUser } = this.props;
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
    } else {
      this.props.history.push("/SignIn");
    }
    db.doGetForm(loggedUser.uid).then((res) => {
      if (res.val() != null) {
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
      }
      console.log(res.val());
    });
  }

  onChangeresume = (e) => {
    const fileInput1 = document.getElementById("file-id");
    var resume1 = fileInput1.files[0];
    const resume_name = this.state.uid + "_resume.pdf";
    if (resume1) {
      resume1 = new File([resume1], resume_name, { type: resume1.type });
      console.log(resume1);
      const uploadTask1 = storage
        .ref(`resume/${this.state.uid}/${resume1.name}`)
        .put(resume1);
      uploadTask1.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progressresume = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progressresume });
          console.log(this.state.progressresume);
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref(`resume/${this.state.uid}`)
            .child(`${resume1.name}`)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url_resume: url });
              console.log(this.state.url_resume);
            });
        }
      );
    }
  };

  onChangesop = (e) => {
    const fileInput2 = document.getElementById("file-id2");
    var sop1 = fileInput2.files[0];
    const sop_name = this.state.uid + "_sop.pdf";

    if (sop1) {
      sop1 = new File([sop1], sop_name, { type: sop1.type });
      const uploadTask2 = storage
        .ref(`sop/${this.state.uid}/${sop1.name}`)
        .put(sop1);

      uploadTask2.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progresssop = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progresssop });
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref(`sop/${this.state.uid}`)
            .child(`${sop1.name}`)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url_sop: url });
              console.log(this.state.url_sop);
            });
        }
      );
    }
  };

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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      loading1: true
    })
    db.doCreateFrom(
      this.state.username,
      this.state.email,
      this.state.first_name,
      this.state.last_name,
      this.state.grade,
      this.state.gre,
      this.state.we,
      this.state.toefl,
      this.state.uid,
      this.state.lor1,
      this.state.lor2,
      this.state.lor3,
      this.state.lor4
    )
      .then(() => {
        // this.props.history.push('/Predict')
      })
      .catch((error) => {});
    axios.post("https://mf-backend-1-276618.uk.r.appspot.com/", {
    // axios.post("http://localhost:5000/", {
        email: this.state.email.toString(),
        grade: this.state.grade,
        gre: this.state.gre,
        work_ex: this.state.we,
        toefl: this.state.toefl,
        uid: this.state.uid.toString(),
        lor1: this.state.lor1,
        lor2: this.state.lor2,
        lor3: this.state.lor3,
        lor4: this.state.lor4,
      })
      .then(
        (response) => {
          this.setState({
            uni: response.data
          });
          console.log(this.state.uni);
          Object.keys(this.state.uni).map((key) => (
            console.log(key,this.state.uni[key].score)
          )
          )
          for (let [key, value] of Object.entries(this.state.uni)) {
            this.state.univ_name.push(key.toUpperCase());
            this.state.univ_score.push(value.score);
          }
          for (const [index,value] of this.state.univ_score.entries()) {
            console.log(index);
            if(value < 0)
            {
              this.state.univ_score_new.push(0);
            }
            else
            {
              this.state.univ_score_new.push(value);
            }
          }
          for (const [index,value] of this.state.univ_score.entries()) {
            console.log(index);
            if(value < 0)
            {
              this.state.univ_score_new.push(0);
            }
            else
            {
              this.state.univ_score_new.push(value);
            }
          }
          for (const [index, value] of this.state.univ_name.entries()) {
            console.log(value);
            if(value==="USC")
            {
              this.setState({
                    ["link"+index]: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg",
                    ["link_univ"+index]: "https://www.usc.edu/",
                    ["link_rank"+index]: "https://www.usnews.com/best-graduate-schools/top-science-schools/university-of-southern-california-123961",
                    ["link_apply"+index]: "https://viterbigradadmission.usc.edu/programs/masters/apply/ready-to-apply/",
                    ["link_aid"+index]: "https://viterbigradadmission.usc.edu/programs/masters/tuition-funding/financial-aid-information/"
                  })
            }
            else if(value==="MIT")
            {
              this.setState({
                    ["link"+index]: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg",
                    ["link_univ"+index]: "http://www.mit.edu/",
                    ["link_rank"+index]: "https://www.usnews.com/best-graduate-schools/top-science-schools/massachusetts-institute-of-technology-166683#computer_science",
                    ["link_apply"+index]: "https://gradadmissions.mit.edu/programs/cse",
                    ["link_aid"+index]: "http://catalog.mit.edu/mit/graduate-education/financial-aid/"
                  })
            }
            else if(value==="NCSU")
            {
              this.setState({
                    ["link"+index]: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg",
                    ["link_univ"+index]: "https://www.ncsu.edu/",
                    ["link_rank"+index]: "https://www.usnews.com/best-graduate-schools/top-science-schools/north-carolina-state-university-raleigh-199193",
                    ["link_apply"+index]: "https://www.csc.ncsu.edu/academics/graduate/procedure.php",
                    ["link_aid"+index]: "https://www.csc.ncsu.edu/academics/students_financial.php"
                  })
            }
            else if(value==="NEU")
            {
              this.setState({
                    ["link"+index]: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
                    ["link_univ"+index]: "https://www.northeastern.edu/",
                    ["link_rank"+index]: "https://www.usnews.com/best-graduate-schools/top-science-schools/northeastern-university-167358",
                    ["link_apply"+index]: "https://www.khoury.northeastern.edu/academics/masters/masters-apply/",
                    ["link_aid"+index]: "https://www.northeastern.edu/graduate/admissions-information/financial-aid/"
                  })
            }
            else
            {
              this.setState({
                    ["link"+index]: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg",
                    ["link_univ"+index]: "https://www.utdallas.edu/",
                    ["link_rank"+index]: "https://www.usnews.com/best-graduate-schools/top-science-schools/the-university-of-texas-at-dallas-228787",
                    ["link_apply"+index]: "https://www.utdallas.edu/admissions/graduate/steps-to-admission/apply-now/",
                    ["link_aid"+index]: "https://cs.utdallas.edu/admissions/graduate-admissions/financial-aid/"
                  })
            }
          }
          console.log(this.state)
          this.props.history.push({
            pathname: "/Predict",
            state: this.state,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  updateStatelor1(element) {
    this.setState({
      lor1: element,
    });
    console.log(this.state.lor1.value);
  }
  updateStatelor2(element) {
    this.setState({
      lor2: element,
    });
    console.log(this.state.lor2.value);
  }
  updateStatelor3(element) {
    this.setState({
      lor3: element,
    });
    console.log(this.state.lor3.value);
  }
  updateStatelor4(element) {
    this.setState({
      lor4: element,
    });
    console.log(this.state);
  }

  render() {
    const { username, loading } = this.state;
    var options = [
      { value: "6", label: "Professor (or) Manager" },
      { value: "4", label: "Associate Professor (or) Team Leader" },
      { value: "2", label: "Assistant Professor (or) Co-Worker" },
      { value: "0", label: "None" },
    ];

    return (
        <>
        <ThemeProvider theme={customTheme}>
        <Navigation />
        <LoadingOverlay
        active={this.state.loading1}
        spinner
        text='Sit Back and Relax.....'
        >
        <Container>
        <div>
          <br></br>
          {!loading && <p className="centered">Hello {username}!</p>}
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Fill this Form</h1>
            <p>IMPORTANT : Fill all the fields to compute your result !!!!</p>
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
                  <label htmlFor="lor1">
                    Designation of your LOR Provider 1
                  </label>
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
                  <label htmlFor="lor2">
                    Designation of your LOR Provider 2
                  </label>
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
                  <label htmlFor="lor3">
                    Designation of your LOR Provider 3
                  </label>
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
                  <label htmlFor="lor4">
                    Designation of your LOR Provider 4
                  </label>
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
                  <label htmlFor="grade">College CGPA (Out of 10)</label>
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
                  <label htmlFor="gre">GRE (Out of 340)</label>
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
                  <label htmlFor="toefl">TOEFL (Out of 120) / IELTS (Out of 9)</label>
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
                  <label htmlFor="resume">Upload Resume (Only PDF)</label>
                  <br></br>
                  <Button className="btn-round" color="info">
                    Choose File
                    <input
                      type="file"
                      id="file-id"
                      name="resume"
                      className="form-control"
                      // value={this.state.resume}
                      onChange={this.onChangeresume}
                    />
                  </Button>
                </div>
                <ProgressBar now={this.state.progressresume} />
                <p>
                  NOTE : Preview the Document only after upload is complete....
                </p>
                <Button
                  className="btn-round"
                  type="button"
                  onClick={this.Previewresume}
                >
                  Preview Resume
                </Button>
                <div className="form-group">
                  <label htmlFor="sop">Upload SOP (Only PDF)</label>
                  <br></br>
                  <Button className="btn-round" color="info">
                    Choose File
                    <input
                      type="file"
                      id="file-id2"
                      name="sop"
                      className="form-control"
                      // value={this.state.sop}
                      onChange={this.onChangesop}
                    />
                  </Button>
                </div>
                <ProgressBar now={this.state.progresssop} />
                <p>
                  NOTE : Preview the Document only after upload is complete....
                </p>
                <Button
                  className="btn-round"
                  type="button"
                  onClick={this.Previewsop}
                >
                  Preview SOP
                </Button>
            <center>
              <Button
                // type="submit"
                onClick={this.onSubmit}
                className="btn btn-lg btn-success btn-block btn-round"
              >
                Submit!
              </Button>
            </center>
          </form>
          <br></br>
          <p>
            IMPORTANT : Make sure to fill all the fields or else confidence
            score of your univesity suggestion may reduce !!!!
          </p>

          <p>NOTE : This page is only accessible by signed in users.</p>
        </div>
        </Container>
        </LoadingOverlay>
        </ThemeProvider>
        </>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
