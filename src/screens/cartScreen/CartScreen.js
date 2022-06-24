import React, { useEffect} from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { Link, Redirect, useLocation  } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { Row, Col, ListGroup, Image, Form, Button, Card, Container } from 'react-bootstrap'
import Message from '../../components/Message'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

function CartScreen({ match, history, isAuthenticated }) {
    const productId = match.params.id
    const location = useLocation()
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        if (!isAuthenticated) {
            history.push({
                pathname: "/login",
                state: {
                    from: location
                }
            })
        } else{
            history.push('/shipping')
        }  
    }
    const keepShopping = ()=>{
        history.push('/products')
    }

    return (
        <>
        <Container className="content checkout">
            <Helmet>
             <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Cart Page</title>
            </Helmet>
            <Header />
        <Row>
            <Col md={8}>
                <h2 className="checkout__header text-center">Cart Page</h2>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        No Item in the Cart <Link to='/'>Go Back</Link>
                    </Message>
                    
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>

                                    {/* Item info */}
                                    
                                    <Row>
                                        <Col md={2}>
                                            {/* <Image src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} fluid rounded /> */}
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3} className="cart__name">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        {/* Price of item */}
                                        <Col md={2}>
                                            <p className="product__price">&#8358; {item.price}</p>
                                        </Col>

                                        {/* Column for adjusting quantity of items in the cart  */}
                                        
                                        <Col md={3}>
                                            <Form.Control
                                                style={{backgroundColor:"white", height:"3rem"}}
                                                type="number"
                                                min="1"
                                                max={item.countInStock} 
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                            

                                            </Form.Control>
                                        </Col>
                                         {/* Remove Item from Cart Column */}       
                                        <Col md={1} className="cart__btn">
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                {/*<i className='fas fa-trash'></i> */}
                                                <span className="product__trash">Remove</span>
                                            </Button>
                                            
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className="">
                            <h2>{cartItems.reduce((acc, item) => acc + item.qty, 0)} Product(s) Added</h2>
                            <p className="product__price"> Sub total: &#8358; {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button
                                    type='button'
                                    size="lg"
                                    disabled={cartItems.length === 0}
                                    onClick={checkoutHandler}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-grid gap-2">
                            <Button
                                type='button'
                                size="lg"
                                variant="warning"
                                onClick={keepShopping}
                            >
                                Add More Products?
                            </Button>
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
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
  
  export default connect(mapStateToProps, { addToCart, removeFromCart}) (CartScreen)