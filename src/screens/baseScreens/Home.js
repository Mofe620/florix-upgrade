import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdVerified } from "react-icons/md"
import ProductCarousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import IndexSlider from '../../components/sliders/index/indexSlider'
import Partnership from '../../components/sliders/shop/partnership'


  const data = [
    {id: 1, img: '/assets/iflolog/amsi.jpg', heading: 'men care', text: ''},
    {id: 2, img: '/assets/iflolog/ams.jpg', heading: 'women care', text: ''},
    {id: 3, img: '/assets/iflolog/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file.jpg', heading: 'hypertension care', text: ''},
    {id: 4, img: '/assets/iflolog/beautiful-pregnant-belly.jpg', heading: 'diabetics care', text: ''},
    {id: 5, img: '/assets/iflolog/boy-doing-occupational-therapy-session-with-psychologist.jpg', heading: 'antenatal care', text: ''},
    {id: 6, img: '/assets/iflolog/brain-study-background-mental-health-care-medical-technology.jpg', heading: 'children care', text: ''},
    {id: 7, img: '/assets/iflolog/brain-writes-with-white-chalk-is-hand-draw-concept.jpg', heading: 'asthma', text: ''},
    {id: 8, img: '/assets/iflolog/practice.jpg', heading: 'eye care', text: ''},
    {id: 9, img: '/assets/iflolog/practice.jpg', heading: 'eye care', text: ''},
  ]


const footerData = [
  {id: 1, img: '/assets/iflolog/pharmacy.png', subscribers: '100+', category: 'Pharmacies'},
  {id: 2, img: '/assets/iflolog/hospital.png', subscribers: '50+', category: 'Hospitals'},
  {id: 3, img: '/assets/iflolog/patient.png', subscribers: '50, 000+', category: 'Patients'},
  {id: 4, img: '/assets/iflolog/professional.png', subscribers: '100+', category: 'Healthcare providers'},
]

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <div className='home__slider'>
          {/* <ProductCarousel /> */}
            <IndexSlider />
        </div>
        <div className='home__layer-one'>
          <Row>
            <Col sm={12} md={6} lg={6} >
              <div>
                <h2>Pharmacists, Physicians, other Healthcare Providers and Institutions?</h2>
                <h3><Link to='register' className='home__layer-one__link'>Sign Up</Link></h3>
                <p>Already have account? <Link to='login'>Login</Link></p>
                <img src='/assets/iflolog/members.png' />
              </div>
            </Col>
            <Col>
              <div  className='home__layer-one__aside'>
                <div className='text-center'>
                  <h2>Stay on Time</h2>
                  <p>Make wholesale procurement with ease</p>
                  <p>Get fast and efficient logistics</p>
                </div>
              </div>
              
            </Col>
          </Row>
        </div>
        <div className='home__layer-one__extended'>
          <Row>
              <Col xs={12} md={4}>
                <div className='home__layer-one__extended__file'>
                  <img src='/assets/iflolog/symptom.png'/>
                </div>
              </Col>
              <Col>
                <div className='home__layer-one__extended__wrapper'>
                  <h3>Patient?</h3>
                  <p>Assess our 24-hour</p>
                  <h2>Emergency medicines service</h2>
                  <p><Link to='/emergency/request' className='fs-1'>Click Here</Link></p>
                </div>
              </Col>
          </Row>
        </div>
        <div className='home__layer-two'>
          <Row>
            <Col>
              <div>
                <h2>We guarantee you the CAPS of Healthcare</h2>
                <p><MdVerified className='home__layer-two__icon'/>Convenience</p>
                <p><MdVerified className='home__layer-two__icon'/> Accessibilty</p>
                <p><MdVerified className='home__layer-two__icon'/> Privacy</p>
                <p><MdVerified className='home__layer-two__icon'/> Speed</p>
              </div>
            </Col>
            <Col>
              <img src='/assets/iflolog/logistics.png' className='' />
            </Col>
          </Row>
        </div>
        <div className='home__subscribe'>
          <h5>Looking for quality Healthcare?</h5>
          <p>Subscribe to an offer that perfectly suits your Healthcare needs</p>
        </div>
        <div className='home__layer-three'>
          <Row>
              {data.map((product)=>(
                <Col key={product.id} className='d-flex justify-content-center mx-auto' xs={12} sm={6} md={4} lg={4} >
                  <div className='home__layer-three__wrapper'>
                    <img src={product.img} />
                    <h3>{product.heading}</h3>
                    <p>Starting from NGN 9,999 30-day subscription</p>
                    <p className='home__layer-three__wrapper__btn'><Link to='#'>Get now</Link></p>
                  </div>
                </Col>
              ))}
          
          </Row>
        </div>
        <div className='home__layer-four'>
          <h4>Health management  organisation</h4>
          <p>Sign Up to service your patient's prescription</p>
        </div>
        <div className='home__layer-five'>
          <div>
            <h5>Health at your fingertips</h5>
            <p>In 15 months of operations, we have become a trusted Healthcare to</p>
          </div>
          <div  className='home__layer-five__footer-icons'>
            <Row>
              {footerData.map(item=>(
                <Col xs={6} md={3}>
                  <div>
                    <img src={item.img} /> 
                    <h3>{item.subscribers}</h3>
                    <p>{item.category}</p>
                  </div>
                </Col>
              ))}
            </Row>
            
          </div>
        </div>
        <Partnership />
        <Footer />
    </div>
  )
}

export default Home