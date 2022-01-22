import axios from 'axios'
import {
    BLOG_CATEGORY_REQUEST,
    BLOG_CATEGORY_SUCCESS,
    BLOG_CATEGORY_FAIL,

    BLOG_LIST_FAIL,
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,

    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,

    FEATURED_BLOG_REQUEST,
    FEATURED_BLOG_SUCCESS,
    FEATURED_BLOG_FAIL,

    BLOG_COMMENT_REQUEST,
    BLOG_COMMENT_SUCCESS,
    BLOG_COMMENT_FAIL,
   

} from '../actions/types'


export const listBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: BLOG_LIST_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/posts`)

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listBlogDetails = (slug) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAILS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/post/${slug}`)

        dispatch({
            type: BLOG_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const getBlogCategory = (category) => async dispatch => {
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }; 

        try {
            dispatch({ type: BLOG_CATEGORY_REQUEST })
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category/`, {category}, config);
            console.log(res)
            dispatch({
                type: BLOG_CATEGORY_SUCCESS,
                payload: res.data
    
            });
        } catch (error) {
            dispatch({
                type: BLOG_CATEGORY_FAIL,
                payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
            });
        }
    }
    




export const getFeaturedBlog = () => async (dispatch) => {
    try {
        dispatch({ type: FEATURED_BLOG_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured/`)

        dispatch({
            type: FEATURED_BLOG_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FEATURED_BLOG_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
           
        })
    }
}



export const getBlogComment = (slug, comment) => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_COMMENT_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
            }
        }

        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/blog/posts/${slug}/comment/`,
            comment,
            config
        )
        dispatch({
            type: BLOG_COMMENT_SUCCESS,
            payload: data,
        })

        console.log(data)

    } catch (error) {
        dispatch({
            type: BLOG_COMMENT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}