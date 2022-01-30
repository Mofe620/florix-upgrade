import React from 'react'
import {Helmet} from "react-helmet";
import { Container } from 'react-bootstrap'

const PasswordReset = () => {
    return (
        <Container className='auth-container pt-4'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Password Reset Complete</title>
            </Helmet>
            <div className=' auth-header text-center'>
                <h3 className="auth-success">Your account has been activated successfully!</h3>
            </div>
        </Container>
    )
}

export default PasswordReset