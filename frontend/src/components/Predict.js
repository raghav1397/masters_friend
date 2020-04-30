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
          image={history.history.link1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {history.history.univ1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
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
            {history.history.univ2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
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
            {history.history.univ3}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
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
            {history.history.univ4}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
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
          image={history.history.link5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {history.history.univ5}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
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
      uni: []
    };
  }

  onAlgo = (e) => {
    console.log(this.state.univ1)
    if(this.state.univ1==="MIT")
    {
      this.setState({
        link1: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg"
      })
    }
    else if(this.state.univ2==="MIT")
    {
      this.setState({
        link2: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg"
      })
    }
    else if(this.state.univ3==="MIT")
    {
      this.setState({
        link3: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg"
      })
    }
    else if(this.state.univ4==="MIT")
    {
      this.setState({
        link4: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg"
      })
    }
    else if(this.state.univ5==="MIT")
    {
      this.setState({
        link5: "http://mstatic.mit.edu/nom150/items/seal_red_lg.jpg"
      })
    }
    if(this.state.univ1==="USC")
    {
      console.log("raghav")
      this.setState({
        link1: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg"
      })
    }
    else if(this.state.univ2==="USC")
    {
      this.setState({
        link2: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg"
      })
    }
    else if(this.state.univ3==="USC")
    {
      this.setState({
        link3: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg"
      })
    }
    else if(this.state.univ4==="USC")
    {
      this.setState({
        link4: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg"
      })
    }
    else if(this.state.univ5==="USC")
    {
      this.setState({
        link5: "https://upload.wikimedia.org/wikipedia/en/b/bc/University_of_Southern_California_seal.svg"
      })
    }
    if(this.state.univ1==="NEU")
    {
      this.setState({
        link1: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg"
      })
    }
    else if(this.state.univ2==="NEU")
    {
      this.setState({
        link2: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg"
      })
    }
    else if(this.state.univ3==="NEU")
    {
      this.setState({
        link3: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg"
      })
    }
    else if(this.state.univ4==="NEU")
    {
      this.setState({
        link4: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg"
      })
    }
    else if(this.state.univ5==="NEU")
    {
      this.setState({
        link5: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg"
      })
    }
    if(this.state.univ1==="UTD")
    {
      this.setState({
        link1: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg"
      })
    }
    else if(this.state.univ2==="UTD")
    {
      this.setState({
        link2: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg"
      })
    }
    else if(this.state.univ3==="UTD")
    {
      this.setState({
        link3: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg"
      })
    }
    else if(this.state.univ4==="UTD")
    {
      this.setState({
        link4: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg"
      })
    }
    else if(this.state.univ5==="UTD")
    {
      this.setState({
        link5: "https://upload.wikimedia.org/wikipedia/en/1/17/University_of_Texas_at_Dallas_seal.svg"
      })
    }
    if(this.state.univ1==="NCSU")
    {
      this.setState({
        link1: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg"
      })
    }
    else if(this.state.univ2==="NCSU")
    {
      this.setState({
        link2: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg"
      })
    }
    else if(this.state.univ3==="NCSU")
    {
      this.setState({
        link3: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg"
      })
    }
    else if(this.state.univ4==="NCSU")
    {
      this.setState({
        link4: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg"
      })
    }
    else if(this.state.univ5==="NCSU")
    {
      this.setState({
        link5: "https://upload.wikimedia.org/wikipedia/en/2/24/North_Carolina_State_University_seal.svg"
      })
    }
  }

  componentDidMount() {
    this.setState({
      first_name: this.props.location.state.first_name.toUpperCase(),
      univ1: this.props.location.state.univ1.toUpperCase(),
      univ_score1: this.props.location.state.univ_score1,
      univ2: this.props.location.state.univ2.toUpperCase(),
      univ_score2: this.props.location.state.univ_score2,
      univ3: this.props.location.state.univ3.toUpperCase(),
      univ_score3: this.props.location.state.univ_score3,
      univ4: this.props.location.state.univ4.toUpperCase(),
      univ_score4: this.props.location.state.univ_score4,
      univ5: this.props.location.state.univ5.toUpperCase(),
      univ_score5: this.props.location.state.univ_score5
    });
    this.onAlgo.bind(this);
  }

  render() {
    
    return (
      <>
      <Navigation />
        <div>
          <center>
          <h4>Here are your Results - {this.state.first_name}</h4>
          <p>Possibility of Acceptance</p>
          {/* <p>{this.state.univ1} {this.state.univ_score1}</p>
          <p>{this.state.univ2} {this.state.univ_score2}</p>
          <p>{this.state.univ3} {this.state.univ_score3}</p>
          <p>{this.state.univ4} {this.state.univ_score4}</p>
          <p>{this.state.univ5} {this.state.univ_score5}</p> */}
          </center>
        </div>
        <ImgMediaCard history={this.state}/>
      </>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Predict); //grants authorization to open endpoint if an user is signed in
// export default Predict;
