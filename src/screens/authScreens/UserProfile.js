import React, { Component, useState, useEffect } from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LOAD_USER_PROFILE_RESET } from '../../redux/actions/types'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { load_user_profile } from '../../redux/actions/authActions'

import Header from '../../components/global/Header';
import Footer from '../../components/Footer';

function UserProfile({location, history, isAuthenticated}) {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [image, setImage] = useState('')
    const [telephone, setTelephone] = useState('')
  
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const { user } = auth
    
    const profileInfo = useSelector(state => state.profileInfo)
    const {  error, loading, userInfo } = profileInfo
    console.log(userInfo)
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        } else {
                setUsername(user.username)
                setEmail(user.email)
                setImage(userInfo.image)
                setCompany(userInfo.company)
                setTelephone(userInfo.telephone)
            }
        
    }, [history, isAuthenticated, userInfo, user])

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };
    return (
        <div className=''>
            <Header />
               <Helmet>
                <meta charSet="utf-8" />
                <title>Profle</title>
            </Helmet>
       
            <Container className='profile'>
            <div className='profile__header__wrapper'>
                <h2>My Account</h2>
                <div className="profile__header">
                    <img className='profile__image img-fluid rounded-circle  my-5' src='/assets/images/icons/profile.png'  alt=''/>
                    <div className='profile__header__text-wrapper'>
                        <h2>{capitalizeFirstLetter(username)} </h2>
                        <p>{email}</p>
                    </div>    
                </div>
            </div>
            
            
            <Form className="auth__form profile-container mt-4 mx-auto" >
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label className="auth__form__label" >Username</Form.Label>
                            <Form.Control 
                                className="auth__form__control" 
                                type="text" 
                                value={username} 
                                disabled
                                size='lg'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className="auth__form__label">Email Address</Form.Label>
                            <Form.Control 
                                className="auth__form__control" 
                                type="email" 
                                value={email} 
                                disabled
                                size='lg'
                            />
                    </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="telephone">
                        <Form.Label className="auth__form__label">Mobile Number</Form.Label>
                        <Form.Control 
                            className="auth__form__control" 
                            type="text" 
                            value={telephone ? telephone : ""  }
                            disabled
                            size='lg' 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="shippingAddress">
                        <Form.Label className="auth__form__label">Shipping Address</Form.Label>
                        <Form.Control 
                            className="auth__form__control" 
                            type="text"
                            // value={address ? address : ""}
                            disabled
                            size='lg' 
                        />
                    </Form.Group>
                    </Col>
                </Row>
                
                
                        {/*<Button className="auth-button btn btn-block w-100" variant="primary" value="reset"> Save</Button>*/}
            </Form>
            </Container>
            
        <Footer />     
    </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {load_user_profile}) (UserProfile)


