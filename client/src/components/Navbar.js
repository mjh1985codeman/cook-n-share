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
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/SignUp">
                Sign Up
              </Nav.Link>
            </Nav.Item>
            {/*Logout Conditionally Rendered if user is logged in*/}
            {Auth.loggedIn() ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Logout
                </Nav.Link>
              </Nav.Item>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
