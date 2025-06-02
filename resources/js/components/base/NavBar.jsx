import React, { useState } from 'react';
import { NonAuthI, ThemeToggle } from '@components';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-backgroundLight dark:bg-backgroundDark shadow-md">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-primary">LinkProject</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4 text-base text-black dark:text-white">
            <li>
              <a href="/" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition-colors">About</a>
            </li>
            <li>
              <a href="/proyects" className="hover:text-primary transition-colors">Proyects</a>
            </li>
          </ul>

          <a
            href="/login"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-secondary transition-colors"
          >
            <NonAuthI className="w-6 h-6" />
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4 relative">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu - Dropdown */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-backgroundLight dark:bg-backgroundDark rounded shadow-lg py-2 transition-all duration-300 z-50">
              <ul className="flex flex-col space-y-2 px-4 py-2 text-black dark:text-white">
                <li>
                  <a
                    href="/"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/proyects"
                    className="block hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Proyects
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-secondary transition-colors mx-auto"
                    onClick={() => setMenuOpen(false)}
                  >
                    <NonAuthI className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
