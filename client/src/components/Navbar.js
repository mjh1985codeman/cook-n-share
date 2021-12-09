import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Auth from "../utils/auth";
import logo from "../assets/FinalLogo.png";

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <div className="nav-style">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Browse">Browse</Nav.Link>
                </Nav.Item>
                {/*Conditionally Rendered if user is NOT logged in*/}
                {!Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link href="/Login">Login</Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is NOT logged in*/}
                {!Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is logged in*/}
                {Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link href="/Creations">Your Creations</Nav.Link>
                  </Nav.Item>
                ) : null}
                {/*Conditionally Rendered if user is logged in*/}
                {Auth.loggedIn() ? (
                  <Nav.Item>
                    <Nav.Link href="/Saved">Saved Creations</Nav.Link>
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
