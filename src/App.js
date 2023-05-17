import React from 'react';
// COMPONENTS
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

import ProductsDetails from './Components/ProductsDetails';
import Products from './Components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products/:id"
          element={<ProductsDetails />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
