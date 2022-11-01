import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { Container, Form, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/authActions';
import AuthNavigation from '../../components/global/_authNavigation'
import AuthFooter from '../../components/global/_authFooter'

const PasswordResetConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [new_password, setNew_password] = useState('')
    const [re_new_password, setRe_new_password] = useState('')

    //const dispatch = useDispatch()


    const submitHandler = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;
        reset_password_confirm(uid, token, new_password, re_new_password)
        //dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/reset-password-complete' />
    }

    return (
        <>
        <AuthNavigation />
        <Container className=' auth-container' style={{marginTop:'10rem'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>password reset complete</title>
            </Helmet>
                <div className=' auth-header text-center'>
                    <p className="auth-base"> Enter a new password</p>
                </div>
                <Form className="auth-form" onSubmit={e => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth__form__control" 
                            type="password" 
                            variant="lg"
                            placeholder="Password" 
                            value={new_password}
                            onChange={(e) => setNew_password(e.target.value)}
                            minLength='6'
                            required
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth__form__control" 
                            type="password" 
                            variant="lg"
                            placeholder="Password" 
                            value={re_new_password}
                            onChange={(e) => setRe_new_password(e.target.value)}
                            minLength='6'
                            required
                            />
                    </Form.Group>
                    <Button className="auth-button btn btn-block w-100" type="submit">Submit</Button>
                </Form>
        </Container>
        <AuthFooter />
    </>
    )
}

export default connect(null, { reset_password_confirm })(PasswordResetConfirm);
