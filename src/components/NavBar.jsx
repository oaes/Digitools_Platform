import { Menu, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const NavBar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-6 px-6 lg:px-20 shadow-sm">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent"
        >
          DigiTools
        </a>

        {/* Navbar  */}
        <ul className="hidden md:flex items-center ml-5 gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Navbar CTA  */}
        <div className="flex items-center gap-5 md:gap-2">
          <div className="relative">
            <ShoppingCart />
            <span
              className="absolute -top-3 -right-2 text-sm h-5 w-5 rounded-full text-center text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] select-none"
              style={
                !cartCount ? { display: "none" } : { display: "inline-block" }
              }
            >
              {cartCount}
            </span>
          </div>

          {/* hamburger menu  */}
          <Menu onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" />

          <div className="gap-2 hidden md:flex">
            <button className="text-sm font-semibold px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] cursor-pointer">
              Login
            </button>

            <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition-colors duration-200 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* mobile Navbar  */}
      {menuOpen && (
        <ul className="flex md:hidden flex-col py-4 px-6 gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#products" onClick={() => setMenuOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>

          <button
            className="w-full text-sm font-semibold px-5 py-2 border rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text  cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </button>

          <button
            className="w-full text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition-colors duration-200 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </button>
        </ul>
      )}
    </header>
  );
};

export default NavBar;
