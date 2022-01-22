import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { signup } from '../redux/actions/authActions'

function RegisterScreen({ location, history }) {

    const [accountCreated, setAccountCreated] = useState(false);
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [re_password, setRe_password] = useState([])
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { error, loading, userInfo } = auth

    //const redirect = location.search ? location.search.split('=')[1] : '/login'

 
/*
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== re_password) {
            setMessage('Both passwords must be the same')
        } else {
            dispatch(signup(username, email, password, re_password));
            setAccountCreated(true)
        }

    }
*/
  
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

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={re_password}
                        onChange={(e) => setRe_password(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>

            </Form>

            {/*<Row className='py-3'>
                <Col>
                    Have an Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row> */}
        </FormContainer >
    )
}



//export default RegisterScreen
export default connect(null, {signup}) (RegisterScreen)
