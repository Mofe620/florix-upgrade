import React, {useState} from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import AuthNavigation from '../../../components/global/_authNavigation'
import { signup } from '../../../redux/actions/authActions'
import BioData from './_BioData'
import AccountData from './_AccountData'
import EmergencyOrderVerifyScreen from '../../baseScreens/EmergencyOrderVerifyScreen'
import AuthFooter from '../../../components/global/_authFooter'
import { Link } from 'react-router-dom'
import RegisterDetailsVerify from './RegisterDetailsVerify'
import { connect, useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'


const RegisterScreen = ({ signup, isAuthenticated }) => {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const { error, loading, userInfo } = auth

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
        telephone: "",
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

    const [stepOneErrors, setStepOneErrors] = useState({})
    const [stepTwoErrors, setStepTwoErrors] = useState({})

    //Handle Form values on change
    const handleChange = (input) => (e) =>{
    setMultiformValues({...multiFormValues, [input]: e.target.value})

  if(!!stepOneErrors[input]){
  setStepOneErrors({
    ...stepOneErrors,
    [input]:null
  })} else
    if(!!stepTwoErrors[input]){
  setStepOneErrors({
    ...stepTwoErrors,
    [input]:null
  })
  }
}

const validateStepOneInput = () =>{
  const {firstName, lastName, gender, dateOfBirth, address, country, state, city} = multiFormValues
  const newErrors={}
  if(!firstName || firstName === "") newErrors.firstName = "First name is required"
  if(!lastName || lastName === "") newErrors.lastName = "Last name is required"
  if(!gender || gender === "") newErrors.gender = "Please select gender"
  if(!dateOfBirth || dateOfBirth === "") newErrors.dateOfBirth = "Date of birth is required"
  if(!address || address === "") newErrors.address = "Address is required"
  if(!country || country === "") newErrors.country = "is required"
  if(!state || state === "") newErrors.state = "State is required"
  if(!city || city === "") newErrors.city = "City is required"

  return newErrors
}

  const validateStepTwoInput = () =>{
    const {username, email,  telephone, profession, password, re_password} = multiFormValues
    const newErrors={}
    if(!username || username === "") newErrors.username = "Username is required"
    if(!email || email === "") newErrors.email = "email is requied"
    if(!profession || profession === "") newErrors.profession = "Profession is required"
    if(!telephone || telephone === "") newErrors.telephone = "Telephone is requied"
    if(!password || password === "") newErrors.password = ""
    if(password === re_password) newErrors.re_password = "Password must match"

    return newErrors
  }
    // Handle next
    const HandleNext = () =>{
    const stepOneInputErrors = validateStepOneInput()
    const stepTwoInputErrors = validateStepTwoInput()

    if(Object.keys(stepOneInputErrors ).length > 0) {
        setStepOneErrors(stepOneInputErrors ) 
    }else{
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
        <div className='auth__form__wrapper shadow py-4' style={{marginTop:"10rem"}}>
          {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader />}
            {activeStep === 0 && (
            <BioData values={multiFormValues} handleChange = {handleChange} handleErrors={stepOneErrors} /> 
            )}

            {activeStep === 1 && (
            <AccountData values={multiFormValues} handleChange = {handleChange} handleErrors={stepTwoErrors} /> 
            )}
            {activeStep === 2 && (
            <RegisterDetailsVerify values={multiFormValues} handleChange = {handleChange} /> 
            )}

        {/* <Button variant='secondary' disabled={activeStep === 0} style={activeStep === 2 ? {display: 'none'}: {}} className='emergency__btn emergency__btn__previous' onClick={HandlePrevious}>Previous</Button> */}
        
          {/* <div className='auth__policy__wrapper d-flex justify-content-center'>
              <Form.Group>
                  <Form.Check
                      type='checkbox'
                  />
              </Form.Group>
                          
              <p>I agree to all the <Link>Terms</Link> and <Link>Privacy policy</Link></p>
                      
          </div> */}
          <div className='auth__btnwrapper'>
            <Button style={activeStep === 2 ? {display:"none"}: {}} className='auth__bt' onClick={HandleNext}>{activeStep === steps.length - 1?'FINAL STEP':"NEXT"}</Button>
          </div>
        </div>
      </Container>
      <AuthFooter />
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {signup}) (RegisterScreen)