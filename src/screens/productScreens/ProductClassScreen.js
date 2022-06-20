import React, { useEffect, useState } from 'react'
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import { getProductClass } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
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
                <div>
                    <h2 className="blog__category__header"><span className="d-inline-block mb-2">Therapeutic Category: <strong> {product.productClass}</strong></span></h2>
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        
                        <div className="col p-4 d-flex flex-column position-static">
                           <Image className="post__img" src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.name} fluid/>
                            {/* <Image className="post__img" src={product.image} alt={product.name} fluid/> */}
                            <h3 className="mb-0">{product.name}</h3>
                            <p as="h3" className="product__price"> &#8358; {product.price}</p>
                            <p>Strength: {product.strength}</p>
                           
                            <Link to={`/product/${product.id}`} className="stretched-link"><Button className="blog__category__btn">Click</Button></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        </div>
                    </div>
                </div>
            );
        });
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }
        return result;
    };

  return (
    <div>
        <h1>{productClass}</h1>

        <div>
            {getProductsByClass()}
            
        </div>
    </div>
  )
}

export default ProductClassScreen