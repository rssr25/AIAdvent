import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for Footer
import './SectionsEffect.css'

function Footer() {
  return (
    <div style={{paddingTop:'6%'}}>
    <footer className="text-white font-for-text py-4" style={{backgroundColor:'#33CCCC', fontSize: '18px'}}>
      <Container>
        <Row>
          <Col className="text-center">
          <b>
            <p>&copy; 2024 AI Advent. All rights reserved.</p>
            <p>Made with ❤️ by some AI Enthusiasts</p>
            </b>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
