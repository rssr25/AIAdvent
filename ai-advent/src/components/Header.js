import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS for Header
import gifLogo from "../assets/images/artificial-intelligence.gif";

function Header() {
  return (
    <Navbar className = "navbar" variant="light" expand="lg" fixed="top" style={{paddingLeft: '20px', backgroundColor: '#FFFF'}}>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={gifLogo}
          alt="Logo"
          className="navbar-logo" // Apply custom styling to GIF
          style={{
            position:'relative',
            top: '1%',
            width: '100px', // Adjust width
            height: '100px', // Adjust height
          }}
        />
        <span className="happy-monkey-regular">Advent</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-links-formatting">
          <Nav.Link className="navbar-link-spacing" as={Link} to="/" style={{fontSize: '21px'}}>Home</Nav.Link>
          <Nav.Link className="navbar-link-spacing" as={Link} to="/about" style={{fontSize: '21px'}}>About</Nav.Link>
          <Nav.Link className="navbar-link-spacing" as={Link} to="/contact" style={{fontSize: '21px'}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
