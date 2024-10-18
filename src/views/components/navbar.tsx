"use client";
import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold ">
          <Link href="/">
            <img src="/images/logo-gojek.webp" className='w-[80px] md:w-[150px]' alt="Description" />
          </Link>
        </div>

        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-0 left-0 w-full bg-white md:static md:flex md:items-center md:space-x-8 py-6 md:py-2`}
        >
          <div className="flex justify-between items-center w-full p-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col text-left space-y-4 pl-8 md:flex-row md:space-y-0 md:space-x-8 md:items-center md:text-right">
            <Link
              className="block py-2 text-gray-700 hover:text-green-500 font-semibold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block py-2 text-gray-700 hover:text-green-500 font-semibold"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="block py-2 text-gray-700 hover:text-green-500 font-semibold"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="block py-2 text-gray-700 hover:text-green-500 font-semibold"
              href="/teams"
            >
              Teams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
