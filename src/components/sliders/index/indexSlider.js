import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Image} from 'react-bootstrap'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"PCM", brand:"emzor", image: "/assets/banners/Slide001.png"},
  {id:2, name:"PCM", brand:"emzor", image: "/assets/banners/Slide2.png"},
  {id:3, name:"PCM", brand:"emzor", image: "/assets/banners/Slide3.png"},
  {id:4, name:"PCM", brand:"emzor", image: "/assets/banners/Slide001.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/banners/Slide001.png"}
]

const IndexSlider = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={0}
          autoplay={{delay: "5000"}}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="index"
      >
        {data.map(drug =>(
          <div className="index__slider">
            <SwiperSlide key={drug.id} className="index__slider__container p-4">
            <div 
              style={{backgroundImage:`url('${drug.image}')`, height:'50vh'}}
              >
                <Image className='index__slider__image' src={data.image} />
                
            </div>
            </SwiperSlide>
          </div>
        ))}

      </Swiper>
    </div>
  );
};

export default IndexSlider