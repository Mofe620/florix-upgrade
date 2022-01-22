import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
//import FormContainer from '../components/FormContainer'
import { signup } from '../../redux/actions/authActions'

function RegisterScreen({ signup, isAuthenticated }) {

    const [accountCreated, setAccountCreated] = useState(false);
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [re_password, setRe_password] = useState([])
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { error, loading, userInfo } = auth

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== re_password) {
            setMessage('Both passwords must be the same')
        } else {
            dispatch(signup(username, email, password, re_password));
            setAccountCreated(true);
        }
    }
    
    
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    if (isAuthenticated){
        return <Redirect to="/" />
        }
    return (
        <Container className='content auth-container'>
            <div className="auth-header text-center mb-4">
                <h2>Sign Up</h2>
                <p>Add your deatils to sign up</p>
            </div>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
                    <Form className="auth-form" onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId='name'>
                            <Form.Control 
                                className="auth-input" 
                                required
                                minLength='6'
                                type="name" 
                                placeholder="Username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='email'>
                            <Form.Control
                                required 
                                className="auth-input" 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control 
                                className="auth-input" 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwordConfirm">
                            <Form.Control 
                                className="auth-input" 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={re_password}
                                onChange={(e) => setRe_password(e.target.value)}
                                />
                        </Form.Group>
                        <Button type="submit" className="auth-button">Sign Up</Button>
                    </Form>
                    <Row className="p-2">
                        <Col>
                            <div className=""> Already have an account? <Link to="/login">Login</Link></div>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
        </Container>
        
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {signup}) (RegisterScreen)