import React from 'react'
import {Link} from "react-router-dom"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const Footer = () =>{
    return(
        <>
            <div className='footer__news mt-5'>
                    <div className='footer__news__statement'>
                        <h2>Be the first to find out about new products and services.</h2>
                        <p>Sign up for our newsletter</p>
                    </div>
                    <div className='footer__news__subscription'>
                        <Form className="footer__news__form">
                            <Form.Group  controlId="formGroupEmail">
                                <Form.Control className="footer__news__form__input" type="email" placeholder="Enter your email" /> 
                            </Form.Group>
                            <Button className="footer__news__form__btn">Subscribe</Button>
                        </Form>
                    </div>
            </div>
            <div className="footer__divider"></div>
            <div className="footer__items">
                <div>
                    <h2>Quick Links</h2>
                    <p className='footer__items__divider'></p>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/blog/posts">Blog</Link></p>
                </div>
                <div>
                    <h2>Solutions</h2>
                    <p className='footer__items__divider'></p>
                    <p><Link to="/shop">Wholesale store</Link></p>
                    <p><Link to="/services">Logistics Portal</Link></p>
                    <p><Link to="/services">Raredrug Portal</Link></p>
                </div>
                <div>
                    <h2>Policies</h2>
                    <p className='footer__items__divider'></p>
                    <p><Link to="/">Privacy Policy</Link></p>
                    <p><Link to="/">Terms and Conditions</Link></p>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <p className='footer__items__divider'></p>
                    <p><a href="https://www.facebook.com/florixhealthcare" target="_blank" rel='noreferrer'><span className="footer__media__icons"><i className="fab fa-facebook"></i></span></a></p>
                    <p><a href="http://instagram.com/flo_log.hq" target="_blank" rel='noreferrer'><span className="footer__media__icons"><i className="fab fa-instagram"></i></span></a></p>
                    <p><a href="/"><span className="footer__media__icons"><i className="fab fa-twitter"></i></span></a></p>
                </div>
            </div>
        <div className='footer'> 

        </div>
        <p className="footer2 text-center py-3">&copy; 2022 Florix Healthcare Ltd. All Rights Reserved. </p> 
        </>
    )
}

export default Footer
