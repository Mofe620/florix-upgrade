import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { Link, Redirect } from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import { verify } from '../../redux/actions/authActions';
import swal from 'sweetalert';

const ActivateAccount = ({ verify, match }) => {
    const [activated, setActivated] = useState(false);
    const dispatch = useDispatch()


    const accountActivation = e => {
        const uid = match.params.uid;
        const token = match.params.token;
        dispatch(verify(uid, token));
        swal({
            title: "Welcome!",
            text: "Your account has been activated successfully.",
            icon: "success",
            button: "Close",
          });
          setActivated(true);
    };

    if (activated) {
        return <Redirect to='/' />
    }

    return (
        <Container className=' auth-container pt-4'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Activate your flolog Account</title>
            </Helmet>
            <Form className="auth-form">
                <Button 
                    className="auth-button  btn btn-block w-100" 
                    type="submit"
                    onClick={accountActivation}
                    >
                        Activate Account
                    </Button>
            </Form>
            <div className="account-activate">
                <p>After clicking on the activation button, you will be redirected to the homepage of our website. If not, please use this <Link to="/">Link</Link></p>
            </div>
    </Container>
    )
}

export default connect(null, { verify })(ActivateAccount);