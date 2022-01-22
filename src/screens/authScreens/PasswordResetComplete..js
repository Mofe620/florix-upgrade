import React from 'react'

import { Container } from 'react-bootstrap'

const PasswordReset = () => {
    return (
        <Container className='auth-container pt-4'>
            <div className=' auth-header text-center'>
                <h3 className="auth-success">Your account has been activated successfully!</h3>
            </div>
        </Container>
    )
}

export default PasswordReset