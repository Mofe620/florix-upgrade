import React from 'react'
import {Link} from "react-router-dom"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const AuthFooter = () =>{
    return(
        <div className='mt-5 footer__auth'>
        <div className="footer__divider"></div>
            <div className="footer__items footer__items__auth">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/emergency/request">EMS</Link></p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p><Link to="/terms-conditions">Terms and Conditions</Link></p>
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
        <p className="footer2 text-center py-3">&copy; 2022 Florix Healthcare Ltd. All Rights Reserved. </p> 
        </div>
    )
}

export default AuthFooter
