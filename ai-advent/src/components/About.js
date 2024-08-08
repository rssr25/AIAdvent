import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Information about Math Advent and its mission.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
