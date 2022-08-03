import { Children } from "react"

const StoreSpinner = ({children}) => {
    return (
      <div className='storespinner'>
        {children}
        <div className='storespinner__loading'></div>
      </div>
    )
  }
  
export default StoreSpinner