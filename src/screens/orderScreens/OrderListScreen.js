import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listOrders } from '../../redux/actions/orderActions'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';

function OrderListScreen({ history }) {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])


    return (
        <Container className="content">
            <Header />
            <h1>Orders</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>USER</th>
                                    <th>DATE</th>
                                    <th>Total</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.user && order.user.name}</td>
                                        <td>{order.dateCreated.substring(0, 10)}</td>
                                        <td>&#8358;{order.totalPrice}</td>

                                        <td>{order.isPaid ? (
                                            order.datePaid.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>{order.isDelivered ? (
                                            order.dateDelivered.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>
                                            <LinkContainer to={`/order/${order.id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    Details
                                                </Button>
                                            </LinkContainer>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
            <Footer />
        </Container>
    )
}

export default OrderListScreen