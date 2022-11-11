import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Analgesics from '../../components/sliders/shop/analgesics'
import Multivitamins from '../../components/sliders/shop/multivitamins'
import Antibiotics from '../../components/sliders/shop/antibiotics'
import Header from '../../components/global/Header'
import Footer from '../../components/Footer'
import { connect} from 'react-redux'
import SearchProduct from '../../components/SearchProduct'
import ProductCarousel from '../../components/Carousel'

const Shop = ({isAuthenticated, history}) =>{

    const location = useLocation()

    if(!isAuthenticated){
    history.push({
        pathname: "/login",
        state: {
            from: location
        }
    })
    } 

    return(
        <>
            <div className='shop mt-5'>
                <Header />
                <div className="shop__bar px-3 d-md-flex flex-row w-100">
                    <div className="">
                        <SearchProduct />
                    </div>
                </div>
                <div className="px-3 my-3">
                <ProductCarousel />
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
                <div className='shop__introline d-flex'>
                    <h2 className='shop__introline__header'>Multivitamins</h2>
                    <p className='shop__introline__allbtn ms-auto pt-md-4'><Link to="/med/therapeutic_class/multivitamins" >view all</Link></p>
                </div>
                <div className='px-5 py-4'>
                    <Multivitamins />
                </div>
            </div>
        <Footer />
    </>   
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { }) (Shop)