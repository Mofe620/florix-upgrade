import React from 'react';
import {Carousel} from 'react-bootstrap';

const ProductCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/banners/Slide001.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/banners/Slide2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/banners/Slide3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
  }

  export default ProductCarousel