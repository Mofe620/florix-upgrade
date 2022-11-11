import React from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import styles from '../../../customstyles/home.module.css'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
    {id: 1, img: '/assets/iflolog/amsi.jpg', heading: 'men care', text: ''},
    {id: 2, img: '/assets/iflolog/ams.jpg', heading: 'women care', text: ''},
    {id: 3, img: '/assets/iflolog/nurse-measuring-patient-blood-pressure.jpg', heading: 'hypertension care', text: ''},
    {id: 4, img: '/assets/iflolog/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file.jpg', heading: 'diabetics care', text: ''},
    {id: 5, img: '/assets/iflolog/beautiful-pregnant-belly.jpg', heading: 'antenatal care', text: ''},
    {id: 6, img: '/assets/iflolog/boy-doing-occupational-therapy-session-with-psychologist.jpg', heading: 'children care', text: ''},
    {id: 7, img: '/assets/iflolog/unsplash-asthma.jfif', heading: 'asthma', text: ''},
    {id: 8, img: '/assets/iflolog/brain-writes-with-white-chalk-is-hand-draw-concept.jpg', heading: 'eye care', text: ''},
    {id: 9, img: '/assets/iflolog/practice.jpg', heading: 'ulcer care', text: ''}
]

const PackageSlider = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{delay: "5000"}}
          pagination={{ clickable: true }}
      >
      <div className={styles.swiper}>
        {data.map(product =>(
            <SwiperSlide key={product.id} >
              <div className={styles.product}>
                    <img src={product.img} alt={product.heading} />
                    <div className={styles.product_info}>
                      <h3>{product.heading}</h3>
                      <p>Starting from NGN 9,999</p>
                      <p>30-day subscription</p>
                      <Link to='#'><button>Get Now</button></Link>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
};

export default PackageSlider