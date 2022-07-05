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
  {id:1, name:"Dr. Brainmoh", testimony:"They deliver best quality pharmaceuticals, nutraceuticals and medical equipment at the best price"},
  {id:2, name:"Sheila", testimony:"Efficient and reliable"},
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
                <div className='m-2 p-3'>
                    <p>{drug.testimony}</p>
                    {/* <p>{drug.testimony}</p> */}
             
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