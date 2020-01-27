import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import '../stylesheets/TopNav.css';

export const TopNav = () => {
    return(
        <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <Navbar.Brand href="#"><h3>Class of 2021</h3></Navbar.Brand>
        </Container>
      </Navbar>
    )
}