import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Image} from 'react-bootstrap'

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"PCM", brand:"emzor", image: "/assets/images/Main.png"},
  {id:2, name:"PCM", brand:"emzor", image: "/assets/images/Main.png"},
  {id:3, name:"PCM", brand:"emzor", image: "/assets/images/Main.png"},
  {id:4, name:"PCM", brand:"emzor", image: "/assets/images/Main.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/Main.png"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const StoreSlider = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: "10000"}}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper"
      >
        {data.map(drug =>(
          <div className="swiper__slider">
            <SwiperSlide key={drug.id} className="swiper__slider__container p-4">
            <div><Image src={drug.image} /></div>
            </SwiperSlide>
          </div>
        ))}

      </Swiper>
    </div>
  );
};

export default StoreSlider