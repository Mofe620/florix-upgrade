import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const RequestForm = ({values, handleChange}) => {
  console.log(values)
  console.log(handleChange)
  return (
    <>
      <div className='emergency__header'>
        <h2>Place Request</h2>
        <p>Please fill in accurate information and providemuch detail as possible where necessary</p>
      </div>
        
    <div className='emergency__form-container'>
      <Form>
      {/*         
          <div className='emergency__formgroup__wrapper'>
            <Form.Group className='emergency__formgroup__first-half'>
              <Form.Label className='formlabel'>Full Name<strong style={{color:"red"}}>*</strong></Form.Label>
              <Form.Control  className='emergency__forminput' placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='emergency__formgroup__second-half'>
              <Form.Label className='formlabel'>Phone Number<strong style={{color:"red"}}>*</strong></Form.Label>
              <Form.Control onChange={handleChange('tel')} value={values.tel} className='emergency__forminput' placeholder='Phone Number' />
            </Form.Group>
          </div>
          
        */}
          <div>
            <Form.Group className='emergency__formgroup mt-5'>
                <Form.Control className='emergency__forminput' onChange={handleChange('orderCategory')} value={values.orderCategory} as="select" aria-label="Default select example">
                  <option className='emergency__formgroup__option input-field'>Select category of pick-up/delivery Item</option>
                  <option className='emergency__formgroup__option input-field' value="Medications">Medications</option>
                  <option className='emergency__formgroup__option input-field' value="Laboratory Specimen">Laboratory Specimen</option>
                </Form.Control>
            </Form.Group>
          </div>

          <div className='my-5'>
            <Form.Group>
              <Form.Label className='formlabel' style={{fontSize:"18px"}}>Briefly State Health Complaints<strong style={{color:"red"}}>*</strong></Form.Label>
              <Form.Control as="textarea" placeholder="e.g. I'm having toothache" className='input-field' required/>
            </Form.Group>
          </div>

          <div>
            <div className="emergency__pickup__container pt-5">
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Generic Name<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control onChange={handleChange('productName')} value={values.productName} className='emergency__formgroup__input emergency__forminput input-field' placeholder='e.g Paracetamol' />
                </Form.Group>
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Brand</Form.Label>
                  <Form.Control onChange={handleChange('brand')} value={values.brand} className='emergency__formgroup__input emergency__forminput input-field' placeholder='Emzor' />
                </Form.Group>
                <Form.Group className='emergency__formgroup__wrapper'>
                    <Form.Label className='emergency__formgroup__text formlabel'>Dosage Form<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control className='emergency__formgroup__input emergency__forminput' onChange={handleChange('dosageForm')} value={values.dosageForm} as="select" aria-label="Default select example">
                      <option className='emergency__formgroup__option'>Select</option>
                        <option className='emergency__formgroup__option input-field' value="Tablets">Tablets/Capsules</option>
                        <option className='emergency__formgroup__option input-field' value="Capsules">Syrups/Suspensions/Emulsions/Solutions</option>
                        <option className='emergency__formgroup__option input-field' value="Capsules">Eye/ear Drops*</option>
                        <option className='emergency__formgroup__option input-field' value="Syrups/Suspensions">Creams/Ointments/Plasters</option>
                        <option className='emergency__formgroup__option input-field' value="Pessaries/Suppositories">Injections/Infusions*</option>
                        <option className='emergency__formgroup__option input-field' value="Injections">Aerosols/Sprays</option>
                        <option className='emergency__formgroup__option input-field' value="Infusions">Pessaries/Suppositories</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Dose/strength<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control onChange={handleChange('strength')} value={values.strength} className='emergency__formgroup__input emergency__forminput input-field' placeholder='e.g 100 mg or 5 mg/ml' />
                </Form.Group>
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Quantity<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control onChange={handleChange('packSize')} value={values.packSize} className='emergency__formgroup__input emergency__forminput input-field' placeholder='e.g 1 Pack' />
                </Form.Group>
                <Form.Group className='d-flex my-4'>
                  <Form.Label className='emergency__checkbox__label'>Nature of Package</Form.Label>
                  <Form.Check className='emergency__checkbox ms-5' type='radio' label='Normal'/>
                  <Form.Check className='emergency__checkbox ms-5' type='radio' label='Cold Chain'/>
                </Form.Group>
            </div>

            <div className="emergency__pickup__container my-5">
              <Row>
                <Col sm={12} md={4}>
                  <Form.Group className=''>
                    <Form.Label className='formlabel'>Pick-up Address<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control onChange={handleChange('pickUpAddress')} value={values.pickUpAddress} className='input-field' placeholder='Pick-up Address' />
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group className=''>
                    <Form.Label className='formlabel'>Phone no.<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control onChange={handleChange('tel')} value={values.tel} className='input-field' placeholder='' />
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                <Form.Group className=''>
                    <Form.Label className='formlabel'>Location<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control className='input-field' onChange={handleChange('location')} value={values.location} as="select" aria-label="Default select example">
                      <option className=''>Select area in Benin City</option>
                        <option className='' value="Tablets">New Benin</option>
                        <option className='' value="Capsules">Ekenhuan</option>
                        <option className='' value="Syrups/Suspensions">Oluku/Ishihor</option>
                        <option className='' value="Pessaries/Suppositories">Sakponba</option>
                        <option className='' value="Injections">Uselu/Ugbowo</option>
                        <option className='' value="Infusions">Agip</option>
                    </Form.Control>
                </Form.Group>
                </Col>
              </Row>
              
            </div>
          </div>

        </Form>
        <div className='emergency__premium__container'>
          <h2>OR</h2>
          <p><a href="https://tinyurl.com/2p98zk2h" target='_blank' rel="noreferrer">Speak with a Pharmacist</a></p>
        </div>
    </div>
    </>
  )
}

export default RequestForm