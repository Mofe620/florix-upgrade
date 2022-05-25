import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RequestForm = ({values, handleChange}) => {
  console.log(values)
  console.log(handleChange)
  return (
    <>
      <div className='emergency__header'>
        <h2>Place Request</h2>
        <p>Please fill-in this form with much detail as possible</p>
      </div>
        
        <Form>
        <div className='emergency__formgroup__wrapper'>
                <Form.Group className='emergency__formgroup__first-half'>
                  <Form.Label className='formlabel'>Full Name<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control onChange={handleChange('name')} className='emergency__forminput' placeholder='Full Name' />
                </Form.Group>
                <Form.Group className='emergency__formgroup__second-half'>
                  <Form.Label className='formlabel'>Phone Number<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control onChange={handleChange('phoneNumber')} className='emergency__forminput' placeholder='Phone Number' />
                </Form.Group>
              </div>
            
                <div className='mt-5'>
                  <Form.Group className='emergency__formgroup'>
                      <Form.Control className='emergency__forminput' as="select" aria-label="Default select example">
                          <option className='emergency__formgroup__option'>Pickup/Delivery Item</option>
                          <option className='emergency__formgroup__option' value="1">Drugs</option>
                          <option className='emergency__formgroup__option' value="2">Laboratory Specimen</option>
                      </Form.Control>
                  </Form.Group>
                </div>
                <div>
              <div className="emergency__pickup__container">
                  <Form.Group className='emergency__formgroup__wrapper'>
                    <Form.Label className='emergency__formgroup__text formlabel'>Pick-UP Adress</Form.Label>
                    <Form.Control onChange={handleChange('pickUpAddress')} className='emergency__formgroup__input emergency__forminput' placeholder='Pick-up Address' />
                  </Form.Group>
                  <Form.Group className='d-flex my-4'>
                    <Form.Label className='emergency__checkbox__label'>Package Size</Form.Label>
                    <Form.Check className='emergency__checkbox ms-5' type='checkbox' label='Big'/>
                    <Form.Check className='emergency__checkbox ms-5' type='checkbox' label='Medium'/>
                    <Form.Check className='emergency__checkbox ms-5' type='checkbox' label='Small'/>
                  </Form.Group>
                </div>
              </div>
              <div className='my-5'>
                <Form.Group>
                  <Form.Label className='formlabel' style={{fontSize:"18px"}}>Any Health Related Problems? Explain Clearly</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </div>
        </Form>
    </>
  )
}

export default RequestForm