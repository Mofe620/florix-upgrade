import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Image} from 'react-bootstrap'

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"PCM", brand:"emzor", image: "/assets/images/partners/BMC1.png"},
  {id:3, name:"PCM", brand:"emzor", image: "/assets/images/partners/Fidson.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners/Lily1.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners/Dream life.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners/Unique Pharma.png"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Partnership = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={10}
          breakpoints={{
            //when window with is >= 640
            360: {
              width: 360,
              slidesPerView: 3,
            },
              //when window with is >= 768
            768: {
              width: 768,
              slidesPerView: 2,
            }
          }}
          autoplay={{delay: "5000"}}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="partnership"
      >
        {data.map(drug =>(
          <div className="partnership__slider">
            <SwiperSlide key={drug.id} className="partnership__slider__container d-flex justify-content-center align-items-center">
            <div><Image src={drug.image} className='partnership__slider__image'/></div>
            </SwiperSlide>
          </div>
        ))}

      </Swiper>
    </div>
  );
};

export default Partnership