import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";

const Navigation = () => {
  const {user, logOut} =  useAuth()
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-container">
      <Container>
       <Link className="text-decoration-none" to='/'> <Navbar.Brand  className="text-bold fs-2 " >PLANT CABINET</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  ">
            <Link className="nav-text active" to='/'>Home</Link>
            <Link className="nav-text" to='/store'>Store</Link>
            <Link className="nav-text" to='/aboutus'>About Us</Link>
            {user.email && <Link className="nav-text" to='/dashboard'>Dashboard</Link>}
            
            {
              !user.email?<Link to='/login'>
              <Button variant='success'>Login</Button>
            </Link>:<Button onClick={logOut} variant='danger'>Logout</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
