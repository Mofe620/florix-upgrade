import React, { useState, useEffect } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import {useLocation } from 'react-router-dom'
import {Helmet} from "react-helmet";
import { useDispatch, useSelector, connect} from 'react-redux'
import { Row, Col, Container, Modal} from 'react-bootstrap'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Paginate from '../../components/Paginate'
import ProductCarousel from '../../components/Carousel'
import { listProducts } from '../../redux/actions/productActions'
import SearchProduct from '../../components/SearchProduct'
import StoreSpinner from '../../components/spinners/StoreSpinner';


function HomeScreen({history, isAuthenticated}) {
    

    const location = useLocation()
    const [lgShow, setLgShow] = useState(false);

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    const keyword = history.location.search
    useEffect(() => {
        if (!isAuthenticated) {
            history.push({
                pathname: "/login",
                state: {
                    from: location
                }
            })
        } else{
            dispatch(listProducts(keyword))
        }  
        

    }, [dispatch, keyword])

    return (
        <div style={{marginTop:"50px"}}>
            <Header />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Africa's Healthcare No. 1 Wholesale E-marketplace and Logistics Solution" />
                <title>All products</title>
            </Helmet>
            <Container className="product" >
                <div className='py-4'>
                    <SearchProduct />
                </div>
                <div className='mb-4'>
                    <ProductCarousel />
                </div>
            {loading ? <StoreSpinner />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product.id} xs={6} md={4} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
            
            </Container>
        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Body>
               <SearchProduct />
            </Modal.Body>
        </Modal>
        <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, {listProducts }) (HomeScreen)
