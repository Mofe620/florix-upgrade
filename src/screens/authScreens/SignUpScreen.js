import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { connect, useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { signup } from '../../redux/actions/authActions'
import { Formik, Form } from 'formik';
import { TextField } from './_TextInput';
import * as Yup from 'yup';

const SignUpScreen = ({ signup, isAuthenticated }) => {
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
  
  const validate = Yup.object().shape({
    username: Yup.string()
      .max(15, 'Must be 20 characters or less')
      .required('Username is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, "A minimum of 6 characters is required")
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm your password'),
  })
  
  if (accountCreated) {
      return <Redirect to='/login' />
  }

  if (isAuthenticated){
      return <Redirect to="/" />
      }



  return (
    <Container className="content auth-container">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Create your Flolog Account</title>
            </Helmet>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({errors, touched}) => (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form onSubmit={submitHandler}>
              <TextField 
                name="username" 
                label="Username"
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
              <TextField 
                name="email" 
                label="Email"
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <TextField 
                name="password" 
                label="Password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <TextField 
                name="confirmPassword" 
                label="Confirm Password"
                type="password" 
                value={re_password}
                onChange={(e) => setRe_password(e.target.value)}
                />
              <button className="btn btn-primary mt-3" type="submit">Register</button>
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

export default connect(mapStateToProps, {signup}) (SignUpScreen)