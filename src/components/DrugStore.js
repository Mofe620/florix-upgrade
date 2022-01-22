import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DrugStore = () => {
    return (
        <Link to="">
        <Image className="post__img" src="" alt="" fluid/>
        <div className='post__txt'>
            <p className="post__txt__title">CEFIXIME</p>
            <p>ORAL SUSPENSION</p>
            <p>&#8358; 1750</p>
        </div>
    </Link>
    )
}

export default DrugStore
