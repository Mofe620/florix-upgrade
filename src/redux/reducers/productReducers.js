import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,

    PRODUCT_CLASS_REQUEST,
    PRODUCT_CLASS_SUCCESS,
    PRODUCT_CLASS_FAIL,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,

    
    GET_ANALGESICS_REQUEST,
    GET_ANALGESICS_SUCCESS,
    GET_ANALGESICS_FAIL,

    GET_ANTIBIOTICS_REQUEST,
    GET_ANTIBIOTICS_SUCCESS,
    GET_ANTIBIOTICS_FAIL,

    GET_MULTIVITAMINS_REQUEST,
    GET_MULTIVITAMINS_SUCCESS,
    GET_MULTIVITAMINS_FAIL,
} from '../actions/types'


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }

        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }

        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }

        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_UPDATE_RESET:
            return { product: {} }

        default:
            return state
    }
}



export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}


export const productTopRatedReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_TOP_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_TOP_SUCCESS:
            return { loading: false, products: action.payload, }

        case PRODUCT_TOP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const ProductClassReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_CLASS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_CLASS_SUCCESS:
            return { loading: false, products: action.payload }

        case PRODUCT_CLASS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const analgesicsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_ANALGESICS_REQUEST:
            return { loading: true, products: [] }

        case GET_ANALGESICS_SUCCESS:
            return { loading: false, products: action.payload, }

        case GET_ANALGESICS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const antibioticsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_ANTIBIOTICS_REQUEST:
            return { loading: true, products: [] }

        case GET_ANTIBIOTICS_SUCCESS:
            return { loading: false, products: action.payload, }

        case GET_ANTIBIOTICS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const multivitaminsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_MULTIVITAMINS_REQUEST:
            return { loading: true, products: [] }

        case GET_MULTIVITAMINS_SUCCESS:
            return { loading: false, products: action.payload, }

        case GET_MULTIVITAMINS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}