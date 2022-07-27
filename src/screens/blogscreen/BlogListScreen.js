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
       
        <Container className="blog__overview content">
            <meta charSet="utf-8" />
                <Helmet>
                <meta name="description" content="Health related blog content" />
                <title>Blog posts</title>
                </Helmet>
            <Row>
                <Col md={10}>
                    <BlogCarousel />
                </Col>
                <Col md={2} sm={2} className='blog__overview__aside'>
                    <div className=' blog__overview__categories ms-4'>
                        <h2>Categories</h2>
                        <p><Link to="/blog/category/diseases">Deseases</Link></p>
                        <p><Link to="/blog/category/pharmaceuticals">Pharmaceuticals</Link></p>
                        <p><Link to="/blog/category/medical_equipment">Medical Equipment</Link></p>
                        <p><Link to="/blog/category/lifestyle">Lifestyle</Link></p>
                        <p><Link to="/blog/category/health_news">Health News</Link></p>
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
