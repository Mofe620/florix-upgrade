import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Carousel, Image} from 'react-bootstrap'

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"Dr. Brainmoh", testimony:"They deliver best quality pharmaceuticals, nutraceuticals and medical equipment at the best price"},
  {id:2, name:"Sheila", testimony:"Efficient and reliable"},
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Testimony= () => {
  return (
    <div className='testimony'>
      <div className='testimony__wrapper'></div>
        <Carousel controls={false}>
        <Carousel.Item className='testimony__wrapper__carousel'>
        <div>
            <p>Logistics, pharmaceutical supplies</p>
            <h3>Aiyanyor Smart Omorodion Moses</h3>
            <h4>(Wellsmart Pharmacy)</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item className='testimony__wrapper__carousel'>
          <div>
            <p>Efficient and reliable</p>
            <h3>Sheila</h3>
            <h4>(Dreamlife Pharmacy)</h4>
          </div>
        </Carousel.Item>
        
        <Carousel.Item className='testimony__wrapper__carousel'>
        <div>
            <p>Jos University Teaching Hospital</p>
            <h3>Dr. Joseph Igbanugo Sunday</h3>
            <h4>(Prompt response or supply)</h4>
          </div>
        </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Testimony
