import React from 'react';
import { Navbar,Nav,Form,Button } from 'react-bootstrap';
import '../stylesheets/TopNav.css';
import { GiExitDoor } from "react-icons/gi";
import { logoutUser } from '../../redux/actions/userActions';
import {useDispatch} from 'react-redux';

export const TopNav = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  }
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><h3>Class of 2021</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Messages</Nav.Link>
            <Nav.Link href="#link">Notifications</Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={logout} variant="outline-success"><GiExitDoor style={{ fontSize: '1.75em' }}/>Log out</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}