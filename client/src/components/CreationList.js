import React, { useContext } from "react";
import {
  Container,
  useAccordionButton,
  AccordionContext,
  Accordion,
  Card,
} from "react-bootstrap";

const CreationList = ({ creations }) => {
  if (!creations.length) {
    return <h3>No Creations Yet</h3>;
  }

  return (
    <div className="creation-list">
      <Container>
        {creations &&
          creations.map((creation) => (
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
  );
};

export default CreationList;
