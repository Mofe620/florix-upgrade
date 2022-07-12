import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { connect, useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Image} from 'react-bootstrap'
import { getFeaturedBlog } from '../../redux/actions/blogActions'
import FloatingAction from '../../components/FloatingAction';
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';



const Home = ({isAuthenticated}) => {

    const featuredBlog = useSelector(state => state.featuredBlog)
    const { blog } = featuredBlog
    const post = blog[0]

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeaturedBlog())

    }, [dispatch])

    const guestLinks = () => (
        <Button className="home__intro__start"><Link to="/login">Sign In</Link></Button>
    
        );
      
        const authLinks = () => (
            <p></p>
        );

    return(
        <div className="home">
            <Header />
               {/* <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Florix Healthcare</title>
            </Helmet> */}
            <Container className='content'>
                <Row class="row">
                    <Col sm={12} xl={6}>
                        <div className="home__intro">
                            <h3 className='home__intro__header'>"Africa's No. 1 Healthcare Wholesale E-marketplace and Logistics Solution" </h3>
                            <p className='home__intro__par'>Get the best quality pharmaceuticals, nutriceucals and medical equipment at the best prices!</p>
                            {isAuthenticated ? authLinks() : guestLinks()}
                        </div>
                    </Col>
                    <Col sm={12} xl={6} >
                        <Image className="home__main-img px-4" src="/assets/images/Main.png" fluid/>
                    </Col>
                </Row>
            </Container>
            
            <h1 style={{marginLeft:"4rem", fontWeight:"600"}}>Featured Blog Post</h1>
            <Row className="px-5">
                <Col xs={12} sm={8}>
                    <Row>
                        <Col xm={4} className=""> <Image className="blog__home__img" src={post?.image} alt={blog?.title}  fluid/></Col>
                            <Col xm={8}>
                                <div className=''>
                                    <p className="blog__home__title"><strong>{post?.title}</strong></p>
                                    <p className="blog__home__date">{post?.datePublished.substring(0, 10)}</p>
                                    <p><Link to={`/post/${post?.slug}`}>Read More</Link></p> 
                                </div>
                            </Col>
                    </Row>
                    </Col>

                    <Col xs={12} sm={4}>
        
                </Col>
            </Row>
          
            <div className='home__logistics'>
                <Row class="row">
                    <Col md={4} sm={12} className="my-4">
                        
                    </Col>
                    <Col md={4} sm={12} className="my-4">
                     {/*   <Image className="home__img mx-auto"  src="/assets/images/logistic_image.png"  fluid/> */}
                    </Col>
                    <Col md={4} sm={12} className="my-4">
                        
                    </Col>
                </Row>
            </div>
            <FloatingAction />
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps)(Home);