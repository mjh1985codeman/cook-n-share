/*
PseudoCode: 
Create a Creation (Recipe)
1. Name Your Creation 
2. What are ya made of?! (Ingredients)
3. But How?! (Directions)
4. Seeing is Believing (Picture UpLoad)
5. Spread the Love (Share Options (Message (Internal Messaging System would need to be built out, 'story', ), ))

 */
import React from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_CREATION } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

const NewCreation = () => {
  let titleInput;
  let ingInput;
  let descInput;
  let directions;
  const [addCreation, { data, loading, error }] = useMutation(ADD_CREATION);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      {!Auth.loggedIn() ? (
        <h1>
          Come on now. . .Login or Sign up in order to create something awesome!
        </h1>
      ) : null}
      {/*The user must be logged in order to create something*/}
      {Auth.loggedIn() ? (
        <>
          <h1>This is where I'm going to create a new Creation!</h1>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addCreation({
                  variables: {
                    creationTitle: titleInput.value,
                    ingredients: ingInput.value,
                    creationDescription: descInput.value,
                    directions: directions.value,
                  },
                });
                titleInput.value = "";
              }}
            >
              <h3>Creation Title</h3>
              <input
                ref={(node) => {
                  titleInput = node;
                }}
              />
              <h3>Ingredients</h3>
              <input
                ref={(node) => {
                  ingInput = node;
                }}
              />
              <h3>Creation Description</h3>
              <input
                ref={(node) => {
                  descInput = node;
                }}
              />
              <h3>Directions</h3>
              <input
                ref={(node) => {
                  directions = node;
                }}
              />
              <button type="submit">Create Creation</button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
};

export default NewCreation;
