// import { useState } from 'react';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import './Header.css';
import logo from '../assets/images/Logo.png';

const AppNavbar = () => {
  return (
    <Navbar bg="success" expand="lg" /* variant="dark"  */>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="120"
            height="100"
            className="d-inline-block align-top"
            alt="My App Logo"
          />{' '}
          Fitness-First
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Fitness Tracker Logo" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header> */
    
  );
}

export default AppNavbar;
