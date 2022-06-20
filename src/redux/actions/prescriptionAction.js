import axios from 'axios';
import {
        UPLOAD_PRESCRIPTION_REQUEST, 
        UPLOAD_PRESCRIPTION_SUCCESS,
        UPLOAD_PRESCRIPTION_FAIL

} from './types'

export const uploadPrescription = (profession, name, center, tel, fileUpload, extraInfo) => async (dispatch) => {
    try {
        dispatch({
            type: UPLOAD_PRESCRIPTION_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
            }
        }
        const body = JSON.stringify({ profession, name, center, tel, fileUpload, extraInfo });
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/products/upload/oos/`, body, config)
            console.log(body)
        dispatch({
            type: UPLOAD_PRESCRIPTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPLOAD_PRESCRIPTION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}