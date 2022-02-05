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

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className="creation-list">
      <Container>
        {creations &&
          creations.map((creation) => (
            <div key={creation._id}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <ContextAwareToggle eventKey="0">
                      <Container>
                        <h3>{creation.creationTitle}</h3>
                        {creation.username} created on {creation.createdAt}
                      </Container>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>{creation.ingredients}</p>
                      <p>{creation.creationDescription}</p>
                      <p>{creation.directions}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default CreationList;
