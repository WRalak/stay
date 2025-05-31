'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-2 text-white fixed w-full z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 max-lg:20 xl:px-32 2xl:px-44">
        {/* Left - Logo */}
        <Link href="/" className="text-4xl font-bold text-white hover:text-orange-500">
          Stay<span className="text-orange-600">Cation.</span>
        </Link>

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/hotels" className="hover:text-orange-500">Hotels</Link>
          <Link href="/experiences" className="hover:text-orange-500">Experiences</Link>
          <Link href="/about" className="hover:text-orange-500">About</Link>
        </div>

        {/* Right - Search, Profile, Login */}
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="hover:text-orange-500 cursor-pointer" />
          <FaRegUser className="hover:text-orange-500 cursor-pointer" />
         <Link href="/Login" className="px-4 py-1.5 rounded-full bg-orange-500 text-sm text-black">
  Login
</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 bg-black backdrop-blur-md py-4 rounded-md">
          <Link href="/" className="block text-white hover:text-orange-500">Home</Link>
          <Link href="/hotels" className="block text-white hover:text-orange-500">Hotels</Link>
          <Link href="/experiences" className="block text-white hover:text-orange-500">Experiences</Link>
          <Link href="/about" className="block text-white hover:text-orange-500">About</Link>
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2 text-white">
              <FaSearch className="hover:text-orange-500 cursor-pointer" />
              <FaUser className="hover:text-orange-500 cursor-pointer" />
            </div>
            <Link href={'/Login'} className="px-4 py-1.5 rounded-full bg-orange-500 text-sm text-black">
  Login
</Link>

          </div>
        </div>
      )}
    </nav>
  );
}
