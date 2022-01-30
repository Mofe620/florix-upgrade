import React from 'react'
import {Helmet} from "react-helmet";
import { Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'

const About = () => {
    return (
        <Container className="about content">
               <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
            </Helmet>
            <div>
                <h2 style={{fontWeight: "bold", fontSize:"2.5rem",marginBottom:"10", color:""}}>Who are we?</h2>
                <p className="about__paragraph" >
                    Flo-log, an initiative of Florix Healthcare LTD, is a tech-driven health care solution that seeks to change the narrative of the African healthcare sector in terms of product procurement and logistics. We offer an e-marketplace solution to healthcare professionals for the remote purchase of medicines and medical products from accredited distributors, with an accompanying dedicated healthcare logistics system.
                </p>
            </div>
            <Row className="about__goals">
                <Col md={4} className="about__goal">
                    <Card>
                        <Card.Header style={{fontSize:"1.6rem", backgroundColor:"#9DCAE5", color:"white"}}>Our Vision</Card.Header>
                        <Card.Body>
                            <Card.Text>Healthcare for Africa</Card.Text>
                            <Card.Text>Healthcare for Africa</Card.Text>
                            <Card.Text>Healthcare for Africa</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="about__goal">
                    <Card>
                        <Card.Header style={{fontSize:"1.6rem", backgroundColor:"#9DCAE5", color:"white"}}>Our Mission</Card.Header>
                        <Card.Body>
                            <Card.Text>To provide every African with:</Card.Text>
                            <Card.Text>Prompt access to quality and affordable medicines</Card.Text>
                            <Card.Text>Quality healthcare</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="about__goal">
                        <Card.Header style={{fontSize:"1.6rem", backgroundColor:"#9DCAE5", color:"white"}}>Core Values</Card.Header>
                        <Card.Body>
                            <Card.Text>Trust</Card.Text>
                            <Card.Text>Innovation</Card.Text>
                            <Card.Text>Excellence</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        
            </Row>
            <div>
                <hr />
                <h2 style={{fontWeight: "bold", fontSize:"2.5rem", marginTop:"50px",marginBottom:"50px", color:""}}>Meet the Founders</h2>
            <Row className="about__team">
                <Col md={4} className="about__team-members">
                    <Row>
                        <Col md={4} lg={4}>
                            <Image className='about__team__img' src='/assets/images/Andrew.jpg' roundedCircle fluid />
                        </Col>
                        <Col md={8}>
                            <div className="mt-4">
                                <h3 style={{fontWeight:"bold"}}>Andrew Akhabue</h3>
                                <h4 style={{color:"red"}}>Managing Director</h4>
                                <hr />
                                <p>Andrew Aizenose Akhabue, a Pharmacist with a Doctor of Pharmacy degree from the University of Benin. Leadership enthusiast and Trainer, with core interests in healthcare innovation and education. He leads Florix Healthcare Limited as its Chief Executive Officer. Prior to his Florix journey, he was branch manager for a retail pharmacy chain based in Benin city.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className="about__team-members">
                    <Row>
                        <Col md={4} lg={4} >
                            <Image className='about__team__img' src='/assets/images/Joy.jpg' roundedCircle fluid />
                        </Col>
                        <Col md={8}>
                            <div className="mt-4">
                                <h3 style={{fontWeight:"bold"}}>Joy Chidinma Enwerem</h3>
                                <h4 style={{color:"red"}}>Human Resources, Chief of Strategy</h4>
                                <hr />
                                <p>
                                    Joy Chidimma Enwerem, Pharmacist, Content Editor, and Strategist, with interests in leading an innovative change in the Nigerian Healthcare space. She graduated from the University of Benin with a Doctor of Pharmacy degree. She currently is the Chief of Strategy and Human Resource at Florix Healthcare Limited.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className="about__team-members">
                    <Row>
                        <Col md={4} lg={4} className=''>
                            <Image className='about__team__img' src='/assets/images/Raphael.jpg' fluid />
                        </Col>
                        <Col md={8}>
                            <div className="mt-4">
                                <h3 style={{fontWeight:"bold"}}>Raphael Chimezie Odoh</h3>
                                <h4 style={{color:"red"}}>Chief Innovation Officer</h4>
                                <hr />
                                <p>Raphael Chiemezie Odoh, a Pharmacist, Creative Designer, and Publicist, with key interests in Sales and Marketing. He bagged his Doctor of Pharmacy degree from the University of Benin. He is currently the Chief Innovation Officer at Florix Healthcare Limited, owners of FLO-LOG.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
        </Container>
    )
}

export default About
