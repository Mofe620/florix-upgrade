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
  {id:1, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"},
  {id:2, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"},
  {id:3, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"},
  {id:4, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"},
  {id:6, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"},
  {id:7, name:"PCM", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.JPG"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Multivitamins = () => {
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            //when window with is >= 640
            360: {
              width: 360,
              slidesPerView: 2,
            },
              //when window with is >= 768
            768: {
              width: 768,
              slidesPerView: 3,
            }
          }}
          // autoplay={{delay: "5000"}}
          // navigation
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="multivitamins"
      >
        {data.map(drug =>(
         <div className="multivitamins__slider">
         <SwiperSlide key={drug.id} className="multivitamins__slider__container p-4">
           <div className='multivitamins__slider__content'>
               <Image className='multivitamins__slider__content__image' src={drug.image} />
             <div className='multivitamins__slider__content__text px-4'>
               <p className='multivitamins__slider__content__name'>{drug.name}</p>
               <p className='multivitamins__slider__content__preamble'>{drug.preamble}</p>
               <p className='multivitamins__slider__content__price'>#{drug.price}</p>
             </div>
           </div>
         
         </SwiperSlide>
       </div>
        ))}

      </Swiper>
    </div>
  );
};

export default Multivitamins