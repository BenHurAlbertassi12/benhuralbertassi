import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Ben-Hur Albertassi</h3>
            <p className="text-gray-400 leading-relaxed">
              Engenheiro de Dados apaixonado por transformar dados em insights valiosos 
              e contribuir para a transformação digital das organizações.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors mx-auto"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors mx-auto"
              >
                Habilidades
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors mx-auto"
              >
                Experiência
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors mx-auto"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="mailto:dev.benhur@gmail.com"
                className="p-3 bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/benhuralbertassi12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/benhur-albertassi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-blue-700 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ben-Hur Albertassi. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com React.js, Tailwind CSS e Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

