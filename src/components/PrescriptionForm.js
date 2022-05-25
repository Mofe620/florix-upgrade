import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const PrescriptionForm = () =>{
    return(
        <Container className='pform'>
            <Form>
                <Form.Group className='pform__group'>
                    <Form.Control className='pform__input' as="select" aria-label="Default select example">
                        <option>Are you a doctor?</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='pform__group'>
                    <Form.Label>Full Name<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control className='pform__input' placeholder="Enter patent name" />
                </Form.Group>
                <div className='pform__group__wrapper my-5'>
                    <Form.Group className='pform__group__first-half'>
                        <Form.Label>Email<strong style={{color:"red"}}>*</strong></Form.Label>
                        <Form.Control className='pform__input ' placeholder="Enter valid email address" />
                    </Form.Group>
                    <Form.Group className='pform__group__second-half'>
                        <Form.Label>Phone Number<strong style={{color:"red"}}>*</strong></Form.Label>
                        <Form.Control className='pform__input ms-2' placeholder="Phone number" />
                    </Form.Group>
                </div>
                <Form.Group className='pform__group'>
                    <Form.Label>Upload Prescription File. <strong style={{color:"red"}}>(PDF, JPEG, JPG)</strong></Form.Label>
                    <Form.Control className='pform__input' />
                </Form.Group>

                <Form.Group className='pform__group mt-5'>
                        <Form.Label>Extra Details on Prescription (Optional)</Form.Label>
                        <Form.Control className='pform__textarea' as="textarea" placeholder="Start typing..." />
                </Form.Group>
                <Button className='pform__btn'>Submit Prescription</Button>
            </Form>
        </Container>
    )
}

export default PrescriptionForm