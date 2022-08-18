import React, { useState} from 'react'
import {Container, Row, Col, Form, Button, Toast} from 'react-bootstrap'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthNavigation from '../../components/global/_authNavigation'
import AuthFooter from '../../components/global/_authFooter'
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

    const notify =toast('Unable to login, please use valid email or password')

    if (isAuthenticated){
        return <Redirect to={from} />
      }


    return (
        <>
        <AuthNavigation />
            <Container className='' style={{marginTop:'10rem'}}>
                <div className="auth__form__wrapper shadow p-5">
                <div className=' auth-header text-center'>
                    
                {/* {error && <Message variant='danger'>{error}</Message>} */}
                {error && 
                    <div>
                        <ToastContainer
                        position='top-center'
                        >
                            {notify}
                        </ ToastContainer>
                    </div>
                }
                {loading && <Loader />}

                <div className="auth__header">
                    <h2 className="">Sign-In Information</h2>
                </div>
                </div>
                    <Form className="auth__form" onSubmit={submitHandler}>
                        <Form.Group className="" controlId="formGroupPassword">
                        <Form.Label className='auth__form__label' >Email Address</Form.Label>
                            <Form.Control 
                                className="auth__form__control" 
                                variant="lg"
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="formGroupPassword">
                            <Form.Label className='auth__form__label' >Password</Form.Label>
                            <Form.Control 
                                className="auth__form__control" 
                                type="password" 
                                variant="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                                />
                        </Form.Group>
                        <div className='auth__login__terms d-flex justify-content-between'>
                            <Form.Group>
                                <Form.Check
                                    label='Remember me'
                                    type='checkbox'
                                />
                            </Form.Group>
                            <p className=''>Forgotten password? <Link to="/reset-password" className='router-link'>Reset Password</Link></p>
                        </div>
                        <div className='auth__btnwrapper'>
                            <Button className='auth__bt mx-auto' type="submit">Sign In</Button>
                            <p> Don't have an account? <Link to="/register" className='router-link'>Create an account</Link></p>
                        </div>
                        
                    </Form>
            </div>
               
        </Container>
        <AuthFooter />
    </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {login}) (LoginScreen)
