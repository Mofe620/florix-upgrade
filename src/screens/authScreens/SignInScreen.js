import React, { useState} from 'react'
import { Container, Button} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Link, Redirect, useLocation } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { login } from '../../redux/actions/authActions'
import { Formik, Form } from 'formik';
import { TextField } from './_TextInput';
import * as Yup from 'yup';

const SignInScreen = ({ isAuthenticated }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const {state: {from = "/"} = {} } = useLocation();
    
    const auth = useSelector(state => state.auth)
    const { error, loading } = auth
        
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    if (isAuthenticated){
        return <Redirect to={from} />
    }


    const validate = Yup.object({
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    })
    return (
        <Container className="content auth-container">
               <Helmet>
                <meta charSet="utf-8" />
                <title>Sign In</title>
            </Helmet>
        <Formik
            initialValues={{
            email: '',
            password: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
            }}
        >
            {formik => (
            <div>
                <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
                <Form onSubmit={submitHandler}>
                <TextField  
                    name="email" 
                    type="email" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <TextField 
                    name="password" 
                    type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button className="btn btn-primary mt-3" type="submit">Login</button>
                </Form>
            </div>
            )}
        </Formik>
    </Container>
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, {login}) (SignInScreen)