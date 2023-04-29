import './App.css';
import React from 'react';
import MyBrands from './my-brands';
import './styles/my-styles.css';
import HomePage from './my-home'; 
import MyCart from './my-cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyProduct from './my-products'
import ProductDetail from './product-detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<MyBrands />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path='/products' element={<MyProduct />} />
        <Route path="/products/:id" component={ProductDetail} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
