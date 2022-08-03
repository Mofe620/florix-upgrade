import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signup } from '../../../redux/actions/authActions';

const RegisterDetailsVerify = ({values}) => {

    const {
        firstName,
        lastName,
        gender,
        dateOfBirth,
        address,
        country,
        state,
        city,
        username,
        email,
        profession,
        telephone,
        password,
        re_password
      } = values

        
  const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault();
        dispatch(
          signup(
            firstName, lastName, gender,
             dateOfBirth, address, 
             country, state, city, 
             username, email,  
             profession, telephone, 
             password, re_password
          ));
    };

  return (
    <Container>
        <div className='' style={{marginTop:"10rem"}}>
        <Button onClick={submitHandler} className='emergency__btn emergency__btn__next'>Submit</Button>
        </div>
    </Container>
  )
}

export default RegisterDetailsVerify