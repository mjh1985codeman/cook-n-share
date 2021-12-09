import React from "react";

const Browse = () => {
  const findStuff = () => {
    alert("You searched for something!");
  };

  return (
    <>
      <form>
        <label htmlFor="header-search">
          <span className="visually-hidden">
            Search for your desired culinary creations!
          </span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search for your desired culinary creations!"
          name="s"
        />
        <button type="submit" onClick={findStuff}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Browse;
