import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
    <>
        <Link to={`/product/${product.id}`}>
            <div  className='product__class__container'> 
                <div className="product__class__file__wrapper">
                    <Image className="product__class__file__wrapper__img" src={product.image} fluid/> 
                </div>

                {/*Adding ${process.env.REACT_APP_API_URL} to image src doesn't work in production 
                <Image className="product__img shadow-sm" src={`${process.env.REACT_APP_API_URL}${product.image}`} fluid/> 
                */}
            
                <div className='product__class__text'>
                    <h2>{product.name}</h2>
                    <p> &#8358; {product.price}</p>
                    <p>Dosage form: {product.dosageForm}</p>
                    <p>Strength: {product.strength}</p>
                    {/*
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                    */}
                </div>
            </div>
        </Link>
    </>
    )
}

export default Product
