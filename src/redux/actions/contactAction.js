import axios from 'axios'

import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL,
} from '../actions/types'



export const contactUs = (name, email, subject, message) => async (dispatch) => {
    try {
        dispatch({
            type: CONTACT_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const body = JSON.stringify({ name, email, subject, message });
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/contact/`, body, config)
            console.log(body)
        dispatch({
            type: CONTACT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONTACT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
