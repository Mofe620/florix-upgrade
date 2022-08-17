import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import {Helmet} from "react-helmet";
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getOrderDetails, payOrder, deliverOrder } from '../../redux/actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../../constants/orderConstants'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import StoreSpinner from '../../components/spinners/StoreSpinner';
import swal from 'sweetalert';

function OrderScreen({ match, history, isAuthenticated }) {
    const orderId = match.params.id
    const dispatch = useDispatch()
    const location = useLocation()

    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }


    const payWithMonnify = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://sdk.monnify.com/plugin/monnify.js'
        script.async = true
        
        script.onload = () => {
            window.MonnifySDK.initialize({
                amount: order.itemsPrice,
                currency: "NGN",
                reference: '' + Math.floor((Math.random() * 1000000000) + 1),
                customerName: order.user.username,
                customerEmail: order.user.email,
                apiKey: "MK_TEST_JGYE5NJ1T1",
                contractCode: "3834928931",
                paymentDescription: "Test Pay",
                isTestMode: true,
                metadata: {
                        "name": "Damilare",
                        "age": 45
                },
                paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
                onComplete: function(paymentResult){
                    //Implement what happens when transaction is completed.
                    dispatch(payOrder(orderId, paymentResult))
                     console.log(paymentResult);
                },
                onClose: function(data){
                    //Implement what should happen when the modal is closed here
                    console.log(data);
                }
            });
            setSdkReady(true)
            
        }
        document.body.appendChild(script)
    }

    useEffect(() => {

        if (!isAuthenticated) {
            history.push({
                pathname: "/login",
                state: {
                    from: location,
                }
            })
        } else{
            if (!order || successPay || order.id !== Number(orderId) || successDeliver) {
                dispatch({ type: ORDER_PAY_RESET })
                dispatch({ type: ORDER_DELIVER_RESET })
    
                dispatch(getOrderDetails(orderId))
            } //else if (!order.isPaid) {
            //     swal('Please click on payment button')
            //     if (!window.MonnifySDK) {
            //         payWithMonnify()
            //     } else {
            //         setSdkReady(true)
            //     }
            // }
        }


    }, [dispatch, order, orderId, successPay, successDeliver])


    // const successPaymentHandler = (paymentResult) => {
    //     dispatch(payOrder(orderId, paymentResult))
    // }

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }

    return loading ? (
        <StoreSpinner />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            <Container className="content">
                    <Helmet>
                     <meta charSet="utf-8" />
                        <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                        <title>Order products</title>
                    </Helmet>
                    <Header />
                   {/* <h1>Order: {order.Id}</h1> */}
                    <Row>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <p><strong>Username: </strong> {order.user.username}</p>
                                    <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                                    <p>
                                        <strong>Shipping Address: </strong>
                                        {order.shippingAddress.address},  {order.shippingAddress.city}
                                        {'  '}
                                        {order.shippingAddress.postalCode},
                                {'  '}
                                        {order.shippingAddress.country}
                                    </p>
                                    <Row>
                                        <Col sm={2}>
                                            <p><strong>Delivery Status:</strong></p>
                                        </Col>
                                        <Col sm={10}>
                                        {order.isDelivered ? (
                                        <Message variant='success'>Items Delivered{order.dateDelivered}</Message>
                                    ) : (
                                            <Message variant='info'>Not Delivered</Message>
                                        )}
                                        </Col>

                                    </Row>
                                    
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        <strong>Payment Method: </strong>
                                        {order.paymentMethod}
                                    </p>
                                    <Row><Col sm={2}><p><strong>Payment Status:</strong></p></Col>
                                    <Col sm={10}>{order.isPaid ? (
                                        <Message variant='success'>Payment successful{order.datePaid}</Message>
                                    ) : (
                                            <Message variant='info'>Not Paid</Message>
                                        )}
                                    </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <h2>Order Items</h2>
                                    {order.orderItems.length === 0 ? <Message variant='info'>
                                        Order is empty
                            </Message> : (
                                            <ListGroup variant='flush'>
                                                {order.orderItems.map((item, index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Row>
                                                            <Col md={1}>
                                                                {/* <Image src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} fluid rounded /> */}
                                                                <Image src={item.image} alt={item.name} fluid rounded />
                                                            </Col>

                                                            <Col>
                                                                <p><Link to={`/product/${item.product}`}>{item.name}</Link></p>
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
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h2>Process Transaction</h2>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row className="product__price">
                                            <Col><p>Sub total:</p></Col>
                                            <Col><p><strong>&#8358; {order.itemsPrice}</strong></p></Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {!order.isPaid && (
                                        <ListGroup.Item>
                                            {loadingPay && <StoreSpinner />}
                                                <>
                                                    <div className="d-grid gap-2 pt-2">
                                                        <Button
                                                            size="lg"
                                                            onClick={payWithMonnify}
                                                            >
                                                            Click to Pay
                                                        </Button>
                                                    </div>
                                                </>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                                {loadingDeliver && <StoreSpinner />}
                                {isAuthenticated && isAuthenticated.isAdmin && order.isPaid && !order.isDelivered && (
                                    <ListGroup.Item>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                            onClick={deliverHandler}
                                        >
                                            Mark As Delivered
                                        </Button>
                                    </ListGroup.Item>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </Container>
                 <Footer />
                </>
            )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
  export default connect(mapStateToProps, { getOrderDetails, payOrder, deliverOrder }) (OrderScreen)
