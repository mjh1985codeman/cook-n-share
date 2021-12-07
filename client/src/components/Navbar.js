import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/SignUp">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
