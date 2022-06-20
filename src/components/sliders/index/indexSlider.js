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
  {id:1, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Neutricicals and Medical Equipment at affordable price", image: "/assets/images/Main.png"},
  {id:2, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Neutricicals and Medical Equipment at affordable price", image: "/assets/images/Main.png"},
  {id:3, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Neutricicals and Medical Equipment at affordable price", image: "/assets/images/Main.png"},
  {id:4, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Neutricicals and Medical Equipment at affordable price", image: "/assets/images/Main.png"},
  {id:6, motto:'"All Inclusive Healthcare E-marketplace and Logistics Service"', value:"Get high quality Pharmaceuticals, Neutricicals and Medical Equipment at affordable price", image: "/assets/images/Main.png"}
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
            <div 
              style={{backgroundImage:`url('${datum.image}')`, backgroundRepeat:'no-repeat', backgroundPosition:'left center', height:'50rem'}}
              >
                {/* <Image src={drug.image} style={{height:'60rem'}}  fluid/> */}
                <div className='d-flex flex-column'>
                  <div className='swiper__slider__text ms-auto'>
                    <h2 className=''>{datum.motto}</h2>
                    <p className=''>{datum.value}</p>
                  </div>
                  {/* <div className='swiper__slider__button ms-auto'>
                    <Link>Sign In</Link>
                  </div> */}
                </div>
            </div>
            </SwiperSlide>
            
          </div>
        ))}

      </Swiper>
    </div>
  );
};

export default IndexSlider