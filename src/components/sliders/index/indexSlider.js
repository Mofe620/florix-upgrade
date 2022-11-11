import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import styles from '../../../customstyles/home.module.css'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, into:"Welcome to Africa’s premium one-stop Pharma Wholesale e-store",  value:"We provide Pharmacies, Hospitals, and other Healthcare institutions an online wholesale market for best quality, affordable, registered medicines, healthcare consumables and devices, all delivered to their facilities nationwide.", image: '/assets/iflolog/amsa.jpg', color: '#2E83B5'},
  {id:2, into:"Nigeria’s foremost Emergency Medicines Service",  value:"Consult a Pharmacist and get your medications delivered to your doorstep anywhere, anytime, anyday.", image: "/assets/iflolog/two-african-american-pharmacist.jpg", color: '#B43672'},
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
      >
      <div className={styles.swiper}>
        {data.map(datum =>(
            <SwiperSlide key={datum.id} >
              <div className={styles.swiper_slide} style={{backgroundColor: datum.color}}>
                <img src={datum.image} alt="" />
                <div className={styles.swiper_text}>
                  <h1>{datum.into}</h1>
                  <p>{datum.value}</p>
                </div>
              </div>
            </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
};

export default IndexSlider