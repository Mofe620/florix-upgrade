import React, {useState} from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import RequestForm from '../../components/emergency/RequestForm'
import DeliveyForm from '../../components/emergency/DeliveyForm'
import EmergencyOrderVerifyScreen from './EmergencyOrderVerifyScreen'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'


const EmergencyScreen = ({isAuthenticated, history}) => {

  // Steps
const [activeStep, setActiveStep] = useState(0)

const getSteps = () =>{
  return ["Request Form", "Delivery Form"]
}

const steps = getSteps()
// State Variables
const [multiFormValues, setMultiformValues] = useState({
  tel:"",
  extraInfo:"",
  recipientName:"",
  recipientTel:"",
  pickUpAddress:"",
  deliveryAddress:"",
  location:"",
  image:"",
  productName:"",
  brand:"",
  orderCategory:"",
  storageSystem:"",
  dosageForm:"",
  strength:"",
  packSize:"",
})

const [errors, setErrors] = useState({})

//Handle Form values on change
const handleChange = (input) => (e) =>{
  setMultiformValues({...multiFormValues, [input]: e.target.value})

  if(!!errors[input])
  setErrors({
    ...errors,
    [input]:null
  })
}

const validateInput = () =>{
  const {orderCategory, brand, productName, dosageForm, strength, packSize, recipientName, recipientTel, deliveryAddress} = multiFormValues
  const newErrors={}
  if(!orderCategory || orderCategory === "") newErrors.orderCategory = "Select product category"
  if(!productName || productName === "") newErrors.productName = "Enter  product name"
  if(!brand || brand === "") newErrors.brand = "Enter product brand"
  if(!dosageForm || dosageForm === "") newErrors.dosageForm = "Select dosage form"
  if(!strength || strength === "") newErrors.strength = "Enter dose/strength"
  if(!packSize || packSize === "") newErrors.packSize = "Enter quantity"
  // if(!recipientName || recipientName === "") newErrors.recipientName = "Recipient name is required"
  // if(!recipientTel || recipientTel === "") newErrors.recipientTel = "Enter Recipient phone number"
  // if(!deliveryAddress || deliveryAddress === "") newErrors.deliveryAddress = "Enter the delivery address"

  return newErrors
}

// Handle next
const HandleNext = () =>{
  const inputErrors = validateInput()
  if(Object.keys(inputErrors).length > 0){
    setErrors(inputErrors)
  } else{
    setActiveStep((nextStep) => nextStep + 1)
  }
  
}

// Handle Previous Step
const HandlePrevious = () =>{
  setActiveStep((previousStep) => previousStep - 1)
}
const location = useLocation()

if(!isAuthenticated){
  history.push({
      pathname: "/login",
      state: {
          from: location
      }
  })
} 

  return (
    <>
      <Header />
      <div className='mt-5'>
        <Image src='/assets/images/shop/ems-ad2.png' className='emergency__image'/>
      </div>
      <Container className='emergency'>
          {activeStep === 0 && (
          <RequestForm values={multiFormValues} handleChange = {handleChange} handleErrors={errors} /> 
          )}

          {activeStep === 1 && (
          <DeliveyForm values={multiFormValues} handleChange = {handleChange} handleErrors={errors} /> 
          )}
          {activeStep === 2 && (
          <EmergencyOrderVerifyScreen values={multiFormValues} handleChange = {handleChange} /> 
          )}
      <Button style={activeStep === 2 ? {display:"none"}: {}} className='emergency__btn emergency__btn__next' onClick={HandleNext}>{activeStep === steps.length - 1?"Verify":"NEXT"}</Button>
      </Container>
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { }) (EmergencyScreen)