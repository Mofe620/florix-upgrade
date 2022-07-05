import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Partnership from './sliders/shop/partnership'
import Testimony from './sliders/shop/testimony'

const TrackRecord = () => {
  return (
    <div>
        <Container className='trackrecord__header my-5'>
            <h2 className='d-grid justify-content-center'>Track Record</h2>
            <Row className='trackrecord__wrapper container justify-content-between mt-5'>
                <Col>
                    <h2>50+</h2>
                    <p>Pharmacies</p>
                </Col>
                <Col>
                    <h2>20+</h2>
                    <p>Hospitals and Clinics</p>
                </Col>
                <Col>
                    <h2>1000+</h2>
                    <p>Healthcare Professionals</p>
                </Col>
            </Row>
        </Container>

        <div className='pt-5'>
            <h2 className='d-grid justify-content-center fw-bold fs-1'>Partner brands</h2>
            <Partnership />
        </div>
        
        <div className='trackrecord__introline mt-5'>
            <h2 className='trackrecord__introline__header text-center fw-bold'>What our clients are saying</h2>
           
        </div>
        <div className='my-4'>
            {/* <p className='trackrecord__view'><Link to="/">view all</Link></p> */}
            <Testimony />
        </div>
    </div>
  )
}

export default TrackRecord