import React, { useEffect } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { Button, Row, Col, ListGroup, Image, Card, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import Message from '../../components/Message'
import CheckoutSteps from '../../components/CheckoutSteps'
import {Helmet} from "react-helmet";
import { createOrder } from '../../redux/actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'
import Table from 'react-bootstrap/Table';

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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>order summary</title>
            </Helmet>
            <Header />
            <Container className="content">
                <Row>
                <Col md={8}>
                        <div> 
                            <div>
                                <h2>Order Summary</h2>
                                {cart.cartItems.length === 0 ? <Message variant='info'>
                                    No Product in the Cart
                                </Message> : (
                                    <div>
                                        {cart.cartItems.map((item, index) => (
                                            <div key={index}>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                    <th>Product Name</th>
                                                    <th>Image</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td><Link to={`/product/${item.product}`}>{item.name}</Link></td>
                                                    <td><Image style={{height:"4rem"}} src={item.image} alt={item.name} fluid rounded /></td>
                                                    <td>&#8358; {item.price}</td>
                                                    <td>{item.qty}</td>
                                                    <td>&#8358; {(item.qty * item.price).toFixed(2)}</td>
                                                    </tr>
                                                </tbody>
                                                </Table>
                                            </div>
                                            
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p>Sub Total: &#8358; {cart.itemsPrice}</p>
                    </Col>
                    <Col xs={4}>
                        
                    </Col>
                    
                </Row>
        <div className='mt-5'>
            <h2>Shipment Details</h2>
            <div >
                <p>Address ............... {cart.shippingAddress.address},  {cart.shippingAddress.city}{'  '}</p>
                <p>Postal Code ............... {cart.shippingAddress.postalCode},{'  '} </p>
                <p>Country ............... {cart.shippingAddress.country}</p>
                <p><Link to='/shipping'>Edit Details</Link></p>
            </div>
            {error && <Message variant='danger'>{error}</Message>}

            <div className="auth__btnwrapper">
                <Button
                    type='button'
                    size="lg"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrder}
                >
                    Place Order
                </Button>
            </div>
        </div>
       
        </Container>
        <Footer />
    </>
        
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {createOrder }) ( PlaceOrderScreen )