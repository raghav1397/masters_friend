import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut";

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

function NavigationAuth() {
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
              Masters Friend
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              A journey to unfold!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Button className="btn-round" color="info">
                  <Link to={routes.HOME}>University Suggestor</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button className="btn-round" color="info">
                  <Link to={routes.ACCOUNT}>Account</Link>
                </Button>
              </NavItem>
              <NavItem>
                <SignOutButton />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationAuth;
