import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            Ben-Hur Albertassi
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

