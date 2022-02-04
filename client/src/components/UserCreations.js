/*
PseudoCode: 
1. Shows a list of the User's Creations (Recipes).
2. Add button that they can click on to create a creation which routes them to the New Creation Component. (Done).
 */

import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Container } from "react-bootstrap";

const UserCreations = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const userCreations = userData.userCreations;

  return (
    <>
      {!Auth.loggedIn() ? (
        <h1>
          Come on now. . .Login or Sign up in order to see your Awesome
          Creations!
        </h1>
      ) : null}
      {Auth.loggedIn() && userData ? (
        <>
          <h1>This is the Users Page!</h1>
          <Button
            variant="contained"
            component={Link}
            to="/Creations/NewCreation"
          >
            Create New Creation
          </Button>

          <div className="creation-list">
            <Container>
              {userCreations &&
                userCreations.map((creation) => (
                  <div key={creation._id} className="card mb-3">
                    <div className="card-header">
                      <h3>{creation.creationTitle}</h3>
                      {creation.username} created on {creation.createdAt}
                    </div>
                    <div className="card-body">
                      <p>{creation.ingredients}</p>
                      <p>{creation.creationDescription}</p>
                      <p>{creation.directions}</p>
                    </div>
                  </div>
                ))}
            </Container>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UserCreations;
