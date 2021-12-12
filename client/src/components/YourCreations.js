/*
PseudoCode: 
1. Shows a list of the User's Creations (Recipes).
2. Add button that they can click on to create a creation which routes them to the New Creation Component. (Done).
 */

import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const YourCreations = () => {
  return (
    <>
      <h1>This is the Your Creations Page!</h1>
      <Button variant="contained" component={Link} to="/Creations/NewCreation">
        Create New Creation
      </Button>
      <div>This is where all the user's saved creations are going to go.</div>
    </>
  );
};

export default YourCreations;
