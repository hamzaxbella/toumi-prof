'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { uiz } from '../../public';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than the height of the viewport
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between z-50 items-center p-5 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 w-full bg-black text-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="text-2xl font-bold md:text-3xl">ToCoursMi</div>

      {/* Hamburger Icon for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Menu for large screens */}
      <div className={`hidden md:flex space-x-6 text-lg`}>
        <a href="#" className="hover:text-gray-200">
          HOME
        </a>
        <a href="#cours" className="hover:text-gray-200">
          TOUS LES COURS
        </a>
        <a href="#" className="hover:text-gray-200">
          SUPPORT
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full text-white bg-black md:hidden`}
      >
        <div className="flex flex-col items-center space-y-6 p-5 text-lg">
          <a href="#" className="hover:text-gray-200">
            HOME
          </a>
          <a href="#cours" className="hover:text-gray-200">
            TOUS LES COURS
          </a>
          <a href="#" className="hover:text-gray-200">
            SUPPORT
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="hidden md:block">
        <Image
          src={uiz}
          alt={'logo'}
          width={80}
          height={80}
          className="object-cover md:w-100 md:h-100"
        />
      </div>
    </nav>
  );
}

export default Navbar;
