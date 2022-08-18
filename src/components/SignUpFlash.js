import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpFlash = ({ children }) => {
    
  return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default SignUpFlash