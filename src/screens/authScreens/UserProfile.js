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
    return (
        <div className=''>
            <Header />
               <Helmet>
                <meta charSet="utf-8" />
                <title>Profle</title>
            </Helmet>
            <div className="d-flex justify-content-center content">
                    <h2>Hello, {username.toUpperCase()} </h2>
                    <img className='profile-img img-fluid rounded-circle  my-5' src='/assets/images/icons/profile.png'  alt=''/>
                
            </div>
            <Container>
            <Form className="auth__form profile-container mt-4 mx-auto" >
                <Form.Group className="mb-3" controlId="username">
                    <Form.Control 
                        className="auth__form__control" 
                        type="name" 
                        value={username} 
                        disabled
                        size='lg'
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control 
                        className="auth__form__control" 
                        type="name" 
                        value={email} 
                        disabled
                        size='lg'
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control 
                        className="auth__form__control" 
                        type="name" 
                        value={company ? company : "dd/mm/yyyy"  }
                        disabled
                        size='lg' 
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control 
                        className="auth__form__control" 
                        type="email"
                         value={telephone ? telephone : ""}
                         disabled
                         size='lg' 
                         />
                </Form.Group>
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


