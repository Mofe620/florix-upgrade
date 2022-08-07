import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'


const AccountData = ({values, handleChange, handleErrors}) => {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Create your Flolog Account</title>
            </Helmet>
            <Container className='auth-container'>
                <div className="auth__header text-center">
                    <h2 className="">Create Account</h2>
                    <p>Individual Account</p>
                </div>
                {/* {message && <Message variant='success'>{message}</Message>} */}
                        <Form className="auth-form">
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='name'>
                                        <Form.Label className='auth__form__label'>Username</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control" 
                                            size='lg'
                                            required
                                            minLength='6'
                                            type="text" 
                                            value={values.username}
                                            onChange={handleChange('username')}
                                            isInvalid={!!handleErrors.username}
                                            />
                                            <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.username}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='email'>
                                        <Form.Label className='auth__form__label'>Email Address</Form.Label>
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="email" 
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            isInvalid={!!handleErrors.email}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='profession'>
                                        <Form.Label className='auth__form__label'>Profession</Form.Label>
                                        <Form.Control
                                        as="select"
                                        required 
                                        size='lg'
                                        className="auth__form__control form-select" 
                                        onChange={handleChange('profession')}
                                        isInvalid={!!handleErrors.profession}
                                    >
                                        <option>---Select Profession--</option>
                                        <option value='Medical Doctor'>Medical Doctor</option>
                                        <option value='Pharmacist'>Pharmacist</option>
                                        <option value='Dentist'>Dentist</option>
                                        <option value='Nurse'>Nurse</option>
                                        <option value='Midwife'>Midwife</option>
                                        <option value='Others'>Others</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='telephone'>
                                        <Form.Label className='auth__form__label'>Phone Number</Form.Label>
                                        <PhoneInput 
                                            inputStyle={{width:"100%", height:"4rem"}}
                                            country={'ng'}
                                            // regions={'africa'}
                                            // required
                                            // value={values.telephone}
                                            // onChange={handleChange('telephone')} 
                                            // isInvalid={!!handleErrors.telephone}
                                        />
                                        {/* <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="text" 
                                            value={values.telephone}
                                            onChange={handleChange('telephone')} 
                                            isInvalid={!!handleErrors.telephone}
                                        /> */}
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.telephone}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label className='auth__form__label'>Password</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control"
                                            size='lg'
                                            type="password" 
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            isInvalid={!!handleErrors.password}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.password}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId="passwordConfirm">
                                        <Form.Label className='auth__form__label'>Confirm Password</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control"
                                            size='lg'
                                            type="password" 
                                            value={values.re_password}
                                            onChange={handleChange('re_password')}
                                            isInvalid={!!handleErrors.re_password}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.re_password}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <p className='text-center'> Already have an account? <Link to="/login" className='ruter-link'>Sign In</Link></p>
                        </Form>
                        
        </Container>
    </>
  )
}

export default AccountData