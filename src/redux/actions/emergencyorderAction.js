import axios from 'axios';
import {EMERGENCY_ORDER_REQUEST, 
    EMERGENCY_ORDER_SUCCESS,
    EMERGENCY_ORDER_FAIL

} from './types'


export const emergency_order = (
    tel,
    extraInfo,
    recipientName, 
    recipientTel, 
    pickUpAddress, 
    deliveryAddress, 
    location,
    orderCategory, 
    productName, 
    image,  
    dosageForm, 
    brand, 
    strength,  
    storageSystem, 
    packSize,
    ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
        }
    };
    const body = JSON.stringify({ 
        tel,
        extraInfo,
        recipientName, 
        recipientTel, 
        pickUpAddress, 
        deliveryAddress, 
        location,
        orderCategory, 
        productName, 
        image,  
        dosageForm, 
        brand, 
        strength,  
        storageSystem, 
        packSize,
    });
    console.log(packSize)
    try {
    
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/emergency/order/`, body, config);
        
        console.log(body)
        dispatch({
            type: EMERGENCY_ORDER_SUCCESS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: EMERGENCY_ORDER_FAIL,
            payload: err.response && err.response.data.detail
                ? err.response.data.detail
                : err.message,
        })
    }
};