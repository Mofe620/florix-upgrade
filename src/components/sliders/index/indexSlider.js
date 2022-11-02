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
  {id:1, into:"Welcome to africa's premium one-step pharma wholesale e-store",  value:"We provide pharmacies, hospitals, and other healthcare institutions an online wholesale market place for best quality, affordable, registered medicines, healthcare consumables and devices, all delivered to their facilities nationwide", image: '/assets/iflolog/amsa.jpg'},
  {id:2, into:"Welcome to africa's premium one-step pharma wholesale e-store",  value:"We provide pharmacies, hospitals, and other healthcare institutions an online wholesale market place for best quality, affordable, registered medicines, healthcare consumables and devices, all delivered to their facilities nationwide", image: "/assets/banners/landingpage1.jpg"},
  {id:3, into:"Welcome to africa's premium one-step pharma wholesale e-store",  value:"We provide pharmacies, hospitals, and other healthcare institutions an online wholesale market place for best quality, affordable, registered medicines, healthcare consumables and devices, all delivered to their facilities nationwide", image: "/assets/banners/index-slider1.jpg"},
  {id:4, into:"Welcome to africa's premium one-step pharma wholesale e-store",  value:"We provide pharmacies, hospitals, and other healthcare institutions an online wholesale market place for best quality, affordable, registered medicines, healthcare consumables and devices, all delivered to their facilities nationwide",  image: "/assets/banners/Storeslide3.png"},
  // {id:6, image: "/assets/banners/index-slider1.jpg"}
]

const IndexSlider = () => {
  return (
    <div className="swiper">
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: "5000"}}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
      <div className="swiper__slider">
        {data.map(datum =>(
            <SwiperSlide key={datum.id} >
              <div className="swiper__slider__container">
                <img src={datum.image} />
                <h2>{datum.into}</h2>
                <p>{datum.value}</p>
              </div>
            </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
};

export default IndexSlider