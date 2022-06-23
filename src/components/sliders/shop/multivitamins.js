import React, { useEffect } from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Image} from 'react-bootstrap'
import { getMultivitamins } from '../../../redux/actions/productActions';

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import { useDispatch, useSelector } from 'react-redux';

const data = [
  {id:1, name:"Hematogen Forte", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"},
  {id:2, name:"Astymin", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"},
  {id:3, name:"Astyfer", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"},
  {id:4, name:"Ideos", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"},
  {id:6, name:"Phatonic", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"},
  {id:7, name:"Lycofer", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/booster.jpg"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Multivitamins = () => {
  const dispatch = useDispatch()
  const listMultivitamins = useSelector(state => state.multivitamins)
  const { error, loading, products,} = listMultivitamins
  // const data = products

  useEffect(() => {
      dispatch(getMultivitamins())
   
  }, [dispatch])
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
          className="analgesics"
      >
        {products.map(drug =>(
         <div className="analgesics__slider">
         <SwiperSlide key={drug.id} className="analgesics__slider__container p-4">
           <div className='analgesics__slider__content'>
               <Image className='analgesics__slider__content__image' src={`${process.env.REACT_APP_API_URL}${drug.image}`} />
             <div className='analgesics__slider__content__text px-4'>
               <p className='analgesics__slider__content__name'>{drug.name}</p>
               <p className='analgesics__slider__content__label'>{drug.label}</p>
               <div className='d-flex justify-content-between'>
                  <p className='analgesics__slider__content__price'>&#8358; {drug.price}</p>
                  <p className='analgesics__slider__content__button'><a href='/'>Add to cart</a></p>
                </div>
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