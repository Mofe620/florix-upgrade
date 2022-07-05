import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
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
        <Button className="home__intro__start"><Link to="/login">Sign Up/Login</Link></Button>
    
        );
      
        const authLinks = () => (
            <p></p>
        );


  return (
    <> 
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
                            <p className='home__intro__par'>Get the best quality pharmaceuticals, Nutraceuticals and medical equipment at the best prices!</p>
                        </div>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </Col>
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
