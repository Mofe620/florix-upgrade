// Authentication redux action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS';
export const ACTIVATION_FAIL = 'ACTIVATION_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';

export const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS';
export const LOAD_USER_PROFILE_FAIL = 'LOAD_USER_PROFILE_FAIL';
export const LOAD_USER_PROFILE_RESET = 'LOAD_USER_PROFILE_RESET';

export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
export const PASSWORD_RESET_FAIL = 'PASSWORD_RESET_FAIL';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_CONFIRM_FAIL = 'PASSWORD_RESET_CONFIRM_FAIL';
export const PASSWORD_RESET_CONFIRM_SUCCESS = 'PASSWORD_RESET_CONFIRM_SUCCESS';
export const GOOGLE_AUTH_SUCCESS = 'GOOGLE_AUTH_SUCCESS';
export const GOOGLE_AUTH_FAIL = 'GOOGLE_AUTH_FAIL';
export const FACEBOOK_AUTH_SUCCESS = 'FACEBOOK_AUTH_SUCCESS';
export const FACEBOOK_AUTH_FAIL = 'FACEBOOK_AUTH_FAIL';
export const LOGOUT = 'LOGOUT';

// Contact 
export const CONTACT_REQUEST = 'CONTACT_REQUEST'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'
export const CONTACT_FAIL = 'CONTACT_FAIL'



// Product types
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'


export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'


export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST'
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS'
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL'

export const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST'
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'
export const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL'
export const PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET'


export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST'
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS'
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL'
export const PRODUCT_UPDATE_RESET = 'PRODUCT_UPDATE_RESET'

export const PRODUCT_CLASS_REQUEST = 'PRODUCT_CLASS_REQUEST'
export const PRODUCT_CLASS_SUCCESS = 'PRODUCT_CLASS_SUCCESS'
export const PRODUCT_CLASS_FAIL = 'PRODUCT_CLASS_FAIL'

// Types for GET request for product class
export const GET_ANALGESICS_REQUEST = 'GET_ANALGESICS_REQUEST'
export const GET_ANALGESICS_SUCCESS = 'GET_ANALGESICS_SUCCESS'
export const GET_ANALGESICS_FAIL = 'GET_ANALGESICS_FAIL'

export const GET_ANTIBIOTICS_REQUEST = 'GET_ANTIBIOTICS_REQUEST'
export const GET_ANTIBIOTICS_SUCCESS = 'GET_ANTIBIOTICS_SUCCESS'
export const GET_ANTIBIOTICS_FAIL = 'GET_ANTIBIOTICS_FAIL'

export const GET_MULTIVITAMINS_REQUEST = 'GET_MULTIVITAMINS_REQUEST'
export const GET_MULTIVITAMINS_SUCCESS = 'GET_MULTIVITAMINS_SUCCESS'
export const GET_MULTIVITAMINS_FAIL = 'GET_MULTIVITAMINS_FAIL'

export const BLOG_COMMENT_REQUEST = 'BLOG_COMMENT_REQUEST'
export const BLOG_COMMENT_SUCCESS = 'BLOG_COMMENT_SUCCESS'
export const BLOG_COMMENT_FAIL = 'BLOG_COMMENT_FAIL'
export const BLOG_COMMENT_RESET = 'BLOG_COMMENT_RESET'

export const PRODUCT_TOP_REQUEST = 'PRODUCT_TOP_REQUEST'
export const PRODUCT_TOP_SUCCESS = 'PRODUCT_TOP_SUCCESS'
export const PRODUCT_TOP_FAIL = 'PRODUCT_TOP_FAIL'



// Add to Cart types
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'

export const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS'

export const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD'

export const CART_CLEAR_ITEMS = 'CART_CLEAR_ITEMS'



//Order types
export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST'
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL'

export const ORDER_CREATE_RESET = 'ORDER_CREATE_RESET'

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST'
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS'
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL'

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST'
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS'
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL'
export const ORDER_PAY_RESET = 'ORDER_PAY_RESET'

export const ORDER_LIST_MY_REQUEST = 'ORDER_LIST_MY_REQUEST'
export const ORDER_LIST_MY_SUCCESS = 'ORDER_LIST_MY_SUCCESS'
export const ORDER_LIST_MY_FAIL = 'ORDER_LIST_MY_FAIL'
export const ORDER_LIST_MY_RESET = 'ORDER_LIST_MY_RESET'


export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST'
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS'
export const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL'


export const ORDER_DELIVER_REQUEST = 'ORDER_DELIVER_REQUEST'
export const ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS'
export const ORDER_DELIVER_FAIL = 'ORDER_DELIVER_FAIL'
export const ORDER_DELIVER_RESET = 'ORDER_DELIVER_RESET'


// Blog Post Types
export const BLOG_LIST_REQUEST = 'BLOG_LIST_REQUEST'
export const BLOG_LIST_SUCCESS = 'BLOG_LIST_SUCCESS'
export const BLOG_LIST_FAIL = 'BLOG_LIST_FAIL'

export const BLOG_DETAILS_REQUEST = 'BLOG_DETAILS_REQUEST'
export const BLOG_DETAILS_SUCCESS = 'BLOG_DETAILS_SUCCESS'
export const BLOG_DETAILS_FAIL = 'BLOG_DETAILS_FAIL'

export const FEATURED_BLOG_REQUEST = 'FEATURED_BLOG_REQUEST'
export const FEATURED_BLOG_SUCCESS = 'FEATURED_BLOG_SUCCESS'
export const FEATURED_BLOG_FAIL = 'FEATURED_BLOG_FAIL'

export const BLOG_CATEGORY_REQUEST = 'BLOG_CATEGORY_REQUEST'
export const BLOG_CATEGORY_SUCCESS = 'BLOG_CATEGORY_SUCCESS'
export const BLOG_CATEGORY_FAIL = 'BLOG_CATEGORY_FAIL'

export const PRODUCT_CREATE_REVIEW_REQUEST = 'PRODUCT_CREATE_REVIEW_REQUEST'
export const PRODUCT_CREATE_REVIEW_SUCCESS = 'PRODUCT_CREATE_REVIEW_SUCCESS'
export const PRODUCT_CREATE_REVIEW_FAIL = 'PRODUCT_CREATE_REVIEW_FAIL'
export const PRODUCT_CREATE_REVIEW_RESET = 'PRODUCT_CREATE_REVIEW_RESET'


// EMERGENCY ORDER TYPES
export const EMERGENCY_ORDER_REQUEST = 'EMERGENCY_ORDER_REQUEST'
export const EMERGENCY_ORDER_SUCCESS = 'EMERGENCY_ORDER_SUCCESS'
export const EMERGENCY_ORDER_FAIL = 'EMERGENCY_ORDER_FAIL'

// Upload Prescription
export const UPLOAD_PRESCRIPTION_REQUEST = 'EMERGENCY_ORDER_REQUEST'
export const UPLOAD_PRESCRIPTION_SUCCESS = 'EMERGENCY_ORDER_SUCCESS'
export const UPLOAD_PRESCRIPTION_FAIL = 'EMERGENCY_ORDER_FAIL'

// Terms and Conditions
export const TERMS_REQUEST = 'TERMS_REQUEST'
export const TERMS_SUCCESS = 'TERMS_SUCCESS' 
export const TERMS_FAIL = 'TERMS_FAIL'

// OLD USER TYPES
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET'

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_FAIL = 'USER_LIST_FAIL'
export const USER_LIST_RESET = 'USER_LIST_RESET'


export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL'


export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL' 
export const USER_UPDATE_RESET = 'USER_UPDATE_RESET'