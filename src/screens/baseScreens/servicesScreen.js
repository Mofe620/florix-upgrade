import React from 'react';
import {Container} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import FloatingAction from '../../components/FloatingAction';

const servicesScreen = () => {
  return (
    <Container className="content">
        <Helmet>
            <meta charSet="utf-8" />
            <title>flolog services</title>
        </Helmet>
        <div className="services">
            <h2 className="services__header my-5">Africa's Premium Healthcare E-marketplace and Logistics Solution</h2>
            <div className="services__tab">
                <div className="d-flex">
                <Link to="/products"><p className="services__tab__lead services__gradient3 me-3">WHOLESALE STORE</p></Link>
                  <Link to="/products"><i className="far fa-arrow-alt-circle-right services__tab__icon"></i></Link>
                </div>
                <div className="d-flex">
                <Link to="/products"><p className="services__tab__lead services__gradient2 me-3">RARE DRUGS PORTAL</p></Link>
                  <Link to="/products"><i className="far fa-arrow-alt-circle-right services__tab__icon"></i></Link>
                </div>
                <div className="d-flex">
                <Link to="/products"><p className="services__tab__lead services__gradient1 me-3">LOGISTICS SERVICE</p></Link>
                  <Link to="/products"><i className="far fa-arrow-alt-circle-right services__tab__icon"></i></Link>
                </div>
            </div>
        </div>
        <FloatingAction />
    </Container>
  )
};

export default servicesScreen;
