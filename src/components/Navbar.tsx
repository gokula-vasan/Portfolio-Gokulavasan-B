import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled
          ? 'py-2 bg-dark-glass border-bottom border-secondary-subtle border-opacity-10'
          : 'py-3 bg-transparent'
      }`}
      style={{
        zIndex: 1000,
        background: scrolled ? 'rgba(2, 2, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div className="container">
        {/* Brand/Logo */}
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center gap-2 font-heading fw-extrabold text-white text-decoration-none"
          style={{ letterSpacing: '0.05em' }}
        >
          <Rocket className="text-cyan floating-icon" size={22} style={{ filter: 'drop-shadow(0 0 5px var(--cyan-glow))' }} />
          <span>
            Gokul<span className="text-cyan">.</span>
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 text-white p-2"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ outline: 'none', boxShadow: 'none' }}
        >
          {isOpen ? <X size={24} className="text-cyan" /> : <Menu size={24} className="text-white" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
          style={{
            transition: 'var(--transition-smooth)',
          }}
        >
          <ul className="navbar-nav ms-auto gap-2 align-items-center py-3 py-lg-0">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link-custom ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* Call to Action Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn-cosmic py-2 px-4 fs-7"
                style={{ fontSize: '0.85rem' }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
