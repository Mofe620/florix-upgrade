import React, { Component, useState, useEffect } from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LOAD_USER_PROFILE_RESET } from '../../redux/actions/types'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { load_user_profile } from '../../redux/actions/authActions'

function UserProfile({location, history, isAuthenticated}) {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [image, setImage] = useState('')
    const [telephone, setTelephone] = useState('')
  
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const { user } = auth
    
    const profileInfo = useSelector(state => state.profileInfo)
    const {  error, loading, userInfo } = profileInfo
    console.log(userInfo)
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        } else {
                setUsername(user.username)
                setEmail(user.email)
                setImage(userInfo.image)
                setCompany(userInfo.company)
                setTelephone(userInfo.telephone)
            }
        
    }, [history, isAuthenticated, userInfo, user])
    return (
        <Container className='content'>
            <Row className="">
                <h1 className="profile-header">{company} profile</h1>
                <Col md={3} className="">
                    <div className="">
                            <img className='profile-img img-fluid rounded-circle  mt-4 mb-4' src={image}  alt=''/>
                            <p><Link href="/">Edit profile</Link></p>
                    </div>
                </Col>
                <Col md={8}>
                    <Form className="mt-4">
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="auth-input" type="name" value={username} disabled/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="auth-input" type="name" value={email} disabled/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="auth-input" type="name"   value={company ? company : " Your company/organization name?"  } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control className="auth-input" type="email" value={telephone ? telephone : " Mobile/telephone no."} />
                        </Form.Group>
                        {/*<Button className="auth-button btn btn-block w-100" variant="primary" value="reset"> Save</Button>*/}
                    </Form>
                </Col>
            </Row>
                <div md={6}  className="mt-4">
                    <h2>My Order History</h2>
                </div>
        
    </Container>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {load_user_profile}) (UserProfile)


