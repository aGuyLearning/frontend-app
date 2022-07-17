import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../assets/logo.png"

const NavigationBar = () => {

    return (
        <Navbar className='nav' sticky="top" bg="light">
        <Container>
        <Navbar.Brand href="/">
          <img className = "logo" src = {Logo} width="80" height="70"/>
        </Navbar.Brand>
        <Nav className="text-right">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/explore">Explore</Nav.Link>
          <Nav.Link href='/my-flights' className='nav-item'>My Flights</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar
