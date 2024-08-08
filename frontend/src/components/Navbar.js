import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css';

const CustomNavbar = () => (
  <Navbar style={{ padding: '0 20px' }} bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/" style={{ marginLeft: '20px' }}>Iowa Indian Heritage</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
