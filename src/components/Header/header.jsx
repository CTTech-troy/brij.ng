import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon, TruckIcon } from 'lucide-react'
import Logo from "../../assets/download.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const isActive = (path) => {
    return location.pathname === path
  }
  return (
    <header className="bg-[#0a2c5e] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Company Logo" className="h-20 w-20 object-contain" />
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-[#e6c200] transition-colors ${isActive('/') ? 'text-[#e6c200] font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`hover:text-[#e6c200] transition-colors ${isActive('/services') ? 'text-[#e6c200] font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/fleet"
              className={`hover:text-[#e6c200] transition-colors ${isActive('/fleet') ? 'text-[#e6c200] font-semibold' : ''}`}
            >
              Fleet
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#e6c200] transition-colors ${isActive('/about') ? 'text-[#e6c200] font-semibold' : ''}`}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className="bg-[#e6c200] hover:bg-[#e6c200] text-[#0a2c5e] font-semibold px-5 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`py-2 ${isActive('/') ? 'text-[#e6c200] font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`py-2 ${isActive('/services') ? 'text-[#e6c200] font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/fleet"
              className={`py-2 ${isActive('/fleet') ? 'text-[#e6c200] font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fleet
            </Link>
            <Link
              to="/about"
              className={`py-2 ${isActive('/about') ? 'text-[#e6c200] font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="bg-[#e6c200] hover:bg-[#ffda22] text-[#0a2c5e] font-semibold px-4 py-2 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
export default Header
