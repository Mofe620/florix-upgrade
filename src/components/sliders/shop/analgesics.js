import React, { useEffect } from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Button, Image} from 'react-bootstrap'

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductClass } from '../../../redux/actions/productActions';
import { listProducts } from '../../../redux/actions/productActions';

const data = [
  {id:1, name:"Paracetamol", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"},
  {id:2, name:"Ibuprofen", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"},
  {id:3, name:"Diclofenac Potassium", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"},
  {id:4, name:"Ketoprofen", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"},
  {id:6, name:"Celecoxib", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"},
  {id:7, name:"Naproxen", brand:"emzor", preamble: "lorem ipsum lorem ipsum", price: "5000", image: "/assets/images/drugs/covonia.jpg"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Analgesics = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products,} = productList
  // const data = products

  useEffect(() => {
      dispatch(listProducts())
   
  }, [])
  return (
    <div>
      <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="analgesics"
      >
        {data.map(drug =>(
          <div className="analgesics__slider">
            <SwiperSlide key={drug.id} className="analgesics__slider__container p-4">
              <div className='analgesics__slider__content'>
                  <Image className='analgesics__slider__content__image' src={drug.image} />
                <div className='analgesics__slider__content__text px-4'>
                  <p className='analgesics__slider__content__name'>{drug.name}</p>
                  <p className='analgesics__slider__content__preamble'>{drug.strength}</p>
                  <div className='d-flex justify-content-between'>
                    <p className='analgesics__slider__content__price'>#{drug.price}</p>
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

export default Analgesics