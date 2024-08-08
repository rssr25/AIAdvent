import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ title, description }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
