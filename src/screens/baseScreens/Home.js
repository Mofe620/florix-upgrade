import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Image} from 'react-bootstrap'
import { getFeaturedBlog } from '../../redux/actions/blogActions'



const Home = () => {

    const featuredBlog = useSelector(state => state.featuredBlog)
    const { blog } = featuredBlog
    const post = blog[0]

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeaturedBlog())

    }, [dispatch])

    return(
        <div className="home">
            <Container className='content'>
                <Row class="row">
                    <Col sm={12} xl={6}>
                        <div className="home__intro">
                            <h3 className='home__intro__header'>"Africa's No. 1 Healthcare Wholesale E-marketplace and Logistics Solution" </h3>
                            <p className='home__intro__par'>Get the best quality pharmaceuticals, nutriceucals and medical equipment at the best prices!</p>
                            <Button className="home__intro__start"><Link to="/register">Sign Up</Link></Button>
                        </div>
                    </Col>
                    <Col sm={12} xl={6} >
                        <Image className="home__main-img px-4" src="/assets/images/Main.png" fluid/>
                    </Col>
                </Row>
            </Container>
            
            <h1 style={{marginLeft:"4rem", fontWeight:"600"}}>Featured Blog Post</h1>
            <div className="home__featured-blog">
                <Link to={`/post/${post?.slug}`}>
                    <Image className="post__img" src={post?.image} alt={blog?.title} style={{height:"200px"}} fluid/>
                    <div className='post__txt'>
                        <p className="post__txt__title">{post?.title}</p>
                        <p>{post?.datePublished.substring(0, 10)}</p>
                    </div>
                </Link>
            </div>
          
            <div className='home__logistics'>
                <Row class="row">
                    <Col md={4} sm={12} className="my-4">
                        
                    </Col>
                    <Col md={4} sm={12} className="my-4">
                        <Image className="home__img mx-auto"  src="/assets/images/logistic_image.png"  fluid/>
                    </Col>
                    <Col md={4} sm={12} className="my-4">
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home