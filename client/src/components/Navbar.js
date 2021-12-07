import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Login from "./Login";

const AppNavbar = () => {
  // set modal display state

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>Hey This is the NavBar</Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
