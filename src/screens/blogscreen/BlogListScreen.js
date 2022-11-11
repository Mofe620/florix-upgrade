import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet";
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import BlogCarousel from '../../components/blog/BlogCarousel'
import Blog from '../../components/blog/Blog'
import { listBlogs } from '../../redux/actions/blogActions'
import { getFeaturedBlog } from '../../redux/actions/blogActions'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import Header from '../../components/global/Header';
import LoadingMain from '../../components/spinners/LoadingMain';
import Message from '../../components/Message';


const BlogListScreen = () => {
    
    const dispatch = useDispatch()
    const blogList = useSelector(state => state.blogList)
    const { error, loading, blogs } = blogList

    const featuredBlog = useSelector(state => state.featuredBlog)
    const { blog } = featuredBlog
    const post = blog[0]

    useEffect(() => {

        dispatch(listBlogs())
        dispatch(getFeaturedBlog())

    }, [dispatch])
    
    return (
        <>
            <Header />
            <Container className="blog__overview">
                <meta charSet="utf-8" />
                    <Helmet>
                    <meta name="description" content="Health related blog content" />
                    <title>Blog posts</title>
                    </Helmet>
                <Row>
                    <Col md={8}>
                        <img className='blog__overview__img' src='/assets/iflolog/thermometer-gda.jpg' />
                    </Col>
                    <Col md={2} sm={2} className='blog__overview__aside'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3>New</h3>
                            <h5>View all</h5>
                            <hr />
                        </div>
                        <div className='mt-4'>
                            <h4>Nov 09, 2022 </h4>
                            <p>The myth about antibiotics</p>
                        </div>
                        <div className='mt-4'>
                            <h4>Nov 09, 2022 </h4>
                            <p>The myth about antibiotics</p>
                        </div>
                    </Col>
                </Row>
                <div className="blog__overview__body">
                    <h3 className="m-0 p-0"><strong>Recent Posts</strong></h3>
                        <hr />
                    <div className="my-5">
                        {loading ? <LoadingMain /> :
                            error ? <Message variant='info'>{error}</Message> :
                            (
                                <Row>
                                    {blogs.map(blog => (
                                        <Col key={blog.id} sm={6} md={4} xl={3}>
                                            <Blog blog={blog}/>
                                        </Col>
                                    ))}  
                                </Row>
                            )
                    }               
                    </div>
                    <div>
                        <Image src='/assets/images/shop/ems-ad1.png' className='blog__overview__body__image' />
                    </div>                
                    
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default BlogListScreen
