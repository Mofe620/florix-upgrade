import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Blog = ({blog}) => {
    return (
        <div className="blog__post">
            <Link to={`/post/${blog.slug}`}><Image className="post__img" src={blog.image} alt={blog.title} fluid thumbnail/> </Link>
            <div className='post__txt'>
                <p className="post__txt__title">{blog.title}</p>
                <p className="blog__home__date">{blog.datePublished.substring(0, 10)}</p>
            </div>
        </div>
    )
}

export default Blog
