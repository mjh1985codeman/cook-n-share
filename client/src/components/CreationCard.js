import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const CreationCard = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Header as="h5">Saved Creation Title</Card.Header>
          <Card.Body>
            <Card.Text>
              <div>
                <h3>Ingredients</h3>
                <ul>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                </ul>
                <h3>Directions</h3>
                <ol>
                  <li>Steps</li>
                  <li>Steps</li>
                  <li>Steps</li>
                </ol>
              </div>
            </Card.Text>
            <Button variant="primary">Delete</Button>
            <Button variant="primary">Share</Button>
            <Button variant="primary">Review</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CreationCard;
