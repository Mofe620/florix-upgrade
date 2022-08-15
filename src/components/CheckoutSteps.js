import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4' >
            {/* <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link><p className="checkout__steps">Sign In</p></Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><p className="checkout__steps">Sign In</p></Nav.Link>
                    )}
            </Nav.Item> */}

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link><p className="checkout__steps">Shipping</p></Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><p className="checkout__steps">Shipping</p></Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link><p className="checkout__steps">Payment</p></Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><p className="checkout__steps">Payment</p></Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link><p className="checkout__steps">Order</p></Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><p className="checkout__steps">Order</p></Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
