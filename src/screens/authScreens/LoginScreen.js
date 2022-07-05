import React, { useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import {Helmet} from "react-helmet";
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { login } from '../../redux/actions/authActions'

function LoginScreen({ isAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(false)

    const dispatch = useDispatch()
    const {state: {from = "/"} = {} } = useLocation();

    const auth = useSelector(state => state.auth)
    const { error, loading } = auth
    console.log(error)
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    if (isAuthenticated){
        return <Redirect to={from} />
      }


    return (
        <Container className='content auth-container'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign In</title>
            </Helmet>
            <div className="">
            <div className=' auth-header text-center'>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            
                <h2 className="auth-header">Welcome back!</h2>
                <p className="auth-base"> Don't have an account?<Link to="/register"> Sign Up</Link></p>
            </div>
                <Form className="auth-form px-4" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth-input search-ppty" 
                            variant="lg"
                            type="email" 
                            placeholder="Enter Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth-input search-ppty" 
                            type="password" 
                            variant="lg"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            
                            />
                    </Form.Group>
                    <Row className="p-2">
                    <Col>
                        
                    </Col>
                    <Col>
                        <Button className="auth-button" type="submit">Sign In</Button>
                    </Col>
                    
                </Row>
                    <div>
                        <p>Forgotten password? <Link to="/reset-password">Reset Password</Link></p>
                    </div>
                </Form>
        </div>
            
    </Container>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {login}) (LoginScreen)
