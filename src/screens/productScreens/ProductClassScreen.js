import React, { useEffect, useState } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { getProductClass } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import StoreSpinner from '../../components/spinners/StoreSpinner';

const ProductClassScreen = ({match}) => {
    const [productClass, setProductClass] = useState('');
    const productClassStore = useSelector(state => state.productClass)

    const { error, loading, products } = productClassStore
    console.log(products)
    const dispatch = useDispatch()
  
    useEffect(() => {
        const id = match.params.id
        const itemClass = match.params.id
        setProductClass(itemClass);
        dispatch(getProductClass(id))
     
    }, [])
 
    const getProductsByClass = () => {
        let list = [];
        let result = [];

        products.map( (product)=> {
            console.log(product)
            return list.push(
                <div className='product__class__container'>
                    <Link to={`/product/${product.id}`}>
                    {/* <h2><span>Therapeutic Category: <strong> {product.productClass}</strong></span></h2> */}
                        <div className="product__class__file__wrapper">
                           <Image className="product__class__file__wrapper__img" src={product.image} alt={product.name} fluid/>
                              {/* <Image className="post__img" src={product.image} alt={product.name} fluid/> */}
                              {/* {`${process.env.REACT_APP_API_URL}${product.image}`} */}
                        </div>
                        <div className='product__class__text'>
                            <h2>{product.name}</h2>
                            <p> &#8358; {product.price}</p>
                            <p>Dosage form: {product.dosageForm}</p>
                            <p>Strength: {product.strength}</p>
                            {/* <h3>Strength: {product.strength}</h3> */}
                           
                            {/* <p className='analgesics__slider__content__button text-center'><Link to={`/product/${product.id}`}><img src="/assets/icons/Store.png" alt="" style={{height:"2rem", marginRight:"20px"}}/>Add to cart</Link></p> */}
                        </div>
                    </Link>
                </div>
            );
        });
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <Row key={i} className='mb-2'>
                    <Col className='' xs={6} md={4} lg={4} xl={3}>
                        {list[i]}
                    </Col>
                    <Col className='' xs={6} md={4} lg={4} xl={3}>
                        {list[i+1] ? list[i+1] : null}
                    </Col>
                    <Col className='' xs={6} md={4} lg={4} xl={3}>

                    </Col>
                </Row>
            )
        }
        return result;
    };

  return (
    <>
        <Header />
        <div className='container'> 
            <Row>
                <Col md={8}>
                    <div className="nav-scroller py-1 mb-2" style={{marginTop:'60px'}}>
                        <nav className="nav d-flex justify-content-between">
                            <a className="drugstore__nav-link p-2 text-muted" href='/products'>All</a>
                            <a className="drugstore__nav-link p-2 text-muted" href='/med/therapeutic_class/analgesics'>Pain Killers</a>
                            <a className="drugstore__nav-link p-2 text-muted" href='/med/therapeutic_class/antibiotics'>Antibiotics</a>
                            <a className="drugstore__nav-link p-2 text-muted" href="/med/therapeutic_class/multivitamins">Multivitamins</a>
                        </nav>
                    </div>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            
            <div>
                <h1 className='fs-1 fw-bold'>{productClass.toUpperCase()}</h1>
                <div>
                   {loading? <StoreSpinner /> : getProductsByClass()}
                </div>
                
                
                
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductClassScreen