import axios from 'axios'
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

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,


    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,

    
    PRODUCT_CLASS_REQUEST,
    PRODUCT_CLASS_SUCCESS,
    PRODUCT_CLASS_FAIL,

    GET_ANALGESICS_REQUEST,
    GET_ANALGESICS_SUCCESS,
    GET_ANALGESICS_FAIL,

    GET_ANTIBIOTICS_REQUEST,
    GET_ANTIBIOTICS_SUCCESS,
    GET_ANTIBIOTICS_FAIL,

    GET_MULTIVITAMINS_REQUEST,
    GET_MULTIVITAMINS_SUCCESS,
    GET_MULTIVITAMINS_FAIL,

} from './types'


export const listProducts = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products${keyword}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/top/`)

        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `${process.env.REACT_APP_API_URL}/api/products/delete/${id}/`,
            config
        )

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/products/create/`,
            {},
            config
        )
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
            }
        }

        const { data } = await axios.put(
            `${process.env.REACT_APP_API_URL}/api/products/update/${product.id}/`,
            product,
            config
        )
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
            }
        }
        

        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/products/${productId}/reviews/`,
            review,
            config
        )
        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// ACTION FOR PRODUCT CLASS FOR POST REQUEST API
export const getProductClass = (productClass) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }; 

    try {
        dispatch({ type: PRODUCT_CLASS_REQUEST })
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/products/class/`, {productClass}, config);
        console.log(res)
        dispatch({
            type: PRODUCT_CLASS_SUCCESS,
            payload: res.data

        });
    } catch (error) {
        dispatch({
            type: PRODUCT_CLASS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        });
    }
}

// GET analgesic products

export const getAnalgesics = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ANALGESICS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/product-class/?productClass=analgesics`)
        console.log(data)

        dispatch({
            type: GET_ANALGESICS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ANALGESICS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// GET antibiotics
export const getAntibiotics = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ANTIBIOTICS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/product-class/?productClass=antibiotics`)

        dispatch({
            type: GET_ANTIBIOTICS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ANTIBIOTICS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// GET Multivitamins
export const getMultivitamins = () => async (dispatch) => {
    try {
        dispatch({ type: GET_MULTIVITAMINS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/product-class/?productClass=multivitamins`)

        dispatch({
            type: GET_MULTIVITAMINS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_MULTIVITAMINS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}