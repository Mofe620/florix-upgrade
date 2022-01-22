import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Image} from 'react-bootstrap'
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
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{blog.category}</strong>
                        <h3 className="mb-0">{blog.title}</h3>
                        <p className="card-text mb-auto">{blog.introduction}</p>
                        <Link to={`/post/${blog.slug}`} className="stretched-link">Read More</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <Image className="post__img" src={`${process.env.REACT_APP_API_URL}${blog.image}`} alt={blog.title} fluid/>
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
