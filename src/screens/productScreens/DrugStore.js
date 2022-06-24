import React from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet";
import {Col, Container, Row} from "react-bootstrap"

const DrugStore = () => {
    return (
        <Container className="drugstore content">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>Product categories</title>
            </Helmet>
             
            <div>
                <Row>
                    <Col md={4}>

                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default DrugStore
