import React, { useEffect } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreSlider from '../../components/sliders/shop/storeSlider'
import Analgesics from '../../components/sliders/shop/analgesics'
import Multivitamins from '../../components/sliders/shop/multivitamins'
import Antibiotics from '../../components/sliders/shop/antibiotics'
import TrackRecord from '../../components/TrackRecord'
import Header from '../../components/global/Header'
import Footer from '../../components/Footer'
import { getProductClass } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import SearchProduct from '../../components/SearchProduct'

const Shop = () =>{

    return(
        <>
            <div className='shop mt-5'>
                <Header />
                <div className="shop__bar px-3 d-md-flex flex-row w-100">
                    <div className="">
                        <SearchProduct />
                        {/* <Form className='shop__bar__form'>
                            <Form.Group className="shop__bar___form__group">
                                <Form.Control className="shop__bar__form__control" type='text' placeholder='search' />
                            </Form.Group>
                        </Form> */}
                    </div>
                    {/* <div className='ms-auto mt-3'>
                        <p className='shop__bar__button'><Link to='/test/prescription'>Upload Prescription</Link></p>
                    </div> */}
                </div>
                <div className="px-3 my-3">
                <StoreSlider />
                </div>
                <div className='shop__introline d-flex'>
                    <h2 className='shop__introline__header'>Painkillers</h2>
                    <p className='shop__introline__allbtn ms-auto pt-ms-4'><Link to="/med/therapeutic_class/analgesics" >view all</Link></p>
                </div>
                <div className='m-5'>
                    <Analgesics />
                </div>
                <div className='shop__introline d-flex'>
                    <h2 className='shop__introline__header'>Antibiotics</h2>
                    <p className='shop__introline__allbtn ms-auto pt-ms-4'><Link to="/med/therapeutic_class/antibiotics" >view all</Link></p>
                </div>
                <div className='m-5'>
                    <Antibiotics />
                </div>
                <div className='shop__pagedivider d-flex flex-row  justify-content-between my-5 px-5' style={{ backgroundImage: "url('/assets/banners/Logisticsbanner.png')"}}>
                    <div > 
                        <Image src='/assets/images/logoandname.png' className='shop__pagedivider__icon'/>
                        <h3><b>logistics service</b></h3>
                    </div>
                    <div className='shop__pagedivider__text'> 
                        <p>Get your medications delivered to you with just a click of a button</p>
                    </div>
                    <div className='shop__pagedivider__button text-center align-items-center justify-content-center shadow'> 
                        <Link to="/">Learn More</Link>
                    </div>
                </div>
            
                <div className='shop__introline d-flex'>
                    <h2 className='shop__introline__header'>Multivitamins</h2>
                    <p className='shop__introline__allbtn ms-auto pt-md-4'><Link to="/med/therapeutic_class/multivitamins" >view all</Link></p>
                </div>
                <div className='px-5 py-4'>
                    <Multivitamins />
                </div>
                <div 
                    className='shop__pagedivider2 d-flex flex-row justify-content-between align-items-center p-5'
                    style={{ backgroundImage: "url('/assets/banners/Logisticsbanner.png')"}}
                    >
                    <h2 className='shop__pagedivider2__header'></h2>
                    <div>
                        <p className='shop__pagedivider2__text'>We've carefully selected topics to bring answers to all of your health-related inquiries.</p>
                        <p className='shop__pagedivider2__button shadow'><Link to='/blog/posts'>Click to Visit Blog</Link></p>
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

export default Shop