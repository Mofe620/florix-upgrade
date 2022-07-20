import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Col, Container, Image, Row} from 'react-bootstrap'

import 'swiper/swiper.min.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/modules/free-mode/free-mode.min.css
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

const data = [
  {id:1, name:"PCM", brand:"emzor", image: "/assets/images/partners2/BMC.png"},
  {id:3, name:"PCM", brand:"emzor", image: "/assets/images/partners2/fidson.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners2/lily.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners2/dreamlife.png"},
  {id:6, name:"PCM", brand:"emzor", image: "/assets/images/partners2/unique.png"}
]

// <SwiperSlide><Image src='assets/images/Image1.png' height={300}/></SwiperSlide>
//<SwiperSlide><Image src='assets/images/Image2.png' height={300}/></SwiperSlide>

const Partnership = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} md={3} xl={2}>
          <Image src='/assets/images/partners2/BMC.png'  className='partnership__brand__image'  style={{height:"200px"}} />
        </Col>
        <Col xs={4} md={3} xl={2}>
        <Image src='/assets/images/partners2/fidson.png' className='partnership__brand__image' style={{height:"200px"}}  />
        </Col>
        <Col xs={4} md={3} xl={2}>
          <Image src='/assets/images/partners2/lily.png' className='partnership__brand__image'  style={{height:"200px"}} />
        </Col>
        <Col xs={4} md={3} xl={2}>
        <Image src='/assets/images/partners2/unique.png' className='partnership__brand__image'  style={{height:"200px"}} />
        </Col>
        <Col xs={4} md={3} xl={2}>
        <Image src="/assets/images/partners2/dreamlife.png" className='partnership__brand__image' style={{height:"200px"}}/>
        </Col>
      </Row>
    


       {/*
      <div className='container d-sm-flex justify-content-between'>
        {data.map(brand=>(
          <div>
            <Image src={brand.image} style={{height:"200px"}} />
          </div>
        ))}
      </div>


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

      </Swiper> */}
    </Container>
  );
};

export default Partnership