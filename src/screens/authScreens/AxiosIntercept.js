import axios from "axios";

export const AxiosInterceptor = axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 400||401||402||403||404||405){
            throw new Error ('Your details are not valid, please try again', {cause:error}); 
            // window.location.href = '/register'
        } else if (error.response.status === 500||501||502||503||504||505){
            throw new Error ('System encountered error', {cause:error})
            
        } else{
            throw new Error('Unknown error')
        }
    }
)