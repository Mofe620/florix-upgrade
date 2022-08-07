import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import { signup } from '../../../redux/actions/authActions';

const RegisterDetailsVerify = ({values}) => {
  const auth = useSelector(state => state.auth)
  const { error, loading, userInfo } = auth

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
    <Container className='auth-container'>
        <div className='auth__btnwrapper ' style={{marginTop:"1rem"}}>
          {/* {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />} */}
          <Button onClick={submitHandler} className='auth__bt'>CLICK TO CREATE ACCOUNT</Button>
          <p className='text-center'> Already have an account? <Link to="/login" className='ruter-link'>Sign In</Link></p>
        </div>
    </Container>
  )
}

 const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {signup}) (RegisterDetailsVerify)