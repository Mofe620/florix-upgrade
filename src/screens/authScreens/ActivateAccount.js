import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import { verify } from '../../redux/actions/authActions';

const ActivateAccount = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const dispatch = useDispatch()


    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        dispatch(verify(uid, token));
        setVerified(true);
    };

    if (verified) {
        return <Redirect to='/' />
    }

    return (
        <Container className=' auth-container pt-4'>
            <Form className="auth-form">
                <Button 
                    className="auth-button  btn btn-block w-100" 
                    type="submit"
                    onClick={verify_account}
                    >
                        Activate Account
                    </Button>
            </Form>
    </Container>
    )
}

export default connect(null, { verify })(ActivateAccount);