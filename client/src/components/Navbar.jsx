import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import './Header.css';
import logo from '../assets/images/Logo.png';
// import SignUp from '../pages/Signup';
import Login from '../pages/Login';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Navbar bg="success" expand="lg" /* variant="dark"  */>
      <Container fluid>
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
           
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
           
            
              <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>

              {/*
              </Nav><Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>
              */}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal
      size='lg'
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby='signup-modal'>
      {/* tab container to do either signup or login component */}
    <Tab.Container defaultActiveKey='login'>
      <Modal.Header closeButton>
      <Modal.Title id='signup-modal'>
      <Nav variant='pills'>
        <Nav.Item>
          <Nav.Link eventKey='login'>Login</Nav.Link>
        </Nav.Item>
        </Nav>
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      </>
    
  );
};

export default AppNavbar;
