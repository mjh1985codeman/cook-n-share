import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Search">
                Search
              </Nav.Link>
            </Nav.Item>
            {!Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
              </Nav.Item>
            ) : null}
            {!Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/SignUp">
                  Sign Up
                </Nav.Link>
              </Nav.Item>
            ) : null}
            {Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/Creations">
                  Your Creations
                </Nav.Link>
              </Nav.Item>
            ) : null}
            {Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/Saved">
                  Saved Recipes
                </Nav.Link>
              </Nav.Item>
            ) : null}
            {/*Logout Conditionally Rendered if user is logged in*/}
            {Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link onClick={() => Auth.logout()}>Logout</Nav.Link>
              </Nav.Item>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
