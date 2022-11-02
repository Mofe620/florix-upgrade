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
                    <p><Link to="/shop">Wholesale Store</Link></p>
                    <p className='footer__items__divider'>Logistics Portal</p>
                    <p><Link to="/emergency/request">EMS</Link></p>
                </div>
                <div>
                    <h2>Policies</h2>
                    <p className='footer__items__divider'></p>
                    {/* <p><Link to="/">Privacy Policy</Link></p> */}
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p><Link to="/terms-conditions">Terms and conditions</Link></p>
                </div>
            </div>
            <div>
                    <div className='d-flex justify-content-center' style={{backgroundColor:"#0467a4"}}>
                        <p><a href="https://www.facebook.com/florixhealthcare" target="_blank" rel='noreferrer'><span className="footer__media__icons" style={{color:"#fff"}}><i className="fab fa-facebook"></i></span></a></p>
                        <p><a href="http://instagram.com/flo_log.hq" target="_blank" rel='noreferrer'><span className="footer__media__icons"  style={{color:"#e95950"}}><i className="fab fa-instagram"></i></span></a></p>
                        <p><a href="/"><span className="footer__media__icons" style={{color:"#fff"}}><i className="fab fa-twitter"></i></span></a></p>
                    </div>
                </div>
        <div className='footer'> 

        </div>
        <p className="footer2 text-center py-3">2022 &copy; Florix Healthcare Ltd. All Rights Reserved. </p> 
        </>
    )
}

export default Footer
