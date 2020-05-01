import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Navigation from "./Navigation/Navigation";
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
function LandingPage() {

  function Github_rag() {
    window.open("http://github.com/raghav1397",'_blank');
  }

  function Github_nit() {
    window.open("http://github.com/nithishb",'_blank');
  }

  function Linkedin_rag() {
    window.open("https://www.linkedin.com/in/raghavendhar-vidyasagar/",'_blank');
  }

  function Linkedin_nit() {
    window.open("https://www.linkedin.com/in/nithish-moudhgalya/",'_blank');
  }

  return (
    <>
      <div className="wrapper">
      <ThemeProvider theme={customTheme}>
      <Navigation />
      {/* <LandingPageHeader/> */}
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5>
                  According to a surey, many masters students have little information
                  about the universities they apply to and have little idea about the
                  universities to choose to apply. Furthermore, it gets really hard to do
                  all this by referring so many places. That's why we are here! Make your
                  life simpler by calling your Masters Friend. We work to provide you the
                  best service possible for helping you through the pocess of choosing
                  universities and applying to them.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(https://ucsdnews.ucsd.edu/news_uploads/geisel-dusk-160504.jpg)"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the years, the number of masters students has exponentially 
                      increased but help hasn't. There needs to be a platform to guide 
                      students more procreativey and productively" <br></br>
                      <br></br>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(https://p.kindpng.com/picc/s/412-4126368_collage-of-ivy-league-logos-png-download-collage.png)"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2019_UCLA_Royce_Hall_2.jpg/325px-2019_UCLA_Royce_Hall_2.jpg)"
                    }}
                  ></div>
                  <h3>
                    
                  </h3>
                  <p>
                  A Master of Science degree (or MSc for short) is a degree awarded 
                  at universities around the world for completion of graduate-level 
                  study in a science- or technology-related field.Enrolling in an MSc 
                  degree program translates to making a significant investment in one's 
                  professional career. In addition to the enhanced career prospects that 
                  can be gained by taking a Master of Science, students also develop 
                  valuable personal skills and fulfill a crucial prerequisite to PhD study. 
                  Biological and Life Sciences, Business, Engineering and Technology, 
                  and the Natural Sciences are the key academic fields of study that 
                  offer Master of Science degree programs.
                  </p>
                  <p>
                  Master of Science candidates normally have to do independent 
                  research and present a thesis as a requirement for graduation.It's also 
                  easier to get a job after graduation due to the fact that holding a master's 
                  degree sets the benchmark on what your capabilities are. With a master's 
                  degree, you are much more marketable in the professional world, which 
                  makes you more desirable to employers. Anything that gives you an increase 
                  in desirability is one of the single most important things you can 
                  do when it comes to starting a career.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src="https://media-exp1.licdn.com/dms/image/C5103AQEYjhjGOQz8AA/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=3s1x9COhuC5ubFcVOig2h3Nb-mLthANiAVdpXwmimNc"
                    ></img>
                    <h4 className="title">Raghavendhar Thiruvoipadi</h4>
                    <p className="category text-info">Fullstack developer and ML Specialist</p>
                    <p className="description">
                      Develped several applications using ReactJS, React-Native and Android
                      App Studio. Trained in statistical machine learning and cloud
                      computing standards.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      // href="http://github.com/raghav1397"
                      onClick={Github_rag}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      // href="https://www.linkedin.com/in/raghavendhar-vidyasagar/"
                      onClick={Linkedin_rag}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQHpyQdYHw2rfw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=rtrMjNYR5kuN4oNkFsbDCrzrSrubkWw6pUS2zQdFdYo"
                    ></img>
                    <h4 className="title">Nithish Moudhgalya</h4>
                    <p className="category text-info">Fullstack developer and ML Specialist</p>
                    <p className="description">
                      Developed several applications using ReactJS, Flask and Android App Studio. 
                      Specialized in machine and deep learning. Trained in cloud computing standards.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      // href="http://github.com/nithishb"
                      onClick={Github_nit}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      // href="http://linked.com/in/nithish-moudhgalya"
                      onClick={Linkedin_nit}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default LandingPage;