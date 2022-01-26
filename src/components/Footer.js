import React from 'react'
import {Link} from "react-router-dom"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Footer = () =>{
    return(
        <>
        <Container className='footer p-4 mt-4'> 
        
        <div className="footer__items">
            <p><Link to="/posts">Blog Posts</Link></p>
            <p><Link to="about">About Us</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
        </div>
        
        <Row className="">
            <Col md={8} className="px-0 footer">
                <div className="footer__media">
                    <span className="footer__media__icons"><a href="/"><i className="fab fa-facebook"></i></a></span>
                    <span className="footer__media__icons"><a href="/"><i className="fab fa-twitter"></i></a></span>
                    <span className="footer__media__icons"><a href="/"><i className="fab fa-instagram"></i></a></span>
                    <span className="footer__media__icons"><a href="/"><i className="fab fa-whatsapp"></i></a></span>
                </div>
            </Col>
            <Col md={4} className="footer__subscription px-0">
            <p className="footer__subscription__text">Get E-mail Updates About Our Latest News And Special Offers</p>
                <Row>
                    <Col xs={8} className="footer__subscription__form" >
                    <Form className="px-0">
                        <Form.Group  controlId="formGroupEmail">
                            <Form.Control className="search-ppty" type="email" placeholder="Enter your email" /> 
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col xs={4} >
                    <Button variant="danger" className="search-ppty px-0">Subscribe</Button>
                    </Col>
                </Row>
            </Col>            
        </Row>
        </Container>
        <p className="footer2 text-center py-3">&copy; 2022 Florix Healthcare Ltd. All Rights Reserved. </p> 
    </>
    )
}

export default Footer
