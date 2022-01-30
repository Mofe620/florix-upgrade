import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import Message from '../../components/Message'
import CheckoutSteps from '../../components/CheckoutSteps'
import {Helmet} from "react-helmet";
import { createOrder } from '../../redux/actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'

function PlaceOrderScreen({ history, isAuthenticated }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate
    const location = useLocation()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)



    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        if (success) {
            history.push(`/order/${order.id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () => {
        if (!isAuthenticated) {
            history.push({
                pathname: "/login",
                state: {
                    from: location
                }
            })
        } else{
            dispatch(createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
            }))
        }  
        
    }
    return (
        <Container className="content">
            <Helmet>
             <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Place Order</title>
            </Helmet>
            <Row>
                <Col md={4}>
                     <div >
                     
                         <h3 className="me-2" style={{marginTop:"30px"}}><strong>Shipping Address: </strong></h3>
                         <p>
                             {cart.shippingAddress.address},  {cart.shippingAddress.city}
                             {'  '}
                             {cart.shippingAddress.postalCode},
                             {'  '}
                             {cart.shippingAddress.country}
                         </p>
                     </div>
                     <div >
                         <h3 className="me-2"><strong>Payment Method: </strong></h3>
                         <p>
                             {cart.paymentMethod}
                         </p>
                     </div> 
                            <h3><strong>Order Summary</strong></h3>
                          
                                <Row>
                                    <Col><p>Sub total:</p></Col>
                                    <Col><p>&#8358; {cart.itemsPrice}</p></Col>
                                </Row>
                          
                                {error && <Message variant='danger'>{error}</Message>}
                       
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
                </Col>
                <Col md={8}>
                    <ListGroup variant='flush'>
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
                                                    {/*  <Image src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} fluid rounded /> */}
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>

                                                <Col>
                                                    <p className="mx-5"><Link to={`/product/${item.product}`}>{item.name}</Link></p>
                                                </Col>

                                                <Col md={4}>
                                                    <p className="product__price">{item.qty} X &#8358; {item.price} = &#8358; {(item.qty * item.price).toFixed(2)}</p>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {createOrder }) ( PlaceOrderScreen )