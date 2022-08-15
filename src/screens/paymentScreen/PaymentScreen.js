import React, { useState, useEffect } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { Form, Button, Col, Container } from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { savePaymentMethod } from '../../redux/actions/cartActions'

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Powered By Monnify')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Payment method</title>
            </Helmet>
            <Header />
            <Container style={{marginTop:"10rem" }}>
           
            <CheckoutSteps step1 step2 step3 />
            <div className="auth__form__wrapper d-flex justify-content-center checkout__header">
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Col>
                        <Form.Check
                            type='radio'
                            style={{fontSize:"1.5rem"}}
                            label='Pay via Debit Card or Bank Transfer'
                            id='Monnify'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>
                <div className="auth__btnwrapper">
                    <Button size="lg" type="submit"> Continue</Button>
                </div>
            </Form>
            </div>
        </Container>
        <Footer />
        </>
    )
}

export default PaymentScreen
