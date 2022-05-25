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
  {id:1, name:"Dr. Brainmoh", brand:"They deliver high quality pharmaceuticals and medical equipment at affordable prices", image: "/assets/images/nurse.jpg"},
  {id:2, name:"Dr. Brainmoh", brand:"They deliver high quality pharmaceuticals and medical equipment at affordable prices", image: "/assets/images/nurse.jpg"},
  {id:3, name:"Dr. Brainmoh", brand:"They deliver high quality pharmaceuticals and medical equipment at affordable prices", image: "/assets/images/nurse.jpg"},
  {id:4, name:"Dr. Brainmoh", brand:"They deliver high quality pharmaceuticals and medical equipment at affordable prices", image: "/assets/images/nurse.jpg"},
  {id:6, name:"Dr. Brainmoh", brand:"They deliver high quality pharmaceuticals and medical equipment at affordable prices", image: "/assets/images/nurse.jpg"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Testimony= () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{delay: "5000"}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="testimony"
      >
        {data.map(drug =>(
          <div className="testimony__slider">
            <SwiperSlide key={drug.id} className="testimony__slider__container d-flex justify-content-center p-4">
            <div className='testimony__slider__content d-flex justify-content-center align-items-center'>
              <div>
                <Image src={drug.image} className='testimony__slider__image' fluid/>
              </div>
                <div className=''>
                    <p>{drug.brand}</p>
                    <p>{drug.name}</p>
                    <p>{drug.name}</p>
                </div>
            </div>
            </SwiperSlide>
          </div>
        ))}

      </Swiper>
    </div>
  );
};

export default Testimony