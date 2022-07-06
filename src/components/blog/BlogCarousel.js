import React from 'react'
import { Carousel } from 'react-bootstrap'
const BlogCarousel = () => {
    return (
<Carousel controls={false} className='rbootstrap'>
        <Carousel.Item className='rbootstrap__carousel'>
          <img
            className="d-block rbootstrap__carousel__image"
            src="/assets/images/shop/savemore.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rbootstrap__carousel__image"
            src="/assets/images/shop/Storeslide2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rbootstrap__carousel__image"
            src="/assets/images/shop/Storeslide3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default BlogCarousel
