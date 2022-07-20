import React, { useState } from 'react'
import { emergency_order } from '../../redux/actions/emergencyorderAction'
import { useDispatch } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const EmergencyOrderVerifyScreen = ({values}) => {

  const [chat, setChat] = useState(false)

  const {
    tel,
    extraInfo,
    recipientName, 
    recipientTel, 
    pickUpAddress, 
    deliveryAddress, 
    location,
    orderCategory, 
    productName, 
    image,  
    dosageForm, 
    brand, 
    strength,  
    storageSystem, 
    packSize,
  } = values

  
  const dispatch = useDispatch()
  const submitHandler = (e)=>{
  e.preventDefault()
  dispatch(emergency_order(
    tel,
    extraInfo,
    recipientName, 
    recipientTel, 
    pickUpAddress, 
    deliveryAddress, 
    location,
    orderCategory, 
    productName, 
    image,  
    dosageForm, 
    brand, 
    strength,  
    storageSystem, 
    packSize,
    ))
  setChat(true)
}

if(chat){
  window.location.assign("https://tinyurl.com/2p98zk2h");
  // return <Redirect to={{ pathname: "https://tinyurl.com/2p98zk2h" }} target='_blank'/>
}
  return (
    <>
      <div className='content'>
      <div className='emergency__header'>
        <h2>Please verify the information provided</h2>
      </div>
      
        <div>
          <Row>
            <Col>
              {/* <p>Username: </p>
              <p>Email: </p> */}
              <p>Recipient Name: {recipientName}</p>
              <p>Recipient Phone Number: {recipientTel}</p>
              <p>Pick-Up Address: {pickUpAddress}</p>
              <p>Delivery Address: {deliveryAddress}</p>
              <p>Location: {location}</p>
            </Col>

            <Col>
              <p>Product Ordered: {productName}</p>
              {/* <p>Image: {image}</p> */}
              <p>Category: {orderCategory}</p>
              <p>Brand: {brand}</p>
              <p>Dosage Form: {dosageForm}</p>
              <p>Dose/Strength: {strength}</p>
              <p>Quantity: {packSize}</p>
              {/* <p>Complaints: {extraInfo}</p> */}
            </Col>
          </Row>
          </div>
          <div className='mt-5'>
            <p style={{color:'#808080'}}>Click the Button below to complete Request with FLO-LOG Whatsapp Admin</p>
          </div>
          <Button onClick={submitHandler} className='emergency__btn emergency__btn__next'>Submit</Button>
      </div>
    </>
  )
}

export default EmergencyOrderVerifyScreen