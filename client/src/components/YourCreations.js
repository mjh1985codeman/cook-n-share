/*
PseudoCode: 
1. Shows a list of the User's Creations (Recipes).
2. Add button that they can click on to create a creation which routes them to the New Creation Component. (Done).
 */

import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const YourCreations = () => {
  return (
    <>
      {!Auth.loggedIn() ? (
        <h1>
          Come on now. . .Login or Sign up in order to see your Awesome
          Creations!
        </h1>
      ) : null}
      {Auth.loggedIn() ? (
        <>
          <h1>This is the Your Creations Page!</h1>
          <Button
            variant="contained"
            component={Link}
            to="/Creations/NewCreation"
          >
            Create New Creation
          </Button>
          <div>
            This is where all the user's saved creations are going to go.
          </div>
        </>
      ) : null}
    </>
  );
};

export default YourCreations;
