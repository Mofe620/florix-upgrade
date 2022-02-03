import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Blog = ({post}) => {
    return (
        <div className="blog__post">
                <Image className="post__img" src={post.image} alt={post.title} fluid/>
                <div className='post__txt'>
                    <p className="post__txt__title">{post.title}</p>
                    <p>{post.datePublished.substring(0, 10)}</p>
                    <Link to={`/post/${post?.slug}`}><p>Read More</p> </Link>
                </div>
        </div>
    )
}

export default Blog
