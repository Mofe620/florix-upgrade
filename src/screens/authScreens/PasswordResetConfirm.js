import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/authActions';

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
        return <Redirect to='/' />
    }

    return (
        <Container className=' auth-container pt-4'>
                <div className=' auth-header text-center'>
                    <p className="auth-base"> Enter a new password</p>
                </div>
                <Form className="auth-form" onSubmit={e => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth-input" 
                            type="password" 
                            placeholder="Password" 
                            value={new_password}
                            onChange={(e) => setNew_password(e.target.value)}
                            minLength='6'
                            required
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            className="auth-input" 
                            type="password" 
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
    )
}

export default connect(null, { reset_password_confirm })(PasswordResetConfirm);
