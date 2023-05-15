import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Features from './Features';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <Hero />
            <h2 className='text-4xl font-bold text-center mt-20 text-black'>Products</h2>
            <Products />
            <Features />
            <AboutUs />
        </div>
    );
};

export default Home;