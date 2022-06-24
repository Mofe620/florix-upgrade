import React, { useEffect, useState } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { getProductClass } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    {/* <h2><span>Therapeutic Category: <strong> {product.productClass}</strong></span></h2> */}
                        <div className="product__class__file__wrapper">
                           <Image className="product__class__file__wrapper__img" src={product.image} alt={product.name} fluid/>
                              {/* <Image className="post__img" src={product.image} alt={product.name} fluid/> */}
                        </div>
                        <div className='product__class__text'>
                            <h3 className="mb-0 fw-bold fs-2
                            ">{product.name}</h3>
                            <p as="h3" className="fw-bold"> &#8358; {product.price}</p>
                            <p>Strength: {product.strength}</p>
                           
                            <p className='analgesics__slider__content__button text-center'><Link to={`/product/${product.id}`}>Proceed</Link></p>
                        </div>
                </div>
            );
        });
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-sm-6 col-md-3'>
                        {list[i]}
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                    <div className='col-sm-6 col-md-6'>

                    </div>
                </div>
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
                            <Link className="drugstore__nav-link p-2 text-muted" to='/'>All</Link>
                            <Link className="drugstore__nav-link p-2 text-muted" to='/med/therapeutic_class/antibiotics'>Pain Killers</Link>
                            <Link className="drugstore__nav-link p-2 text-muted" to='/med/therapeutic_class/antimalaria'>Antimalaria</Link>
                            <Link className="drugstore__nav-link p-2 text-muted" to='/med/therapeutic_class/multivitamins'>Multivitamins</Link>
                        </nav>
                    </div>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            
            <div>
            <h1>{productClass}</h1>
                {getProductsByClass()}
                
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductClassScreen