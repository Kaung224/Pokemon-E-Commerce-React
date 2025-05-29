import React, { useState } from 'react';
import ProductGrid from '../ProductGrid'
import ProductLayout from './components/ProductLayout';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Routes, BrowserRouter } from "react-router-dom";
import ProductDetails from '../ProductDetails';

function App() {

  const [searchQuery, setSearchQuery] = useState("set.id:sv6");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ProductLayout setSearchQuery={setSearchQuery} searchQuery={searchQuery} />}>
        <Route index element={<ProductGrid />} />
        <Route path='productDetails' element={<ProductDetails />} />
      </Route>
    )
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductLayout setSearchQuery={setSearchQuery} searchQuery={searchQuery} />}>
          <Route index element={<ProductGrid />} />
          <Route path='productDetails' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
