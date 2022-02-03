import React, { useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogCarousel from '../../components/blog/BlogCarousel';
import { getFeaturedBlog } from '../../redux/actions/blogActions'

const BlogHomeScreen = () => {

  const featuredBlog = useSelector(state => state.featuredBlog)
  const { blog } = featuredBlog
  const post = blog[0]

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getFeaturedBlog())

  }, [dispatch])
  return (
  <Container className="content">
    <meta charSet="utf-8" />
        <Helmet>
        <meta name="description" content="Health related blog content" />
        <title>Blog post categories</title>
         </Helmet>
    <BlogCarousel />
    <h2 className="blog__home__vap mt-5"><Link to="/blog/posts">All Posts </Link></h2>
      <div className="blog__home">
          <h2 className='blog__home__header'><strong>Categories: </strong></h2>
          <div className='blog__home__lead'>
              <p className='blog__home__lead__tab'><Link to="/blog/category/pharmaceuticals">Pharmaceuticals</Link></p>
              <p className='blog__home__lead__tab'><Link to="/blog/category/diseases">Diseases</Link></p>
          </div>
          <div className='blog__home__lead mt-2'>
              <p className='blog__home__lead__tab'><Link to="/blog/category/natural-medicine">Natural Medicine</Link></p>
              <p className='blog__home__lead__tab mx-4'><Link to="/blog/category/lifestyle">Lifestyle</Link></p>
          </div>
      <div className="blog__home__bgc px-5 pb-5">
        <h4 className="mt-5 pt-4"><strong>Popular Posts</strong></h4>
      <hr />
     
      <Row>
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
      </div>
      </div>
  </Container>

  )
};

export default BlogHomeScreen;
