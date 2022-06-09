import {
    EMERGENCY_ORDER_REQUEST, 
    EMERGENCY_ORDER_SUCCESS, 
    EMERGENCY_ORDER_FAIL

} from '../actions/types'


export const emergencyReducer = (state={}, action)=>{
    const {type, payload} = action;

    switch (type){
        case EMERGENCY_ORDER_REQUEST:
            return {loading: true}
        case EMERGENCY_ORDER_SUCCESS:
            return {loading:false, emergency_order:payload}
        case EMERGENCY_ORDER_FAIL:
            return {loading:false, error:payload}
        default:
            return state
    }

}