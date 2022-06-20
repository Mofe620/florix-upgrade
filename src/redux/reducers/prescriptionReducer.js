import {
    UPLOAD_PRESCRIPTION_REQUEST,
    UPLOAD_PRESCRIPTION_SUCCESS,
    UPLOAD_PRESCRIPTION_FAIL,



} from '../actions/types'



export const uploadPrescriptionReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPLOAD_PRESCRIPTION_REQUEST:
            return { loading: true }

        case UPLOAD_PRESCRIPTION_SUCCESS:
            return { loading: false, contact_us: payload }

        case UPLOAD_PRESCRIPTION_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}