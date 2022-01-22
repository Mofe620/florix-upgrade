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
    BLOG_COMMENT_RESET,

} from '../actions/types'


export const BlogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_LIST_REQUEST:
            return { loading: true, blogs: [] }

        case BLOG_LIST_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,

            }

        case BLOG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const BlogDetailsReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case BLOG_DETAILS_REQUEST:
            return { loading: true, ...state }

        case BLOG_DETAILS_SUCCESS:
            return { loading: false, blog: action.payload }

        case BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const BlogCategoryReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_CATEGORY_REQUEST:
            return { loading: true, ...state }

        case BLOG_CATEGORY_SUCCESS:
            return { loading: false, blogs: action.payload }

        case BLOG_CATEGORY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const featuredBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case FEATURED_BLOG_REQUEST:
            return { loading: true, ...state }

        case FEATURED_BLOG_SUCCESS:
            return { loading: false, blog: action.payload }

        case FEATURED_BLOG_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const blogCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case BLOG_COMMENT_REQUEST:
            return { loading: true }

        case BLOG_COMMENT_SUCCESS:
            return { loading: false, success: true, }

        case BLOG_COMMENT_FAIL:
            return { loading: false, error: action.payload }

        case BLOG_COMMENT_RESET:
            return {}

        default:
            return state
    }
}