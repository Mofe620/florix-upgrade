import axios from 'axios'
import {
    TERMS_REQUEST,
    TERMS_SUCCESS,
    TERMS_FAIL,
} from '../actions/types'



export const termsReducer = (state = { terms: {}}, action) => {
    switch (action.type) {
        case TERMS_REQUEST:
            return { loading: true, terms: {}}

        case TERMS_SUCCESS:
            return {
                loading: false,
                terms: action.payload,
            }

        case TERMS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}