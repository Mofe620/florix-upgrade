import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container className="content auth-container">
        
                <div className="">
                    <Form classNam="auth-form">
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control 
                                required
                                className="contact-input" 
                                type="name" 
                                placeholder="Name" 
                        
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control 
                                required
                                className="contact-input" 
                                type="email" 
                                placeholder="Enter Email" 
                              
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Control 
                                required
                                className="contact-input" 
                                type="text" 
                                placeholder="Name of Company/Organization" 
                          
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Control 
                                required
                                as="textarea"
                                min="15"
                                className="contact-input" 
                                type="text" 
                                placeholder="Message" 
                          
                            />
                        </Form.Group>
                        <div className='d-grid gap-2' size="lg">
                            <Button className="contact-input" type='submit' variant='primary'>Submit</Button>
                        </div>
                    </Form>
                </div>
                
    </Container>
    )
}

export default Contact
