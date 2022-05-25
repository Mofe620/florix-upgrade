import React from 'react'
import { Link } from 'react-router-dom'
import Partnership from './sliders/shop/partnership'
import Testimony from './sliders/shop/testimony'

const TrackRecord = () => {
  return (
    <div>
        <div className='trackrecord__header my-5'>
            <h2 className='d-grid justify-content-center'>Track Record</h2>
            <p className='d-grid justify-content-center'>50+ Pharmacies || 20+ Hospitals and Clinics || 1000+ Healthcare Professionals</p>
        </div>
        <div className='trackrecord__introline '>
            <h2 className='trackrecord__introline__header'>Partner brands</h2>
        </div>
        
        <div className='shadow'>
        <p className='trackrecord__view'><Link to="/drugstore">view all</Link></p>
            <Partnership />
        </div>
        
        <div className='trackrecord__introline mt-5'>
            <h2 className='trackrecord__introline__header'>What our clients are saying</h2>
           
        </div>
        <div>
            <p className='trackrecord__view'><Link to="/drugstore">view all</Link></p>
            <Testimony />
        </div>
    </div>
  )
}

export default TrackRecord