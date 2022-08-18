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
        <Container className="cart">
            <Helmet>
             <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Cart Page</title>
            </Helmet>
            <Header />
        <Row>
            <Col md={8}>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        No product in the Cart <Link to='/'>Add product</Link>
                    </Message>
                    
                ) : (
                        <div variant='flush'>
                            {cartItems.map(item => (
                                <div key={item.product}>

                                    {/* Item info */}
                                    
                                    <Row>
                                        <Col xs={2}>
                                            {/* <Image src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} fluid rounded /> */}
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col xs={3} className="cart__item__name">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        
                                        {/* Column for adjusting quantity of items in the cart  */}
                                        
                                        <Col xs={2}>
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

                                        {/* Price of item */}
                                        <Col xs={3}>
                                            <p className="cart__item__price">&#8358; {item.price}</p>
                                        </Col>

                                         {/* Remove Item from Cart Column */}       
                                        <Col xs={1} className="cart__btn">
                                            <div  onClick={() => removeFromCartHandler(item.product)}>
                                            <i className="fas fa-times cart__item__remove"></i>
                                            </div>               
                                        </Col>
                                        
                                    </Row>
                                </div>
                            ))}
                        </div>
                    )}
            </Col>


            <Col md={4}>
            
            </Col>
        </Row>
        <div className='mt-5'>
            <h2 className='fw-bold'>Total Number of Items .......... {cartItems.reduce((acc, item) => acc + item.qty, 0)}</h2>
            <p className='cart__item__price__total'> Sub Total ............... &#8358;{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
        <div className="">
                    <Button
                        size="lg"
                        variant="warning"
                        onClick={keepShopping}
                    >
                        Add More Products
                    </Button>
                </div>
                <div className="">
                    <Button
                        size="lg"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed to Checkout
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
  
  export default connect(mapStateToProps, { addToCart, removeFromCart}) (CartScreen)