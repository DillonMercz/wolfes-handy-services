import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/tips', label: 'Tips & Resources' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-primary-light text-white sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-secondary-light transition-colors duration-300"
          >
            Wolfe's Handy Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? 'bg-white/10 text-secondary-light font-semibold'
                    : 'hover:bg-white/5 hover:text-secondary-light'
                }`}
              >
                {link.label}
                {isActiveLink(link.path) && (
                  <div className="h-0.5 bg-secondary-light mt-1 transform scale-x-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-secondary hover:bg-secondary-light text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'top-2'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? 'bg-white/10 text-secondary-light font-semibold'
                    : 'hover:bg-white/5 hover:text-secondary-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 mt-2 bg-secondary hover:bg-secondary-light text-white rounded-lg transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient Border Bottom */}
      <div className="h-0.5 bg-gradient-to-r from-secondary via-secondary-light to-secondary opacity-75" />
    </nav>
  );
};

export default Navbar;
