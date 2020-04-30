import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function NavigationNonAuth() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="https://masters-273323.web.app" id="navbar-brand">
              <h6>Masters Friend</h6>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              A journey to unfold!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              aria-controls="basic-navbar-nav"
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to={routes.HOME}>
                  <Button className="btn-round" color="info">
                    University Suggestor
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={routes.SIGN_IN}>
                  <Button className="btn-round" color="info">
                    Sign In
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationNonAuth;
