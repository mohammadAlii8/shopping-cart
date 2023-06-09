import React from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const style = {
  header: 'text-gray-400 bg-white body-font shadow-lg',
  container:
    'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center',
  navLogo: 'flex title-font font-medium items-center text-black mb-4 md:mb-0',
  logo: 'w-10 h-10 text-white p-2 bg-black rounded-full',
  textLogo: 'ml-3 text-xl',
  navbar:
    'md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center cursor-pointer',
  links: 'mr-5 hover:text-gray-900',
  cartBtn:
    'inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0',
};

const navigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link
          to={`/`}
          href="/"
          className={style.navLogo}>
          <img
            className={style.logo}
            src={logo}
            alt=""
          />
          <span className={style.textLogo}>BotoStart</span>
        </Link>
        <nav className={style.navbar}>
          {navigations.map((navigation) => {
            return (
              <Link
                className={style.links}
                to={navigation.path}>
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <button className={style.cartBtn}>
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
