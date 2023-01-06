import React from 'react'
import loader from './loader.gif'

const Spinner=()=> {
 
    return (
      <div className='text-center'>
          <img src={loader} ></img>
      </div>
    )
  
}

export default Spinner