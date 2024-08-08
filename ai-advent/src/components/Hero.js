// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import './Hero.css'; // Custom CSS for Hero
// import heroImage from "../assets/images/child_studying_AI.png";

// function Hero() {
// //     background: url('https://example.com/hero-image.jpg') no-repeat center center;
// //   background-size: cover;
// //   height: 100vh;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   position: relative;
//   return (
//     <div className="hero" style={{background: `url(${heroImage}) center center / cover no-repeat`, backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
//       <Container className="text-center text-white py-5 my-5">
//         <Row>
//           <Col>
//             <h1 className="display-3 happy-monkey-white">Welcome to AI Advent</h1>
//             <p className="lead font-for-text">Join us for daily math challenges in December!</p>
//             <Button variant="light" size="lg" href="#participate" className='font-for-text'>Participate</Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Hero;

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import './Hero.css'; // Custom CSS for Hero
import heroImage from "../assets/images/ai-advent-cover-image.jpg";

function Hero() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to capture form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  // Handle modal open
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address (e.g., name@example.com)');
      return;
    }
    console.log("Form Data Submitted:", formData);
    handleCloseModal(); // Close the modal after submission
  };

  return (
    <div className="hero" style={{ background: `url(${heroImage}) center center / cover no-repeat`, backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <Container className="text-center text-white py-5 my-5">
        <Row>
          <Col>
            <h1 className="display-3 happy-monkey-white">Welcome to AI Advent</h1>
            <p className="lead font-for-text text-padding">Join us for daily AI challenges in December!</p>
            <Button variant="light" size="lg" onClick={handleOpenModal} className='font-for-text buttonTransition'>Participate</Button>
          </Col>
        </Row>
      </Container>

      {/* Registration Modal */}
      <Modal className = "font-for-text" show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register for AI Advent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              //pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address (e.g., name@example.com)"
              />
          </Form.Group>
            <Form.Group controlId="formAge" className="mt-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                required
                min="1"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 font-for-text submitButton" style={{backgroundColor:'#33CCCC', border:'none'}} >
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Hero;
