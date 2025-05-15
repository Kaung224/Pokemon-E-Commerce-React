import React, { useState } from 'react'
import Navbar from '../NavBar'
import ProductGrid from '../ProductGrid'

function App() {

  const [searchQuery, setSearchQuery] = useState('set.id:sv7');

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
    </>
  )
}

export default App
