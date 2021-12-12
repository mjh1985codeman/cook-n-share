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

const NewCreation = () => {
  return (
    <>
      {/*The user must be logged in order to create something*/}
      {Auth.loggedIn() ? (
        <h1>This is where I'm going to create a new Creation!</h1>
      ) : null}
      {/*Conditionally Rendered if user is NOT logged in*/}
      {!Auth.loggedIn() ? (
        <h1>
          Come on now. . .Login or Sign up in order to create something awesome!
        </h1>
      ) : null}
    </>
  );
};

export default NewCreation;
