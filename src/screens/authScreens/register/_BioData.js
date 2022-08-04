import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";


const BioData = ({values, handleChange, handleErrors}) => {
  
    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
  
    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });
  
    const countryArr = Object.entries(countryObj).map(([key, value]) => {
      return {
        label: value,
        value: key
      };
    });
  
    
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
                                        {/* <DatePicker
                                          isClearable
                                          dateFormat="yyyy-mm-dd"
                                          type='Number'
                                        /> */}
                                        <Form.Control
                                            required 
                                            size='lg'
                                            className="auth__form__control" 
                                            type="date" 
                                            dateFormat='yyyy-mm-dd'
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
                                            placeholder='Nigeria'
                                            size='lg'
                                            className="auth__form__control form-select" 
                                            type="text" 
                                            as="select"
                                            value={values.country}
                                            onChange={handleChange('country')} 
                                            
                                            // isInvalid={!!handleErrors.country}
                                        >
                                            {!!countryArr?.length &&
                                                countryArr.map(({ label, value }) => (
                                                    <option key={value} value={value}>
                                                    {label}
                                                    </option>
                                                ))}
                                                
                                                </Form.Control>
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