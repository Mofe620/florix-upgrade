import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'

const RequestForm = ({values, handleChange, handleErrors}) => {
  console.log(values)
  console.log(handleChange)
  return (
    <>
      <div className='emergency__header text-center'>
        <h2>Place Request</h2>
        <p>Please fill in accurate information and provide much detail as possible where necessary</p>
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
                <Form.Control 
                  className='emergency__forminput form-select' 
                  onChange={handleChange('orderCategory')} 
                  value={values.orderCategory} as="select" 
                  aria-label="Default select example"
                  isInvalid={!!handleErrors.orderCategory}
                  >
                  <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.orderCategory}</Form.Control.Feedback>
                  <option className='emergency__formgroup__option input-field'>--Select Request--</option>
                  <option className='emergency__formgroup__option input-field' value="Medications">Medications</option>
                  {/* <option className='emergency__formgroup__option input-field' value="Laboratory Specimen">Medical Items</option> */}
                 
                  
                </Form.Control>
            </Form.Group>
          </div>

          {/* <div className='my-5'>
            <Form.Group>
              <Form.Label className='formlabel' style={{fontSize:"18px"}}>Briefly State Health Complaints<strong style={{color:"red"}}>*</strong></Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="e.g. I'm having toothache" 
                className='input-field' 
                required
                onChange={handleChange('extraInfo')} value={values.extraInfo}
                />
            </Form.Group>
          </div> */}
          <div className='p-2 d-flex justify-content-center' style={{color:"white", backgroundColor:"#2E83B5"}}>
            <Form.Group className=''>
                <Form.Label className='mx-2 text-center' style={{fontSize:"18px"}}>Upload Prescription</Form.Label>
                <Form.Control 
                  type="file" 
                  className='input-field' 
                  onChange={handleChange('image')} value={values.image}
                  />
              </Form.Group>
          </div>
          <div>
            <div className="emergency__pickup__container pt-md-5 pt-sm-3">
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Generic Name<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control 
                    onChange={handleChange('productName')} 
                    value={values.productName} 
                    className='emergency__formgroup__input emergency__forminput input-field' 
                    placeholder='e.g Paracetamol' 
                    isInvalid={!!handleErrors.productName}
                    />
                  <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.productName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='emergency__formgroup__wrapper mt-4'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Brand<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control 
                    onChange={handleChange('brand')} 
                    value={values.brand} className='emergency__formgroup__input emergency__forminput input-field' 
                    placeholder='e.g. Emzor' 
                    isInvalid={!!handleErrors.brand}
                    />
                  <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.brand}</Form.Control.Feedback>
                </Form.Group>
                <div className='my-4'>
                  <Row>
                    <Col>
                      <Form.Group className='emergency__formgroup__wrapper'>
                        <Form.Label className='formlabel'>Dosage Form<strong style={{color:"red"}}>*</strong></Form.Label>
                        <Form.Control 
                          className='emergency__formgroup__input__annex emergency__forminput form-select'  
                          onChange={handleChange('dosageForm')} 
                          value={values.dosageForm} 
                          as="select" 
                          aria-label="Default select example"
                          isInvalid={!!handleErrors.dosageForm}
                          >
                            
                          <option className='emergency__formgroup__option'>Select</option>
                            <option className='emergency__formgroup__option input-field' value="Tablets/Capsules">Tablets/Capsules</option>
                            <option className='emergency__formgroup__option input-field' value="Syrups/Suspensions/Emulsions/Solutions">Syrups/Suspensions/Emulsions/Solutions</option>
                            <option className='emergency__formgroup__option input-field' value="Eye/ear Drops*">Eye/ear Drops*</option>
                            <option className='emergency__formgroup__option input-field' value="Creams/Ointments/Pastes">Creams/Ointments/Pastes</option>
                            <option className='emergency__formgroup__option input-field' value="Injections/Infusions*">Injections/Infusions*</option>
                            <option className='emergency__formgroup__option input-field' value="Aerosols/Sprays">Aerosols/Sprays</option>
                            <option className='emergency__formgroup__option input-field' value="Pessaries/Suppositories">Inserts (Pessaries/Suppositories)</option>
                            <option className='emergency__formgroup__option input-field' value="Consumables">Cosumables (e.g. Plasters, Bandages, Cotton Wool)*</option>
                            
                          <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.dosageForm}</Form.Control.Feedback>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='emergency__formgroup__wrapper'>
                        <Form.Label className='formlabel'>Dose/strength<strong style={{color:"red"}}>*</strong></Form.Label>
                        <Form.Control 
                          onChange={handleChange('strength')} 
                          value={values.strength} 
                          className='emergency__formgroup__input__annex emergency__forminput input-field' 
                          placeholder='e.g 500 mg or 125mg/5ml'
                          isInvalid={!!handleErrors.strength}
                          />
                          <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.strength}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                
                
                <Form.Group className='emergency__formgroup__wrapper'>
                  <Form.Label className='emergency__formgroup__text formlabel'>Quantity<strong style={{color:"red"}}>*</strong></Form.Label>
                  <Form.Control 
                    onChange={handleChange('packSize')} 
                    style={{width:"35%"}} 
                    value={values.packSize} 
                    className='emergency__forminput input-field' 
                    placeholder='e.g 1 Pack' 
                    isInvalid={!!handleErrors.packSize}
                    />
                    <Form.Control.Feedback type='invalid' className='ms-2'>{handleErrors.packSize}</Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group className='d-flex my-4'>
                  <Form.Label className='emergency__checkbox__label'>Nature of Package</Form.Label>
                  <Form.Check className='emergency__checkbox ms-5' type='radio' label='Normal'/>
                  <Form.Check className='emergency__checkbox ms-5' type='radio' label='Cold Chain'/>
                </Form.Group> */}
            </div>

            {/* <div className="emergency__pickup__container my-5">
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
                        <option className='' value="New Benin">New Benin</option>
                        <option className='' value="Ekenhen">Ekenhuan</option>
                        <option className='' value="Oluku/Ishihor">Oluku/Ishihor</option>
                        <option className='' value="Sakponba">Sakponba</option>
                        <option className='' value="Uselu/Ugbowo">Uselu/Ugbowo</option>
                        <option className='' value="Agip">Agip</option>
                        <option className='' value="Others">Others</option>
                    </Form.Control>
                </Form.Group>
                </Col>
              </Row>
              
            </div> */}
            
          </div>

        </Form>
        <div className='emergency__premium__container'>
          <h2>OR</h2>
          <p><a href="https://tinyurl.com/2p98zk2h" target='_blank' rel="noreferrer">Chat with a Pharmacist</a></p>
        </div>
    </div>
    </>
  )
}

export default RequestForm