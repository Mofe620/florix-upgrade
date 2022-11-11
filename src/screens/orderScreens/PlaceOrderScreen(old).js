import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import CheckoutSteps from '../../components/CheckoutSteps'
import { createOrder } from '../../redux/actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)



    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        if (success) {
            history.push('/payment/monnify')
            // history.push(`/order/${order.id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice, 
        }))
    }

    return (
        <Container className="content">
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                     
                            <h2>Shipping</h2>
                            <div className='order__details'>
                            
                                <h3 className="me-2"><strong>Shipping Address: </strong></h3>
                                <p>
                                    {cart.shippingAddress.address},  {cart.shippingAddress.city}
                                    {'  '}
                                    {cart.shippingAddress.postalCode},
                                    {'  '}
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        

                    
                            <div className='order__details'>
                                <h3 className="me-2"><strong>Payment Method: </strong></h3>
                                <p>
                                    {cart.paymentMethod}
                                </p>
                            </div>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? <Message variant='info'>
                                No Product in the Cart
                            </Message> : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} fluid rounded />
                                                    </Col>

                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>

                                                    <Col md={4}>
                                                        {item.qty} X &#8358; {item.price} = &#8358; {(item.qty * item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                        </ListGroup.Item>

                    </ListGroup>

                </Col>

                <Col md={4}>
                    <Card className="checkout__header">
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Sub total:</Col>
                                    <Col>&#8358; {cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button
                                        type='button'
                                        size="lg"
                                        disabled={cart.cartItems === 0}
                                        onClick={placeOrder}
                                    >
                                        Place Order
                                    </Button>
                                </div>
                                
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PlaceOrderScreen
