import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MainContent.css'; // Custom CSS for MainContent
import childrenParticipatingImg from "../assets/images/children_studying.jpeg";
import childrenSatisfiedImg from "../assets/images/children_laughing.jpeg";
import childstudyingAI from "../assets/images/child_studying_AI.jpeg";
import { useInView } from 'react-intersection-observer';
import './SectionsEffect.css';

function MainContent() {

    const { ref: section1Ref, inView: section1InView } = useInView({
        triggerOnce: true, // Only trigger once when the section enters the view
        threshold: 0.1,    // 10% of the section should be visible
      });

  return (
    <div className= {`section section1-parallax ${section1InView ? 'visible' : ''}`} ref={section1Ref}>
    <div className="my-5 section-content sectionFormatting">
        <h1 className='happy-monkey-white titles'>
        WHAT WE OFFER
        </h1>
      <Row style={{width: '101%', justifyContent: 'center', marginLeft: '3%'}}>
        <Col className = "cardSpacing" md={3}>
          <Card className="shadow-sm mb-4 card-image" style={{border:'none'}}>
          <Card.Img variant="top" src={childrenParticipatingImg} alt={`Children Participating Image`} />
            <Card.Body>
              <Card.Title className='happy-monkey-regular-for-card-titles cardTitles'>Studying Together</Card.Title>
              <Card.Text className='font-for-card-text text-padding'>
                Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
              </Card.Text>
              <a href="#challenge1" className="btn btn-primary" style={{backgroundColor:'#33CCCC', border:'none', padding: '12px 24px', fontSize: '18px', width: 'auto', height: 'auto'}}>Learn More</a>
            </Card.Body>
          </Card>
        </Col>
        <Col className = "cardSpacing" md={3}>
          <Card className="shadow-sm mb-4 card-image" style={{border:'none'}}>
          <Card.Img variant="top" src={childrenSatisfiedImg} alt={`Children Happy Image`} />
            <Card.Body>
              <Card.Title className='happy-monkey-regular-for-card-titles cardTitles'>Enjoying Together</Card.Title>
              <Card.Text className='font-for-card-text text-padding'>
                Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
              </Card.Text>
              <a href="#challenge2" className="btn btn-primary" style={{backgroundColor:'#33CCCC', border:'none', padding: '12px 24px', fontSize: '18px', width: 'auto', height: 'auto'}}>Learn More</a>
            </Card.Body>
          </Card>
        </Col>
        <Col className = "cardSpacing" md={3}>
          <Card className="shadow-sm mb-4 card-image" style={{border:'none'}}>
          <Card.Img variant="top" src={childstudyingAI} alt={`Child Looking Into AI Image`} />
            <Card.Body>
              <Card.Title className='happy-monkey-regular-for-card-titles cardTitles'>Testing Together</Card.Title>
              <Card.Text className='font-for-card-text text-padding'>
              Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
                Description of challenge 1. Learn more about this challenge and its requirements.
                
              </Card.Text>
              <a href="#challenge3" className="btn btn-primary" style={{backgroundColor:'#33CCCC', border:'none', padding: '12px 24px', fontSize: '18px', width: 'auto', height: 'auto'}}>Learn More</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default MainContent;
