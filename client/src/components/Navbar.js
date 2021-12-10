import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import logo from "../assets/FinalLogo.png";

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <div className="nav-style">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="Browse">
                    Browse
                  </Nav.Link>
                </Nav.Item>
                {/*Conditionally Rendered if user is NOT logged in*/}
                {!Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is NOT logged in*/}
                {!Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link as={Link} to="/SignUp">
                      Sign Up
                    </Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is logged in*/}
                {Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Creations">
                      Your Creations
                    </Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is logged in*/}
                {Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Saved">
                      Saved Creations
                    </Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is logged in*/}
                {Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link onClick={() => Auth.logout()}>Logout</Nav.Link>
                  </Nav.Item>
                ) : null}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default AppNavbar;
