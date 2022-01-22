import React, { useState} from 'react'
import { Container, Form, Button, Image, Card} from 'react-bootstrap'
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
        <Container className=' auth-container content'>
        <Card className="p-5">
       <CheckoutSteps step1 step2 />
        <h2 className="text-center checkout__header">Shipping Address</h2>
         {/*} {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />} */}
            <Form className="auth-form" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Control 
                        className="auth-input" 
                        type='text'
                        placeholder='Shipping address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Control 
                        className="auth-input" 
                        type='text'
                        placeholder='City'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId='postalCode'>
                    <Form.Control
                        className="auth-input"
                        type='text'
                        placeholder='Postal code'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId='country'>
                    <Form.Control
                        className="auth-input" 
                        type='text'
                        placeholder='Country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                    </Form.Control>
                </Form.Group>
                    <div className='d-grid gap-2'>
                        <Button size="lg" type="submit">Next</Button>
                    </div>
            </Form>
            </Card>
</Container>
    )
}

export default ShippingScreen
