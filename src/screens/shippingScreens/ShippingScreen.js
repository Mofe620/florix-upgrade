import React, { useState} from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { Container, Form, Button, Image, Card} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CheckoutSteps from '../../components/CheckoutSteps'
import { saveShippingAddress } from '../../redux/actions/cartActions'

function ShippingScreen({history}) {


    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Billing address</title>
            </Helmet>
            <Header />
            <Container className=' auth-container' style={{marginTop:"10rem"}}>
            <Card className="p-5">
            <CheckoutSteps step1 step2 />
            <h2 className="text-center checkout__header">Shipping Address</h2>
            {/*} {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}
                <Form className="" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label className='auth__form__label'>Shipping Address</Form.Label>
                        <Form.Control 
                            className="auth__form__control" 
                            type='text'
                            placeholder=''
                            value={address ? address : ''}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="city">
                    <Form.Label className='auth__form__label'>City</Form.Label>
                        <Form.Control 
                            className="auth__form__control" 
                            type='text'
                            placeholder=''
                            value={city ? city : ''}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='postalCode'>
                        <Form.Label className='auth__form__label'>Postal Code</Form.Label>
                        <Form.Control
                            className="auth__form__control"
                            type='text'
                            placeholder=''
                            value={postalCode ? postalCode : ''}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='country'>
                        <Form.Label className='auth__form__label'>Country</Form.Label>
                        <Form.Control
                            className="auth__form__control" 
                            type='text'
                            placeholder=''
                            value={country ? country : ''}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        >
                        </Form.Control>
                    </Form.Group>
                        <div className='auth__btnwrapper'>
                            <Button className='auth__bt' size="lg" type="submit">CONTIUNE</Button>
                        </div>
                </Form>
                </Card>
        </Container>
        <Footer />
    </>
    )
}

export default ShippingScreen
