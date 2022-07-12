import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import IndexSlider from '../../components/sliders/index/indexSlider'
import TrackRecord from '../../components/TrackRecord'
import { getProductClass } from '../../redux/actions/productActions'


const HealthcareFuture = [
    {id: 1, area: "For Pharmacies", image:"/assets/images/icons/File_000.png", comment: "Get access to wholesale procurement from over 10,000 products"},
    {id: 2, area: "For Hospitals", image:"/assets/images/icons/File_000.png", comment: "Enjoy credit facility and routine stock refill services"},
    {id: 3, area: "For Medical Professionals", image:"/assets/images/icons/File_000.png", comment: "Easily make rare and specialist medicine requisitions"}
]

const Index = ({isAuthenticated}) => {


    const guestLinks = () => (
        <>
            <Col sm={12} md={8}>
                <div className='index__services__intro__annex mt-4'>
                    <h2>Pharmacists, Physicians, other Healthcare Providers and Institutions?</h2>
                </div>
             </Col>
            <Col sm={12} md={4}>
                <div className='index__services__intro__annex'>          
                    <Button className="home__intro__start"><Link to="/register">Sign Up</Link></Button>
                    <p> Already have an account? <Link to='/login'>Login</Link></p>   
                </div>                        
            </Col>
        </>
    
        );
      
        const authLinks = () => (
            <p></p>
        );


  return (
    <> 
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>FLO-LOG&trade;</title>
        </Helmet>

        <Header />

        <div style={{marginTop:"5rem"}}>
        <Container className='content'>
                <Row class="row">
                    <Col sm={12} md={4}>
                        <Image className="home__main-img px-4" src="/assets/images/shop/index.png" fluid/>
                    </Col>
                    <Col sm={12} md={8}>
                        <div className="home__intro">
                            <h3 className='home__intro__header'>"Africa's Premium Healthcare E-marketplace and Logistics Solution" </h3>
                            <p className='home__intro__par'>
                                We provide Pharmacies, Hospitals and other healthcare institutions an online wholesale market for best quality, affordable 
                                registered medicines, healthcare consumables and devices delivered to their facility nationwide.
                            </p>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    {isAuthenticated ? authLinks() : guestLinks()}     
                </Row>
            </Container>
            <div className='mt-md-5'>
                <div className='index__services d-md-flex justify-content-center'>
                    <div className='index__services__render m-4 shadow'>
                        <h3 className='index__services__render__header'>Save More</h3>
                        <ul className='index__services__render__list'>
                            <li>Affordable Price</li>
                            <li>Credit Facility</li>
                            <li>Safe Shipment/Delivery</li>
                        </ul> 
                    </div >
                    <div className='index__services__render m-4 shadow'>
                        <h3 className='index__services__render__header'>Get More Options</h3>
                        <ul className='index__services__render__list'>
                            <li>Source from over 10,000 products</li>
                            <li>Orphan/Rare Drug Request</li>
                        
                        </ul>
                    </div>
                    <div className='index__services__render m-4 shadow'>
                        <h3 className='index__services__render__header'>Stay On Time</h3>
                        <ul className='index__services__render__list'>
                            <li>Make wholesale procurements with ease</li>
                            <li>Fast and efficient logistics and delivery service </li>
                        </ul>
                    </div>
                </div>
                <div className='index__services__emergency text-center'>
                    <Link to='/emergency/request'>
                        <h3><span>Patient?</span> Click this area to get access to our 24-hour</h3>
                        <p>Emergency Medicine Service</p>
                        <Image src='/assets/images/icons/emergency-icon.png' className='index__services__emergency__icon text-center' />
                    </Link>
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <h2 className='index__services__intro'>The Future of Healthcare is Here!</h2>
                </div>

                <div className='index__healthcarefuture shadow-sm'>
                    <Image />
                    <div>
                        {HealthcareFuture.map(healthcare =>(
                            <div key={healthcare.id} className='index__healthcarefuture__wrapper'>
                                <div className='d-flex'>
                                    <div>
                                        <Image src={healthcare.image} className='index__healthcarefuture__wrapper__image me-2'/>
                                    </div>
                                    <div>
                                        <div>
                                            <h3 className='index__healthcarefuture__wrapper__header'>{healthcare.area}</h3>
                                            <p className='index__healthcarefuture__wrapper__comment'>{healthcare.comment}</p>
                                            {/* <Link>Learn More</Link> */}
                                        </div>
                                    </div>
                                </div>
                               {/* <Row>
                                <Col sm={2}>
                                    <Image src={healthcare.image} style={{height:"10rem"}} className='m-2'/>
                                </Col>
                                <Col sm={10}>
                                    <div>
                                        <h3 className='index__healthcarefuture__wrapper__header'>{healthcare.area}</h3>
                                        <p className='index__healthcarefuture__wrapper__comment'>{healthcare.comment}</p>
                                        <Link>Learn More</Link>
                                    </div>
                                </Col>
                               </Row> */}
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <TrackRecord />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps)(Index);
