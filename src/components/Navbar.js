import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './css/Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 md:p-4">
      <div className="container md:mx-auto p-0 block md:flex items-center justify-between">
        <span className='flex justify-between p-3 md:p-0'>
        <a className="text-white text-lg font-semibold no-underline" href="/">SAMPUJYA MUSUNURI</a>
        <button
          className="text-gray-300 md:hidden"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        </span>
        <div className={`md:bg-gray-800 bg-gray-100 md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <NavLink
            className="block md:text-gray-300 text-gray-950 hover:text-white px-3 py-2 rounded no-underline font-medium md:text-lg text-base text-right"
            activeClassName="bg-gray-900"
            exact
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="block md:text-gray-300 text-gray-950 hover:text-white px-3 py-2 rounded no-underline font-medium md:text-lg text-base text-right"
            activeClassName="bg-gray-900"
            to="/about"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            className="block md:text-gray-300 text-gray-950 hover:text-white px-3 py-2 rounded no-underline font-medium md:text-lg text-base text-right"
            activeClassName="bg-gray-900"
            to="/education"
            onClick={toggleMenu}
          >
            Education
          </NavLink>
          <NavLink
            className="block md:text-gray-300 text-gray-950 hover:text-white px-3 py-2 rounded no-underline font-medium md:text-lg text-base text-right"
            activeClassName="bg-gray-900"
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
