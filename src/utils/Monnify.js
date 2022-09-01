import React, { useState, useEffect } from 'react'
import { connect, useSelector } from "react-redux"
import { Redirect, useLocation } from 'react-router-dom'
import swal from 'sweetalert'
import { payOrder } from '../redux/actions/orderActions'


const Monnify = ({history, isAuthenticated}) => {
    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails
    console.log(user)

    const [sdkReady, setSdkReady] = useState(false)
    const location = useLocation()

    // if(!isAuthenticated){
    //   history.push({
    //       pathname: "/login",
    //       state: {
    //           from: location
    //       }
    //   })
    // } 
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://sdk.monnify.com/plugin/monnify.js'
    script.async = true

    script.onload = () => {
        window.MonnifySDK.initialize({
            amount: '3000',
            currency: "NGN",
            reference: '' + Math.floor((Math.random() * 1000000000) + 1),
            customerName: 'Crispilion',
            customerEmail: 'crispy@gmail.com',
            apiKey: "MK_TEST_JGYE5NJ1T1",
            contractCode: "3834928931",
            paymentDescription: "Test Pay",
            isTestMode: true,
            metadata: {
                    "name": "Chukwuyem",
            },
            paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
            onComplete: function(data){
                //Implement what happens when transaction is completed.
                swal({
                    title: "Good job!",
                    text: "Your have successfully subscribed to the premium version with more access to our services",
                    icon: "success",
                    button: "OK!",
                  });
                // dispatch(payOrder(orderId, paymentResult))
                //  console.log(paymentResult);
            },
            onClose: function(data){
                //Implement what should happen when the modal is closed here
                // swal({
                //     title: "Payment Unsuccessful!",
                //     text: "Sorry, we could not process your subscription. Please try again or contact our customer support",
                //     icon: "danger",
                //     button: "OK!",
                //   });
            }
        });
        setSdkReady(true)
        
    }
    document.body.appendChild(script)
    }


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { }) (Monnify)