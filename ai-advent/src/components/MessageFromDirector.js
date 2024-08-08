import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import directorImage from "../assets/images/director_pic.jpeg";
import { useInView } from 'react-intersection-observer';
import './SectionsEffect.css';


function MessageFromDirector() {

    const { ref: section3Ref, inView: section3InView } = useInView({
        triggerOnce: true, // Only trigger once when the section enters the view
        threshold: 0.1,    // 10% of the section should be visible
      });

return (
    //  <div className= {`section ${section3InView ? 'visible' : ''}`} ref={section3Ref}>
        <div className='sectionFormatting'>
            <h1 className='happy-monkey-regular-for-titles titles'>
                MESSAGE FROM THE DIRECTOR
            </h1>

            <Row>
            <Col md={5} className='center' style={{textAlign: 'justify', marginLeft: '5%', fontFamily: 'Happy Monkey, system-ui', fontStyle: 'normal', fontSize: 'medium' }}>
            
            <p>We are driven to provide you with an immersive learning experience!</p> 
            <p>At AI Advent, our vision is to empower children with the knowledge of Artificial Intelligence from a young age.</p> 
            We believe in nurturing curiosity and fostering a deep understanding of AI technologies.
            Our engaging and interactive challenges make learning AI fun and accessible for children. 
            Through hands-on activities, we aim to develop critical thinking and problem-solving skills in young minds.
            We are committed to creating a future where children are not just users of AI but creators and innovators.
            Join us on this exciting journey to equip the next generation with the skills they need for tomorrow's world.

            <p>
                <br></br>Our curriculum is designed to inspire creativity and ignite a passion for technology. By blending traditional learning methods with innovative AI concepts, we provide a comprehensive educational experience that adapts to each child's unique pace and learning style. We encourage collaboration and teamwork, allowing children to explore AI concepts in a supportive and inclusive environment.
            </p>

            </Col>
            <Col md={5} className='center' style={{textAlign: 'justify', marginLeft: '7%'}}>
            {/* <Image></Image> */}
            <Image src={directorImage} alt="Director's Image" fluid />
            </Col>
            </Row>

        </div>
    // </div>
    

    


    );
}
export default MessageFromDirector;