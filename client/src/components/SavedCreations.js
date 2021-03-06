import React from "react";
import Auth from "../utils/auth";

const SavedCreations = () => {
  return (
    <>
      {!Auth.loggedIn() ? (
        <h1>
          Come on now. . .Login or Sign up in order to see your saved recipes!
        </h1>
      ) : null}
      {Auth.loggedIn() ? (
        <>
          <h1>
            This is the Saved Creations Page! Where a list of creations that the
            user has saved will appear.
          </h1>
        </>
      ) : null}
    </>
  );
};

export default SavedCreations;
