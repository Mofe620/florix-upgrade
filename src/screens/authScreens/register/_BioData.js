import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import AuthFooter from '../../../components/global/_authFooter'
const BioData = ({values, handleChange, handleErrors}) => {
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
                        <Form className="auth-form">

                        <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='name'>
                                        <Form.Label className='auth__form__label'>First Name</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control" 
                                            size='lg'
                                            required
                                            minLength='6'
                                            type="text" 
                                            onChange={handleChange('firstName')} 
                                            value={values.firstName}
                                            isInvalid={!!handleErrors.firstName}
                                            />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.firstName}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='name'>
                                        <Form.Label className='auth__form__label'>Last Name</Form.Label>
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="text" 
                                            value={values.lastName}
                                            onChange={handleChange('lastName')} 
                                            isInvalid={!!handleErrors.lastName}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.lastName}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='gender'>
                                        <Form.Label className='auth__form__label'>Gender</Form.Label>
                                        <Form.Control
                                        required 
                                        size='lg'
                                        className="auth__form__control form-select" 
                                        as='select'
                                        value={values.gender}
                                        onChange={handleChange('gender')} 
                                        isInvalid={!!handleErrors.gender}
                                    >
                                         <option>--Select Gender--</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='dateOfBirth'>
                                        <Form.Label className='auth__form__label'>Date of Birth</Form.Label>
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="text" 
                                            placeholder='yyyy-mm-dd'
                                            value={values.dateOfBirth}
                                            onChange={handleChange('dateOfBirth')}
                                            isInvalid={!!handleErrors.dateOfBirth}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.dateOfBirth}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='address'>
                                        <Form.Label className='auth__form__label'>Address</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control" 
                                            size='lg'
                                            required
                                            minLength=''
                                            type="text" 
                                            value={values.address}
                                            onChange={handleChange('address')} 
                                            isInvalid={!!handleErrors.address}
                                            />
                                            <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.address}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='country'>
                                        <Form.Label className='auth__form__label'>Country</Form.Label>
                                        <Form.Control
                                            disabled
                                            placeholder='Nigeria'
                                            size='lg'
                                            className="auth__form__control" 
                                            type="text" 
                                            value={values.country}
                                            onChange={handleChange('country')} 
                                            // isInvalid={!!handleErrors.country}
                                        />
                                        {/* <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.country}</Form.Control.Feedback> */}
                                    </Form.Group>
                                </Col>
                            </Row>

                            
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='state'>
                                        <Form.Label className='auth__form__label'>State</Form.Label>
                                        <Form.Control 
                                            className="auth__form__control" 
                                            size='lg'
                                            required
                                            minLength=''
                                            type="text" 
                                            value={values.state}
                                            onChange={handleChange('state')} 
                                            isInvalid={!!handleErrors.state}
                                            />
                                            <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.state}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group className="mb-3" controlId='city'>
                                        <Form.Label className='auth__form__label'>City</Form.Label>
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="text" 
                                            value={values.city}
                                            onChange={handleChange('city')} 
                                            isInvalid={!!handleErrors.city}
                                        />
                                        <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.city}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        
        </Container>
    </>
  )
}

export default BioData