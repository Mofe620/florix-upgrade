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
             <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="drugstore__nav-link p-2 text-muted" to='/drugstore/med'>All</Link>
                    <Link className="drugstore__nav-link p-2 text-muted" to='/drugstore/analgesics'>Pain Killers</Link>
                    <Link className="drugstore__nav-link p-2 text-muted" to='/drugstore/antimalaria'>Antimalaria</Link>
                    <Link className="drugstore__nav-link p-2 text-muted" to='/drugstore/multivitamins'>Multivitamins</Link>
                   
                </nav>
            </div>
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
