import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Store</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
