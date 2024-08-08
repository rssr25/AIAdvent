import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import EventCard from './EventCard';

const Home = () => {
  const events = [
    { id: 1, title: 'Event 1', description: 'Description for event 1' },
    { id: 2, title: 'Event 2', description: 'Description for event 2' },
    { id: 3, title: 'Event 3', description: 'Description for event 3' },
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to Math Advent</h1>
          <p>Explore the world of mathematics through exciting events and activities.</p>
        </Col>
      </Row>
      <Row>
        {events.map(event => (
          <Col md={4} key={event.id}>
            <EventCard title={event.title} description={event.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
