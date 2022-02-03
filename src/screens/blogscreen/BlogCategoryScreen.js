import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet";
import {Button, Container, Image} from 'react-bootstrap'
import { getBlogCategory } from '../../redux/actions/blogActions'


const BlogCategoryScreen = ({match}) => {
    const [currentCategory, setCurrentCategory] = useState('');

    const blogCategory = useSelector(state => state.blogCategory)
    const { error, loading, blogs } = blogCategory
    console.log(blogs)
    const dispatch = useDispatch()

    useEffect(() => {
        const id = match.params.id
        const category = match.params.id
        setCurrentCategory(category);
        dispatch(getBlogCategory(id))

    }, [])


    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blog => {
            return list.push(
                <div>
                    <h2 className="blog__category__header"><span className="d-inline-block mb-2">Blog Category: <strong> {blog.category}</strong></span></h2>
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        
                        <div className="col p-4 d-flex flex-column position-static">
                           {/* <Image className="post__img" src={`${process.env.REACT_APP_API_URL}${blog.image}`} alt={blog.title} fluid/> */}
                            <Image className="post__img" src={blog.image} alt={blog.title} fluid/>
                            <h3 className="mb-0">{blog.title}</h3>
                            <p className=" mb-auto">{blog.introduction}</p>
                            <Link to={`/post/${blog.slug}`} className="stretched-link"><Button className="blog__category__btn">Read More</Button></Link>
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
        <Container className='content'>
            <Helmet>
             <meta charSet="utf-8" />
                <meta name="description" content="Health related blog content" />
                <title>Blog categories</title>
            </Helmet>
            {/*
            <div className='container mt-3'>
            <h3 className='display-4'>Category: {currentCategory} </h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/blog/category/medications'>Medications</Link>
                    <Link className="p-2 text-muted" to='/blog/category/diseases/'>Diseases</Link>
                    <Link className="p-2 text-muted" to='/category/health_news'>Health News</Link>
                    <Link className="p-2 text-muted" to='/category/medications'>Medications</Link>
                    <Link className="p-2 text-muted" to='/category/medical_equipment'>Medical Equipment</Link>
                </nav>
            </div>
           
        </div>
            */}
            {getCategoryBlogs()}
        </Container>
    )
}

export default BlogCategoryScreen
