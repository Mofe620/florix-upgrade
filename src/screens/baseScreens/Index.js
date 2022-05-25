import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import IndexSlider from '../../components/sliders/index/indexSlider'
import TrackRecord from '../../components/TrackRecord'

const HealthcareFuture = [
    {id: 1, area: "For Pharmacies", comment: "Get access to wholesale procurement from over 10,000 products"},
    {id: 2, area: "For Hospitals", comment: "Enjoy credit facility and routine stock refill services"},
    {id: 3, area: "For Medical Professionals", comment: "Easily make rare and specialist medicine requisitions"}
]

const Index = () => {
  return (
      <> 
      <Header />
        <div className='content'>
            <IndexSlider />
            <div className='index__services d-md-flex justify-content-center'>
                <div className='index__services__render m-5'>
                    <h3 className='index__services__render__header'>Save More</h3>
                    <ul className='index__services__render__list'>
                        <li>Affordable Price</li>
                        <li>Credit Facility</li>
                        <li>Safe Shipment/Delivery</li>
                    </ul> 
                </div >
                <div className='index__services__render m-5'>
                    <h3 className='index__services__render__header'>Get More Options</h3>
                    <ul className='index__services__render__list'>
                        <li>Source from over 10,000 products</li>
                        <li>Orphan/Rare Drug Request</li>
                    
                    </ul>
                </div>
                <div className='index__services__render m-5'>
                    <h3 className='index__services__render__header'>Stay On Time</h3>
                    <ul className='index__services__render__list'>
                        <li>Make wholesale procurements with ease</li>
                        <li>Fast and efficient logistics and delivery service </li>
                        <li>Safe Shipment/Delivery</li>
                    </ul>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <h2 className='index__services__intro'>The Future of Healthcare is Here!</h2>
            </div>

            <div className='index__healthcarefuture'>
                <Image />
                <div>
                    {HealthcareFuture.map(healthcare =>(
                        <div key={healthcare.id} className='index__healthcarefuture__wrapper'>
                            <div>
                                <h3 className='index__healthcarefuture__wrapper__header'>{healthcare.area}</h3>
                                <p className='index__healthcarefuture__wrapper__comment'>{healthcare.comment}</p>
                                <Link>Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <TrackRecord />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Index


