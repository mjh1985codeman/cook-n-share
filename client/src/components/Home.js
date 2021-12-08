import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/Cook-N-Share.png";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <img src={logo} alt="Logo" />
      <h1>This is the Home Page!</h1>
    </>
  );
};

export default Home;
