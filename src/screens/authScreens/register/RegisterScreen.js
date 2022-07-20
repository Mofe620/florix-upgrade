import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { signup } from '../../../redux/actions/authActions'
import swal from 'sweetalert';

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

        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
            setMessage("Welcome! Click on the link sent to your email to activate your account")
        }
    };
    
    
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    if (isAuthenticated){
        return <Redirect to="/" />
        }
    return (
        <Container className='auth'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Individual Account</title>
            </Helmet>
            <div className="auth__header">
                <h2 className="">Create Account</h2>
                <p>Individual Account</p>
            </div>
            {/* {message && <Message variant='success'>{message}</Message>} */}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
                    <Form className="auth__form" onSubmit={submitHandler}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId='name'>
                                    <Form.Label className='auth__form__label'>First Name</Form.Label>
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
                            <Col>
                                <Form.Group className="mb-3" controlId='name'>
                                    <Form.Label className='auth__form__label'>Last Name</Form.Label>
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
                        </Row>
                        <Row>
                            <Col>
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
                            <Col>
                                <Form.Group className="mb-3" controlId='phone'>
                                    <Form.Label className='auth__form__label'>Mobile Number</Form.Label>
                                    <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control" 
                                        type="text"  
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId='text'>
                                    <Form.Label className='auth__form__label'>Gender</Form.Label>
                                    <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control" 
                                        as='select'
                                        type="text" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    >
                                         <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>    Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId='phone'>
                                    <Form.Label className='auth__form__label'>Date of Birth</Form.Label>
                                    <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control form-select"
                                        type="date"  
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId='profession'>
                                    <Form.Label className='auth__form__label'>Profession</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required 
                                        size='lg'
                                        className="auth__form__control form-select" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    >
                                        <option>Select Profession</option>
                                        <option>Pharmacist</option>
                                        <option>Medical Doctor</option>
                                        <option>Dentist</option>
                                        <option>Nurse</option>
                                        <option>Midwife</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId='phone'>
                                    <Form.Label className='auth__form__label'>Residential Address</Form.Label>
                                    <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control" 
                                        type="text"  
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId='email'>
                                    <Form.Label className='auth__form__label'>State</Form.Label>
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
                            <Col>
                                <Form.Group className="mb-3" controlId='phone'>
                                    <Form.Label className='auth__form__label'>City</Form.Label>
                                    <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control"
                                        type="text"  
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
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
                            <Col>
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
                        {/* <Form.Group>
                            <Form.Check
                                label='Remember me'
                                type='checkbox'
                            />
                        </Form.Group> */}
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
                            <p> Already have an account? <Link to="/login">Sign In</Link></p>
                        </div>
                      
                    </Form>
                            
        </Container>
        
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {signup}) (RegisterScreen)