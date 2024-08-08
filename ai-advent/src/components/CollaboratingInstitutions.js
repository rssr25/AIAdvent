import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import saarlandUniversityLogo from "../assets/images/saarland_university_logo.jpeg";
import dfkiLogo from "../assets/images/DFKI_logo_since_2023.png"
import federalGovernmentLogo from "../assets/images/federal_government_germany_logo.png"
import mpiLogo from "../assets/images/logo-mpi.png"
import { useInView } from 'react-intersection-observer';
import './SectionsEffect.css';
import './CollaboratingInstitutions.css';


function CollaboratingInstitutions() {
    const { ref: section2Ref, inView: section2InView } = useInView({
        triggerOnce: true, // Only trigger once when the section enters the view
        threshold: 0.1,    // 10% of the section should be visible
      });

return (
    // <div className= {`section section1-parallax ${section1InView ? 'visible' : ''}`} ref={section1Ref}></div>
    <div className={`section ${section2InView ? 'visible' : ''}`} ref={section2Ref}>
        <Container className="sectionFormatting">
        <div className='happy-monkey-regular-for-titles titles'>
        COLLABORATING INSTITUTIONS
        </div>
            <Row style={{paddingTop: '2%'}}>
            <Col md={3} className='collaboratingInstitutionLogo images-spacing' style={{textAlign: 'justify', marginTop: '-1%'}}>
            <Image src={federalGovernmentLogo} alt="Federal Government Logo" fluid />
            </Col>
            <Col md={3} className='collaboratingInstitutionLogo images-spacing' style={{textAlign: 'justify', marginTop: '-3%'}}>
            <Image src={saarlandUniversityLogo} alt="Saarland University Logo" fluid />
            </Col>
            <Col md={3} className='collaboratingInstitutionLogo images-spacing' style={{textAlign: 'justify', width: '16%', marginTop: '1%'}}>
            <Image src={dfkiLogo} alt="DFKI Logo" fluid />
            </Col>
            <Col md={3} className='collaboratingInstitutionLogo images-spacing' style={{textAlign: 'justify', width: '21%', marginTop: '1%'}}>
            <Image src={mpiLogo} alt="MPI Logo" fluid />
            </Col>
            </Row>

        </Container>
    </div>



    );
}
export default CollaboratingInstitutions;