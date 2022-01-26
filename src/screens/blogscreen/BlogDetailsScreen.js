import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BLOG_COMMENT_RESET } from '../../redux/actions/types';
import { listBlogDetails, getBlogComment } from '../../redux/actions/blogActions';


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
        <Container className="content post-details">
            <Row>
                <Col sm={8}>
                <div>
                <Image className="post-details__img" src={blog.image} />
                <h3 className='display-2 post-details__title'>{blog.title}</h3>
                <h4 className='text-muted post-details__category'>Category: {capitalizeFirstLetter(blog.category)}</h4>
                
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
            {blogCommentSuccess && <Message variant='success'>Comment Submitted</Message>}
            {blogCommentError && <Message variant='info'>Please login before adding a comment</Message>}
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='comment'>
                    <Form.Label className="blog__add-comment">Comment</Form.Label> {/* The label called review is named comment in the database(backend)*/}
                    <Form.Control
                        as='textarea'
                        row='5'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' className="blog__comment__button">Add Comment</Button>
                </Form>
            </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
            
        </Container>
        
    );
};

export default BlogDetailsScreen;