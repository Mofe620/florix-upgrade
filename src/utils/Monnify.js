import { useState } from "react"
import { useSelector } from "react-redux"

const Monnify = () => {
    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const [sdkReady, setSdkReady] = useState(false)

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://sdk.monnify.com/plugin/monnify.js'
    script.async = true

    script.onload = () => {
        window.MonnifySDK.initialize({
            amount: '3000',
            currency: "NGN",
            reference: '' + Math.floor((Math.random() * 1000000000) + 1),
            customerName: user.username,
            customerEmail: user.email,
            apiKey: "MK_TEST_JGYE5NJ1T1",
            contractCode: "3834928931",
            paymentDescription: "Test Pay",
            isTestMode: true,
            metadata: {
                    "name": user.username,
            },
            paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
            onComplete: function(paymentResult){
                //Implement what happens when transaction is completed.
                // dispatch(payOrder(orderId, paymentResult))
                //  console.log(paymentResult);
            },
            onClose: function(data){
                //Implement what should happen when the modal is closed here
                console.log(data);
            }
        });
        setSdkReady(true)
        
    }
    document.body.appendChild(script)
    }


export default Monnify