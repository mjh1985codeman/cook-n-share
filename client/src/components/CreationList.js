import React from "react";
import { Container } from "react-bootstrap";

const CreationList = ({ creations, creationTitle }) => {
  if (!creations.length) {
    return <h3>No Creations Yet</h3>;
  }

  return (
    <div>
      <Container>
        {creations &&
          creations.map((creation) => (
            <div key={creation._id} className="card mb-3">
              <p className="card-header">
                <h3>{creation.creationTitle}</h3>
                {creation.username} created on {creation.createdAt}
              </p>
              <div className="card-body">
                <p>{creation.ingredients}</p>
                <p>{creation.creationDescription}</p>
                <p>{creation.directions}</p>
              </div>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default CreationList;
