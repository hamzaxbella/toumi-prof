// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="px-12 bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center text-2xl font-bold">
            <span className="mr-2">
              {/* Logo */}
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16z" />
                <path d="M13 7H8v10h2v-4h3v4h2V7h-2z" />
              </svg>
            </span>
            ToCoursMi
          </div>
          <p className="mt-2 text-gray-600 text-center md:text-left">
            Your trusted platform for academic resources and support. Join us and excel in your learning journey!
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
          <p className="text-gray-600 mt-2">
            <span className="inline-flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 8a2 2 0 100 4h18a2 2 0 100-4H3zM3 15a2 2 0 100 4h18a2 2 0 100-4H3z" />
              </svg>
              XXXXXXXXXXX
            </span>
          </p>
          <p className="text-gray-600">
            <span className="inline-flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 4v16h20V4H2zm2 2h16v12H4V6zm8 2a2 2 0 100 4 2 2 0 000-4zm-1 7h2v1h-2v-1zm-5-6h2v1H6v-1zm0 3h2v1H6v-1zm0 3h2v1H6v-1zm10-6h2v1h-2v-1zm0 3h2v1h-2v-1zm0 3h2v1h-2v-1z" />
              </svg>
              info@company.com
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-800">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/cours" className="hover:text-gray-800">
                COURS
              </Link>
            </li>
            <li>
              <Link href="/all_cours" className="hover:text-gray-800">
                all_cours
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-gray-800">
                support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2048 Hicham Boudouch. All rights reserved.</p>
        <p>
          Design by <a href="#" className="text-blue-500 hover:underline">Hicham & Hamza - H&H</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
