import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import Navigation from "./Navigation/Navigation";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider} from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ImgMediaCard(history) {
  const classes = useStyles();
  console.log(history.history)
  return (
    <>
  <center>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={history.history.link0}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {history.history.univ_name[0]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confidence of your Acceptance {Math.round(history.history.univ_score_new[0]*100)}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href={history.history.link_univ0} target="_blank">
          College Home Page
        </Button>
        <Button size="small" color="primary" href={history.history.link_apply0} target="_blank">
          Apply for the Degree
        </Button>
        <Button size="small" color="primary" href={history.history.link_aid0} target="_blank">
          Apply for Financial Aid
        </Button>
        <Button size="small" color="primary" href={history.history.link_rank0} target="_blank">
          Ranking
        </Button>
      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={history.history.link1}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {history.history.univ_name[1]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confidence of your Acceptance {Math.round(history.history.univ_score_new[1]*100)}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href={history.history.link_univ1} target="_blank">
          College Home Page
        </Button>
        <Button size="small" color="primary" href={history.history.link_apply1} target="_blank">
          Apply for the Degree
        </Button>
        <Button size="small" color="primary" href={history.history.link_aid1} target="_blank">
          Apply for Financial Aid
        </Button>
        <Button size="small" color="primary" href={history.history.link_rank1} target="_blank">
          Ranking
        </Button>
      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={history.history.link2}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {history.history.univ_name[2]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confidence of your Acceptance {Math.round(history.history.univ_score_new[2]*100)}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href={history.history.link_univ2} target="_blank">
          College Home Page
        </Button>
        <Button size="small" color="primary" href={history.history.link_apply2} target="_blank">
          Apply for the Degree
        </Button>
        <Button size="small" color="primary" href={history.history.link_aid2} target="_blank">
          Apply for Financial Aid
        </Button>
        <Button size="small" color="primary" href={history.history.link_rank2} target="_blank">
          Ranking
        </Button>
      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={history.history.link3}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {history.history.univ_name[3]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confidence of your Acceptance {Math.round(history.history.univ_score_new[3]*100)}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href={history.history.link_univ3} target="_blank">
          College Home Page
        </Button>
        <Button size="small" color="primary" href={history.history.link_apply3} target="_blank">
          Apply for the Degree
        </Button>
        <Button size="small" color="primary" href={history.history.link_aid3} target="_blank">
          Apply for Financial Aid
        </Button>
        <Button size="small" color="primary" href={history.history.link_rank3} target="_blank">
          Ranking
        </Button>
      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={history.history.link4}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {history.history.univ_name[4]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Confidence of your Acceptance {Math.round(history.history.univ_score_new[4]*100)}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href={history.history.link_univ4} target="_blank">
          College Home Page
        </Button>
        <Button size="small" color="primary" href={history.history.link_apply4} target="_blank">
          Apply for the Degree
        </Button>
        <Button size="small" color="primary" href={history.history.link_aid4} target="_blank">
          Apply for Financial Aid
        </Button>
        <Button size="small" color="primary" href={history.history.link_rank4} target="_blank">
          Ranking
        </Button>
      </CardActions>
    </Card>
    <br></br> 
    </center>
    </>
  );
}

class Predict extends Component {
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
      univ_name:[],
      univ_score:[],
      univ_score_new:[]
    };
  }

  componentDidMount() {
    this.setState({
      first_name: this.props.location.state.first_name
    })
    this.state.univ_name.push(this.props.location.state.univ1.toUpperCase());
    this.state.univ_name.push(this.props.location.state.univ2.toUpperCase());
    this.state.univ_name.push(this.props.location.state.univ3.toUpperCase());
    this.state.univ_name.push(this.props.location.state.univ4.toUpperCase());
    this.state.univ_name.push(this.props.location.state.univ5.toUpperCase());
    this.state.univ_score.push(this.props.location.state.univ_score1);
    this.state.univ_score.push(this.props.location.state.univ_score2);
    this.state.univ_score.push(this.props.location.state.univ_score3);
    this.state.univ_score.push(this.props.location.state.univ_score4);
    this.state.univ_score.push(this.props.location.state.univ_score5);
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
    console.log("raghav")
    console.log(this.state)
  }

  render() {
    return (
      <>
      <div>
      <ThemeProvider theme={customTheme}>
      <Navigation />
        <div>
          <center>
          <h4>Here are your Results - {this.state.first_name.toUpperCase()}</h4>
          <p>Possibility of Acceptance</p>
          </center>
        </div>
        <br></br>
        <ImgMediaCard history={this.state}/>
        </ThemeProvider>
        </div>
      </>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Predict); //grants authorization to open endpoint if an user is signed in
// export default Predict;
