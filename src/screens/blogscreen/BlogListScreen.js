import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet";
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import BlogCarousel from '../../components/blog/BlogCarousel'
import Blog from '../../components/blog/Blog'
import { listBlogs } from '../../redux/actions/blogActions'
import { getFeaturedBlog } from '../../redux/actions/blogActions'
import { Link } from 'react-router-dom'


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
        <Container className="content">
             <meta charSet="utf-8" />
                <Helmet>
                <meta name="description" content="Health related blog content" />
                <title>Blog posts</title>
                </Helmet>
            <BlogCarousel />
            <div style={{marginTop:"20px"}}>
                <div className="post">
                    <h3 className="m-0 p-0"><strong>Latest Posts</strong></h3>
                    <hr />
                    <Row>
                            {blogs.map(blog => (
                                <Col key={blog.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                                    <Blog blog={blog} />
                                </Col>
                            ))}  
                    </Row>
                </div>
           
           
            </div>
        </Container>
    )
}

export default BlogListScreen
