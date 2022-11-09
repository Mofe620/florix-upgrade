import React from 'react'
import { Navigation, Pagination,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import styles from '../../../customstyles/home.module.css';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"", brand:"", image: "/assets/images/partners2/BMC.png"},
  {id:3, name:"", brand:"", image: "/assets/images/partners2/fidson.png"},
  {id:6, name:"", brand:"", image: "/assets/images/partners2/lily.png"},
  {id:6, name:"", brand:"", image: "/assets/images/partners2/dreamlife.png"},
  {id:6, name:"", brand:"", image: "/assets/images/partners2/unique.png"}
]


const Partnership = () => {
  return (
    <div className={styles.partners_swiper}>
      <h6>Partner Brands</h6>
    <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 1
            },
            //when window with is >= 768
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
              slidesPerGroup: 1
            }
          }}
          autoplay={{delay: "5000"}}
      >
        {data.map(partner =>(
          <SwiperSlide key={partner.id}>
            <div><img src={partner.image} alt=''/></div>
          </SwiperSlide>
        ))}

    </Swiper>
    </div>
  );
};

export default Partnership