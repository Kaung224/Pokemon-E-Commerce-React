import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className='main'>

    </div>
  )
}

export default ProductDetails