import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {authReducer, userProfile} from './reducers/authReducers'
import { ContactReducer } from './reducers/contactReducer'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
    ProductClassReducer,
    analgesicsReducer,
    antibioticsReducer,
    multivitaminsReducer

} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderReducers'

import {
    BlogListReducer,
    BlogDetailsReducer,
    BlogCategoryReducer,
    featuredBlogReducer,
    blogCommentReducer,
} from './reducers/blogReducers'

import {
    termsReducer
} from './reducers/baseReducers'

import { emergencyReducer } from './reducers/emergencyReducer'
import { uploadPrescriptionReducer } from './reducers/prescriptionReducer'

const reducer = combineReducers({
    //auth: authReducer,

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    productClass: ProductClassReducer,
    analgesics: analgesicsReducer,
    antibiotics: antibioticsReducer,
    multivitamins: multivitaminsReducer,

    cart: cartReducer,
    auth: authReducer,
    profileInfo: userProfile,
    contact: ContactReducer,
    termsDetails: termsReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,

    blogList: BlogListReducer,
    blogDetails: BlogDetailsReducer, 
    featuredBlog: featuredBlogReducer,
    blogCategory: BlogCategoryReducer,
    blogComment: blogCommentReducer,
    emergencyOrder: emergencyReducer,
    uploadPrescription: uploadPrescriptionReducer

})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userDataFromStorage = localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('access')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
   auth: {user: userDataFromStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store