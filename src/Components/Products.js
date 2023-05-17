import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
  const [categoreis, setCategoreis] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      setCategoreis(data);
    };
    fetchCategories();
  }, []);
  if (categoreis.length === 0) return <div>Loading ....</div>;

  return (
    <div>
      <Product />
    </div>
  );
};

export default Products;
