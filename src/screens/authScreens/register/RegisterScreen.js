import React, {useState} from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import AuthNavigation from '../../../components/global/_authNavigation'

import BioData from './_BioData'
import AccountData from './_AccountData'
import EmergencyOrderVerifyScreen from '../../baseScreens/EmergencyOrderVerifyScreen'
import AuthFooter from '../../../components/global/_authFooter'
import { Link } from 'react-router-dom'
import RegisterDetailsVerify from './RegisterDetailsVerify'

const RegisterScreen = () => {

    // Steps
    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () =>{
        return ["Bio Data", "Account Data"]
    }

    const steps = getSteps()
    // State Variables
    const [multiFormValues, setMultiformValues] = useState({
        email:"",
        username:"",
        firstName:"",
        lastName:"",
        telephone:"",
        gender:"",
        dateOfBirth:"",
        profession:"",
        address:"",
        country: "",
        state:"",
        city:"",
        password:"",
        re_password:""
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
  const {firstName, lastName, username, email,  telephone, gender, dateOfBirth, profession, address, country, state, city,} = multiFormValues
  const newErrors={}
  if(!firstName || firstName === "") newErrors.firstName = "First name is required"
  if(!lastName || lastName === "") newErrors.lastName = "Last name is required"
  if(!gender || gender === "") newErrors.gender = "Please select gender"
  if(!dateOfBirth || dateOfBirth === "") newErrors.dateOfBirth = "Date of birth is required"
  if(!address || address === "") newErrors.address = "Address is required"
  // if(!country || country === "") newErrors.country = ""
  if(!state || state === "") newErrors.state = "State is required"
  if(!city || city === "") newErrors.city = "City is required"

  // if(!recipientName || recipientName === "") newErrors.recipientName = "Recipient name is required"
  // if(!recipientTel || recipientTel === "") newErrors.recipientTel = "Enter Recipient phone number"
  // if(!deliveryAddress || deliveryAddress === "") newErrors.deliveryAddress = "Enter the delivery address"

  return newErrors
}

    // Handle next
    const HandleNext = () =>{
    const inputErrors = validateInput()
    if(Object.keys(inputErrors).length > 0){
        // setErrors(inputErrors)
        setActiveStep((nextStep) => nextStep + 1)
    } else{
        setActiveStep((nextStep) => nextStep + 1)
    }
    
    }

    // Handle Previous Step
    const HandlePrevious = () =>{
    setActiveStep((previousStep) => previousStep - 1)
    }


    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Account created")
    }

  return (
    <>
      <AuthNavigation />
      <Container className=''>
          {activeStep === 0 && (
          <BioData values={multiFormValues} handleChange = {handleChange} handleErrors={errors} /> 
          )}

          {activeStep === 1 && (
          <AccountData values={multiFormValues} handleChange = {handleChange} handleErrors={errors} /> 
          )}
          {activeStep === 2 && (
          <RegisterDetailsVerify values={multiFormValues} handleChange = {handleChange} /> 
          )}

      {/* <Button variant='secondary' disabled={activeStep === 0} style={activeStep === 2 ? {display: 'none'}: {}} className='emergency__btn emergency__btn__previous' onClick={HandlePrevious}>Previous</Button> */}
      
        <div className='auth__policy__wrapper d-flex justify-content-center'>
            <Form.Group>
                <Form.Check
                    type='checkbox'
                />
            </Form.Group>
                        
            <p>I agree to all the <Link>Terms</Link> and <Link>Privacy policy</Link></p>
                    
        </div>
        <div className='auth__btnwrapper'>
        <Button style={activeStep === 2 ? {display:"none"}: {}} className='auth__bt' onClick={HandleNext}>{activeStep === steps.length - 1?'Create Account':"NEXT"}</Button>
            <p> Already have an account? <Link to="/login" className='router-link'>Sign In</Link></p>
        </div>
      </Container>
      <AuthFooter />
    </>
  )
}

export default RegisterScreen