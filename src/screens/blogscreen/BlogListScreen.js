import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
            <BlogCarousel />
            <div style={{marginTop:"20px"}}>
                <div className="post">
                    <h3 className="m-0 p-0"><strong>Latest Posts</strong></h3>
                    <hr />
                    <Row>
                        <Col md={8}>
                            {blogs.map(blog => (
                                <Col key={blog.id} sm={12} md={6} lg={4} xl={3}>
                                    <Blog blog={blog} />
                                </Col>
                            ))}  
                        </Col>
                        <Col md={4}>
                            <div>
                                {/*
                                <Row>
                                    <Col md={4}><Image className="post__img" src="/assets/blog/post2.jpg" alt="" fluid/></Col>
                                    <Col md={8}>
                                        <div>
                                            <p className="post__txt__title">University Create New Epidermiological Model to Study COVID-19</p>
                                            <p>Dec 27th - 5m</p>
                                        </div>
                                        
                                    </Col>
                                </Row>
                                */}
                            </div>
                            <div><h2>Blog Categories</h2></div>
                            <Row>
                                <Col lg={4}> <h2><Link to="/blog/category/medications">Medications</Link></h2> </Col>
                                <Col lg={4}> <h2><Link to="/blog/category/diseases">Diseases</Link></h2> </Col>
                                <Col lg={4}> <h2><Link to="/blog/category/medical-equipment">Equipments</Link></h2> </Col>
                            </Row>
                           
                        </Col>
                    </Row>
                </div>
           
           
            </div>
        </Container>
    )
}

export default BlogListScreen
