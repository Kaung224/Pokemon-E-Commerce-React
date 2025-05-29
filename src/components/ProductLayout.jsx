import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import { Outlet } from 'react-router-dom'

const ProductLayout = ({ setSearchQuery, searchQuery }) => {

  console.log("ProductLayout searchQuery", searchQuery);

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </div>
  )
}

export default ProductLayout