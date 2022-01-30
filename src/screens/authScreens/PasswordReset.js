import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { connect, useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { reset_password } from '../../redux/actions/authActions';

const PasswordReset = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [email, setEmail] = useState('')


    //const dispatch = useDispatch()
    

    const submitHandler = e => {
        e.preventDefault();
        reset_password(email)
        //dispatch(reset_password(email));
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }

    return (
        <Container className='auth-container '>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reset Password</title>
            </Helmet>
            <div className=' auth-header text-center'>
                <p className="auth-base"> Reset password</p>
            </div>
            <Form className="auth-form" onSubmit={e => submitHandler(e)}>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control 
                        className="auth-input search-ppty" 
                        type="email" 
                        placeholder="example@email.com" 
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </Form.Group>
                <Button className="auth-button btn btn-block w-100" type="submit">Submit</Button>
            </Form>
            
        </Container>
    )
}


export default connect(null, { reset_password })(PasswordReset);
