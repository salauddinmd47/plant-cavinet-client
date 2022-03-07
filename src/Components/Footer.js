import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png'
const Footer = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row xs={2} md={4}>
                    <Col>
                    <h4>Get In Touch With Us For The Best Quality Plants & Succulents</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic eaque reprehenderit! Nisi voluptates dicta corporis blanditiis voluptatibus ex architecto.</p>
                    </Col>
                    <Col>
                    <img src={logo} alt=""  height='100px' />
                    <h4>Simply Natural</h4>
                    </Col>
                    <Col>
                    <h4>Quick Links</h4>
                    <div className='d-flex flex-column footer'>
                     <a href="/">Privacy policy</a>
                     <a href="/">Terms and Condition</a>
                     <a href="/">Shopping details</a>
                     <a href="/">Refund policy</a>
                     </div>
                    </Col>
                    <Col>
                    <h4>Important Link</h4>
                     <div className='d-flex flex-column footer'>
                     <a href="/">Privacy policy</a>
                     <a href="/">Terms and Condition</a>
                     <a href="/">Shopping details</a>
                     <a href="/">Refund policy</a>
                     </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className="text-center">Copyright © 2022 Plant Cabinet</p>
            
        </div>
    );
};

export default Footer;