import axios from 'axios'
import {
    TERMS_REQUEST,
    TERMS_SUCCESS,
    TERMS_FAIL,
} from './types'

export const termsAction = () => async (dispatch) => {
    
    try {
        dispatch({ type: TERMS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/req/terms/`)
        dispatch({
            type: TERMS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TERMS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



