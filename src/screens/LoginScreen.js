import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../redux/actions/authActions'

function LoginScreen({ location, history, isAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { error, loading  } = auth

    const redirect = location.search ? location.search.split('=')[1] : '/'
/*
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const auth = useSelector(state => state.auth)
    const { error, loading, user } = auth

    useEffect(() => {
        if ( userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
*/
useEffect(() => {
    if (isAuthenticated) {
        history.push(redirect)
    }
}, [history, redirect, isAuthenticated])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <Container className="content">
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>Don't have an account? <Link to='/Register'> Sign Up </Link></Col>
                {/*
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>
                </Col>
                */}
            </Row>

        </Container>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {login}) (LoginScreen)

