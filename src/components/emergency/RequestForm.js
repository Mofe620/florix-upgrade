import React, { useState } from 'react'
import {Button, Col, Form, Modal, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Monnify from '../../utils/Monnify'


const RequestForm = ({values, handleChange, handleErrors}) => {
  const [premium, setPremium] = useState(false)
  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const [showModal, setShowModal] = useState(false)

  
  console.log(values)
  console.log(handleChange)
  const premiumHandler = () =>{
    swal('Subscribe to premium verson to unlock this feature')
  }
  return (
    <>
      <div className='emergency__header text-center'>
        <h2>Place Request</h2>
        <p>Please fill in accurate information and provide much detail as possible where necessary</p>
      </div>
    
    <div className='emergency__form-container'>
      <Form>
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
            </div>

            
          </div>

        </Form>
        {!premium ? 
         <div className='emergency__premium__container'>
            <h2>OR</h2>
            <p><a href='#' onClick={()=>{setShowModal(true)}}>Chat with a Pharmacist</a></p>
          </div> :

              <div className='emergency__premium__container'>
                <h2>OR</h2>
                <p><a href="https://tinyurl.com/2p98zk2h" target='_blank' rel="noreferrer">Chat with a Pharmacist</a></p>
              </div>
        }

          <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Body className='emergency__premium__modal w-70' style={{backgroundColor:'#5d8181', color:'white'}}>
              <p>Subscribe to the premium version to unlock this feature</p>
              <span><i class="fas fa-arrow-right"></i> <Link to='/payment/monnify'>Click to Subscribe</Link></span>
            </Modal.Body>
            
        </Modal>      
    </div>
    </>
  )
}

export default RequestForm