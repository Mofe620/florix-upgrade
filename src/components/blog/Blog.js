import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Blog = ({blog}) => {
    return (
        <div className="blog__post m-2">
            <>
                <Image className="blog__post__img" src={blog.image} alt={blog.title} fluid/> 
                <div className='blog__post__txt'>
                    <h3 className='mb-3'>{blog.title}</h3> 
                    <Link>{blog.category} / {blog.datePublished.substring(0, 10)}</Link> 
                </div>
                <p className="blog__post__button"><Link to={`/post/${blog.slug}`}>Read More</Link></p>
            </>
        </div>
    )
}

export default Blog
