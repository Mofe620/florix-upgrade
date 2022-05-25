import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const DeliveyForm = props => {
  return (
    <div>
        <div className='emergency__header'>
          <h2>Delivery Details</h2>
          <p>Please fill-in this form with much detail as possible</p>
        </div>
        <Form>
            <div className='emergency__formgroup__wrapper'>
                <Form.Group className='emergency__formgroup__first-half'>
                <Form.Label className='formlabel'>Recipient Full Name<strong style={{color:"red"}}>*</strong></Form.Label>
                <Form.Control className='emergency__forminput' placeholder='Full Name' />
                </Form.Group>
                <Form.Group className='emergency__formgroup__second-half'>
                <Form.Label className='formlabel'>Recipient Phone Number<strong style={{color:"red"}}>*</strong></Form.Label>
                <Form.Control className='emergency__forminput' placeholder='Phone Number' />
                </Form.Group>
            </div>
            <Form.Group className='emergency__formgroup'>
                <Form.Label className='formlabel'>Recipient Address<strong style={{color:"red"}}>*</strong></Form.Label>
                <Form.Control className='emergency__forminput' placeholder="Enter patent name" />
            </Form.Group>        
        </Form>
    </div>
  )
}

DeliveyForm.propTypes = {}

export default DeliveyForm