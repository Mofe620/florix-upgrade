import React, {useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import RequestForm from '../../components/emergency/RequestForm'
import DeliveyForm from '../../components/emergency/DeliveyForm'
import EmergencySuccessScreen from './EmergencySuccessScreen'

const EmergencyScreen = () => {

  // Steps
const [activeStep, setActiveStep] = useState(0)

const getSteps = () =>{
  return ["Request Form", "Delivery Form"]
}

const steps = getSteps()
// State Variables
const [multiFormValues, setMultiformValues] = useState({
  name: "",
  email: "",
  phoneNumber: "",
  pickUpAddress: "",
  deliveryAddress: ""
})

// Handle next
const HandleNext = () =>{
  setActiveStep((nextStep) => nextStep + 1)
}

// Handle Previous Step
const HandlePrevious = () =>{
  setActiveStep((previousStep) => previousStep - 1)
}

//Handle Form values on change
const handleChange = (input) => (e) =>{
  setMultiformValues({...multiFormValues, [input]: e.target.value})
}
  return (
    <>
      <Header />
      <Container className='emergency content'>
          {activeStep === 0 && (
          <RequestForm values={multiFormValues} handleChange = {handleChange} /> 
          )}

          {activeStep === 1 && (
          <DeliveyForm values={multiFormValues} handleChange = {handleChange} /> 
          )}
          {activeStep === 2 && (
          <EmergencySuccessScreen handleChange = {handleChange} /> 
          )}

      <Button variant='secondary' disabled={activeStep === 0} style={activeStep === 2 ? {display: 'none'}: {}} className='emergency__btn emergency__btn__previous' onClick={HandlePrevious}>Previous</Button>
      <Button style={activeStep === 2 ? {display:"none"}: {}} className='emergency__btn emergency__btn__next ' onClick={HandleNext}>{activeStep === steps.length - 1?"Submit":"Next"}</Button>
  
      </Container>
      <Footer />
    </>
  )
}

export default EmergencyScreen