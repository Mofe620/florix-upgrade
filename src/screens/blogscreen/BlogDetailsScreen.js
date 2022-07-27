import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { BLOG_COMMENT_RESET } from '../../redux/actions/types';
import { listBlogDetails, getBlogComment } from '../../redux/actions/blogActions';
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import LoadingMain from '../../components/spinners/LoadingMain';


const BlogDetailsScreen = ({match}) => {

    const [comment, setComment] = useState('')

    const blogDetails = useSelector(state => state.blogDetails)
    const { loading, error, blog } = blogDetails
    

    const dispatch = useDispatch()

    const  blogComment = useSelector(state => state.blogComment)
    const { loading:blogCommentLoading, error:blogCommentError, success:blogCommentSuccess} = blogComment

    useEffect(() => {
        const slug = match.params.id;
        if (blogCommentSuccess) {
            setComment('')
            
        }
        dispatch(listBlogDetails(slug))
    }, [dispatch, blogCommentSuccess])

    const createBlog = () => {
        return {__html: blog.body}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const submitHandler = (e) => {
        const slug = match.params.id
        e.preventDefault()
        dispatch(getBlogComment(
            slug, {
            comment
        }
        ))
    }
    
    return (
        <>
        <Header />
        <Container className="content post-details">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Health related blog content" />
                <title>{blog.title}</title>
            </Helmet>
            {loading ? <LoadingMain /> :
                error ? <Message variant='info'>{error}</Message> :
                (
                    <Row>
                        <Col sm={8}>
                        <div>
                            <h3 className='display-2 post-details__title'>{blog.title}</h3>
                            <p>{capitalizeFirstLetter(blog.category)} </p>
                            <div>
                                <Image className="post-details__img" src={blog.image} fluid/>
                            </div>
                            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
                        </div>
                        <div className="blog__content">
                        <div className="blog__comments">
                            {!blog?.comments?.length ? (
                                    <p>No comments</p>
                                ) : (
                                <div className="blog__comment">
                                    {blog?.comments.map((comment) => (
                                    <div key={comment?.id}>
                                        <p className='blog__comment__name'>{comment?.name}</p>          
                                        <p className="blog__comment__date"><i>{comment?.dateCreated.substring(0, 10)}</i></p>
                                        <p className="blog__comment__comment">{comment?.comment}</p>
                                    </div> 
                                    ))}
                                </div>
                                )}
                        </div>
                            {blogCommentLoading && <Loader />}
                            {blogCommentSuccess && <Message variant='success'></Message>}
                            {blogCommentError && <Message variant='info'>Please login before adding a comment</Message>}
                            <Form onSubmit={submitHandler}>
                                <Form.Group controlId='comment'>
                                    <Form.Label className="blog__add-comment">Leave a comment</Form.Label> {/* The label called review is named comment in the database(backend)*/}
                                    <Form.Control
                                        as='textarea'
                                        rows={10}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Button type='submit' variant='primary' className="blog__comment__button">Comment</Button>
                            </Form>
                    </div>
                    </Col>
                    <Col sm={4}></Col>
            </Row>
                )
            }
            
            
        </Container>
        <Footer />
    </>   
   
    );
};

export default BlogDetailsScreen;