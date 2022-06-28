import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Button, Image} from 'react-bootstrap'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Nutraceuticals and Medical Equipment at affordable price", image: "/assets/banners/Storeslide1.png"},
  {id:2, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Nutraceuticals and Medical Equipment at affordable price", image: "/assets/banners/landingpage1.jpg"},
  // {id:3,  image: "/assets/banners/index-slider1.jpg"},
  {id:4, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Nutraceuticals and Medical Equipment at affordable price",  image: "/assets/banners/Storeslide3.png"},
  // {id:6, image: "/assets/banners/index-slider1.jpg"}
]

const IndexSlider = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: "5000"}}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper"
      >
        {data.map(datum =>(
          <div className="swiper__slider">
            <SwiperSlide key={datum.id} className="swiper__slider__container p-4">
            <div><Image src={datum.image} className="swiper__slider__index-image" style={{borderRadius:'20px', width:"100%"}} fluid/></div>
            </SwiperSlide>
            
          </div>
        ))}



      </Swiper>

      {/* <div 
              style={{backgroundImage:`url('${datum.image}')`, backgroundRepeat:'repeat', backgroundPosition:'left center', height:'100%', width:'auto'}}
              className="swiper__slider__wrapper p-4"
              >
                {/* <Image src={drug.image} style={{height:'60rem'}}  fluid/> */}
                {/* <div className='d-flex flex-column'>
                  <div className='swiper__slider__text ms-auto'>
                    <h2 className=''>{datum.motto}</h2>
                    <p className=''>{datum.value}</p>
                  </div>
                  <div className='swiper__slider__button ms-auto'>
                    <Link>Sign In</Link>
                  </div> 
                </div> 
            </div> */}
    </div>
  );
};

export default IndexSlider