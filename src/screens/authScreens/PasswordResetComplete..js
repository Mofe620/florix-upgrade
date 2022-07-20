import React from 'react'
import {Helmet} from "react-helmet";
import { Container } from 'react-bootstrap'
import AuthNavigation from '../../components/global/_authNavigation'
import AuthFooter from '../../components/global/_authFooter'

const PasswordResetComplete = () => {
    return (
        <>
        <AuthNavigation />
        <Container className='auth-container pt-4'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Password Reset Complete</title>
            </Helmet>
            <div className='auth__activation__wrapper text-center'>
                <h2 className="auth-success">Please click on the link sent to your account email to complete password reset process</h2>
            </div>
        </Container>
        <AuthFooter />
    </>
    )
}

export default PasswordResetComplete