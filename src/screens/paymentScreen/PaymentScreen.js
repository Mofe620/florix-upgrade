import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { savePaymentMethod } from '../../redux/actions/cartActions'

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <Container className="content" >
            <CheckoutSteps step1 step2 step3 />
            <div className="d-flex justify-content-center checkout__header" style={{paddingTop:"15rem" }}>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Payment Options</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>
                <div className="d-grid gap-2 pt-2">
                    <Button size="lg" type="submit"> Continue</Button>
                </div>
            </Form>
            </div>
        </Container>
    )
}

export default PaymentScreen
