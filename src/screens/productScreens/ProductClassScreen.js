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
                <div className='product__class__container'>
                    {/* <h2><span>Therapeutic Category: <strong> {product.productClass}</strong></span></h2> */}
                        <div className="product__class__file__wrapper">
                           <Image className="product__class__file__wrapper__img" src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.name} fluid/>
                              {/* <Image className="post__img" src={product.image} alt={product.name} fluid/> */}
                        </div>
                        <div className='product__class__text'>
                            <h3 className="mb-0">{product.name}</h3>
                            <p as="h3" className=""> &#8358; {product.price}</p>
                            <p>Strength: {product.strength}</p>
                           
                            <Link to={`/product/${product.id}`} className="stretched-link"><Button className="">Proceed</Button></Link>
                        </div>
                </div>
            );
        });
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-sm-6 col-md-4'>
                        {list[i]}
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                    
                </div>
            )
        }
        return result;
    };

  return (
    <div>
        <h1>Therapeutic Category: {productClass}</h1>

        <div>
            {getProductsByClass()}
            
        </div>
    </div>
  )
}

export default ProductClassScreen