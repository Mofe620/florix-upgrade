import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Form } from 'react-bootstrap'
import { contactUs } from '../../redux/actions/contactAction';
import {Helmet} from "react-helmet";

const Contact = () => {
    const [name, setname] = useState([])
    const [email, setEmail] = useState([])
    const [subject, setSubject] = useState([])
    const [message, setMessage] = useState([])
    const [alert, setAlert] = useState('')

    const contact = useSelector(state => state.contact)
    const { error, loading, contat_us } = contact
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault();
        console.log(name)
        dispatch(contactUs(name, email, subject, message));
        setAlert("Welcome! Click on the link sent to your email to activate your account")
        
    };
    console.log(subject)
    return (
        <Container className="content auth-container">
               <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>
                <div className="contact">
                    <Form classNam="auth-form" onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control 
                                required
                                style={{backgroundColor:"white"}}
                                className="contact-input" 
                                type="name" 
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                        
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control 
                                required
                                style={{backgroundColor:"white"}}
                                className="contact-input" 
                                type="email" 
                                placeholder="Enter Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subject">
                            <Form.Control 
                                required
                                style={{backgroundColor:"white"}}
                                className="contact-input" 
                                type="text" 
                                placeholder="Subject" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                          
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Control 
                                required
                                style={{backgroundColor:"white"}}
                                as="textarea"
                                cols="15"
                                className="contact-input" 
                                type="text" 
                                placeholder="Message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                          
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
