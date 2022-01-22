import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <div className="">
            <Link to={`/product/${product.id}`}>
                <Image className="product__img shadow-sm" src={`${process.env.REACT_APP_API_URL}${product.image}`} fluid/>
            </Link>
            <div>
                <Link to={`/product/${product.id}`}><h3 className='product__name'>{product.name}</h3></Link>
                <p as="h3"> &#8358; {product.price}</p>
                <p>{product.dosageForm}</p>
                <p>{product.strength}</p>
                {/*
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </div>
                */}
            </div>
        
        </div>
    )
}

export default Product
