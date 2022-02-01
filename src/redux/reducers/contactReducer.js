import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL,



} from '../actions/types'



export const ContactReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case CONTACT_REQUEST:
            return { loading: true }

        case CONTACT_SUCCESS:
            return { loading: false, contact_us: payload }

        case CONTACT_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}