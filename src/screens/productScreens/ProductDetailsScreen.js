import React, { useState, useEffect } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector, connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { Link, useLocation } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, Container } from 'react-bootstrap'
import Rating from '../../components/Rating'
import Message from '../../components/Message'
import LoadingMain from '../../components/spinners/LoadingMain'
import { listProductDetails, createProductReview } from '../../redux/actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../constants/productConstants'

function ProductScreen({ match, history, isAuthenticated }) {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

 
    const auth = useSelector(state => state.auth)
    const { user  } = auth

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (!isAuthenticated) {
            history.push({
                pathname: "/login",
                state: {
                    from: location
                }
            })
        } else{
            if (successProductReview) {
                setRating(0)
                setComment('')
                dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
            }
            dispatch(listProductDetails(match.params.id))
        }  
    }, [dispatch, match, successProductReview])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(qty <=e.target.value <=product.countInStock && qty > 0){
               console.log(qty)
                history.push(`/cart/${match.params.id}?qty=${qty}`)
                console.log(qty)
        }else{
            alert("Insifficient Quantity in Stock")
            }
    }

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (
        <>
        <div className="product mx-4" style={{marginTop:"70px"}}>
            <Header />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>{product.name}</title>
            </Helmet>
            <Container className=''>
            {loading ?
                <LoadingMain />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={4} className="">
                                    <Image src={product.image} alt={product.name} className="product__details__img" fluid />   
                                </Col>
                                <Col md={4}>
                                    <div>
                                        <h4 className="product__name mt-3">Generic Name: {product.name}</h4>
                                        <p>Brand: {product.brand}  </p>
                                        <p>Dosage form: {product.dosageForm} </p>
                                        <p>Strength: {product.strength}</p>
                                        <p> Description: {product.description} </p>
                                    
                                        
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Card className="product__details__card">
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <p className="product__price">&#8358; {product.price}</p>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' 
                                                        
                                                        
                                                        : <p className='product__oos'>Out of Stock</p>}
                                                    </Col>
                                                </Row>
                                                 <ListGroup.Item>
                                                {product.countInStock > 0 ? 
                                                       <Form onSubmit ={handleSubmit}>
                                                       <Form.Control
                                                           style={{backgroundColor:"white", height:"3rem"}}
                                                           type="number"
                                                           min="1"
                           
                                                           placeholder='Enter quantity'
                                                           max={product.countInStock} 
                                                           onChange= {e=>setQty(e.target.value)}
                                                         
                                                       >
                                                           

                                                       </Form.Control>
                                                       
                                                       <div className="d-grid gap-2 pt-2">
                                                       <Button
                                                       
                                                       size="lg"
                                                       disabled={product.countInStock === 0}
                                                       type="submit">
                                                       Add to Cart
                                                   </Button>
                                                       </div>
                                                   </Form>
                                                
                                                    : <div className="d-grid gap-2 pt-2">
                                                    <Button
                                                        size="lg"
                                                        disabled={product.countInStock === 0}
                                                        type="submit">
                                                        Add to Cart
                                                    </Button>
                                                    </div>}
                                                 
                                                </ListGroup.Item>
                                            </ListGroup.Item>

                                        
                                               
            
                                        </ListGroup>
                                       
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="product__details__feedback">
                                <Col md={6}>
                            {/*
                                    {product.reviews.length === 0 && <Message variant='info'>Product reviews will be shown here if present</Message>}

                                    
                                        {product.reviews.map((review) => (
                                            <div key={review.id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.dateCreated.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </div>
                                        ))}
                                        */}
                                        <ListGroup variant='flush'>
                                    
                                        <ListGroup.Item>
                                            

                                            {loadingProductReview && <LoadingMain />}
                                            {successProductReview && <Message variant='success'>Feedback was sent successfully</Message>}
                                            {errorProductReview && <Message variant='warning'>Sorry, we couldn't submit your feedback. Select an option and try again OR you may have given feedback on this product before.</Message>}

                                            {user ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label className="my-3">Leave Feedback on this Product</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            className="search-ppty"
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Option...</option>
                                                            <option value='1'>1 - Very dissatisfied</option>
                                                            <option value='2'>2 - Dissatisfied</option>
                                                            <option value='3'>3 - Neither satisfied nor dissatisfied</option>
                                                            <option value='4'>4 - Satisfied</option>
                                                            <option value='5'>5 - Very satisfied</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label className="my-3">Add a comment</Form.Label> {/* The label called review is named comment in the database(backend)*/}
                                                        <Form.Control
                                                            as="textarea"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        className="blog__comment__button"
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'> <Link to='/login'>Sign In</Link> to Leave a feedback on this product</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    )

            }

            </Container>
        </div>
        <Footer />
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {listProductDetails }) ( ProductScreen )
