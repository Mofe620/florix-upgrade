import React from 'react'
import { Carousel } from 'react-bootstrap'
const BlogCarousel = () => {
    return (
        <Carousel fade>
        <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
            src="/assets/images/Image3.png"
            alt="First slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
            src="/assets/images/Image2.png"
            alt="First slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
            src="/assets/banners/Slide2.png"
            alt="First slide"
            fluid
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default BlogCarousel
