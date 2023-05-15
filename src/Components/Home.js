import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Products from './Products';
import Features from './Features';
import AboutUs from './AboutUs';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            // console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div>
            <Hero />
            <h2 className='text-4xl font-bold text-center mt-20 text-black'>Products</h2>
            {
                products.length > 0 ?
                    <Products  items={products} />
                    : <h1>Loading...</h1>
            }
            {/* <Products /> */}
            <Features />
            <AboutUs />
        </div>
    );
};

export default Home;