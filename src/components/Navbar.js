"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Website Name */}
        <h1 className="text-lg font-bold">My Website</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path ? "underline text-blue-400" : "hover:text-gray-400"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-900 p-4 rounded-lg">
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path ? "underline text-blue-400" : "hover:text-gray-400"
                }`}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Navigation Links
const navLinks = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/products", name: "Products" },
  { path: "/research", name: "Research" },
  
];
