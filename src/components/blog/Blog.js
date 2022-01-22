import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div className="blog__post">
            <Link to={`/post/${blog.slug}`}>
                <Image className="post__img" src={blog.image} alt={blog.title} fluid/>
                <div className='post__txt'>
                    <p className="post__txt__title">{blog.title}</p>
                    <p>{blog.datePublished.substring(0, 10)}</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog
