import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { signup } from '../../redux/actions/authActions'
import swal from 'sweetalert';
import AuthNavigation from '../../components/global/_authNavigation';
import AuthFooter from '../../components/global/_authFooter';


function RegisterScreen({ signup, isAuthenticated }) {

    const [accountCreated, setAccountCreated] = useState(false);
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [re_password, setRe_password] = useState([])
    const [message, setMessage] = useState('')

    const auth = useSelector(state => state.auth)
    const { error, loading, userInfo } = auth

    const submitHandler = e => {
        e.preventDefault();
        if (password !== re_password) {
            swal('Invalid credentials', "Password must match!", "error")
        } else{
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    };
    
    
    if (accountCreated) {
        swal('Account created but not active!', "An account activation email has been sent to you, please click on the activation link to activate your account", "info")
        // return <Redirect to='/login' />
    }

    if (isAuthenticated){
        return <Redirect to="/" />
        }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Create your Flolog Account</title>
            </Helmet>
            <AuthNavigation />
            <Container className='auth-container'>
                <div className="auth__header text-center">
                    <h2 className="">Create Account</h2>
                    <p>Individual Account</p>
                </div>
                {/* {message && <Message variant='success'>{message}</Message>} */}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                        <Form className="auth-form" onSubmit={submitHandler}>
                        <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='name'>
                                        <Form.Label className='auth__form__label'>Username</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control" 
                                            size='lg'
                                            required
                                            minLength='6'
                                            type="name" 
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='email'>
                                        <Form.Label className='auth__form__label'>Email Address</Form.Label>
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label className='auth__form__label'>Password</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control"
                                            size='lg'
                                            type="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId="passwordConfirm">
                                        <Form.Label className='auth__form__label'>Confirm Password</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control"
                                            size='lg'
                                            type="password" 
                                            value={re_password}
                                            onChange={(e) => setRe_password(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='auth__policy__wrapper d-flex'>
                                <Form.Group>
                                    <Form.Check
                                        type='checkbox'
                                    />
                                </Form.Group>
                        
                                <p>I agree to all the <Link>Terms</Link> and <Link>Privacy policy</Link></p>
                    
                            </div>
                            <div className='auth__btnwrapper'>
                                <Button type="submit" className="auth__bt">Create Account</Button>
                                <p> Already have an account? <Link to="/login" className='router-link'>Sign In</Link></p>
                            </div>
                        </Form>
                        
        </Container>
        <AuthFooter />
    </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {signup}) (RegisterScreen)



