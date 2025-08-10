import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBackground from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className='absolute inset-0 bg-gray-900/80'></div>
      </div>

      {/* Animated Background Particles */}
      <div className='absolute inset-0'>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-400 rounded-full opacity-30'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
        <motion.h1
          className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Ben-Hur Albertassi
        </motion.h1>

        <motion.h2
          className='text-xl md:text-2xl text-blue-400 mb-4 font-medium'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          Engenheiro de Dados | Transformando dados em insights
        </motion.h2>

        <motion.p
          className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>
          Sempre evoluindo em Big Data, Python, Spark e Azure, transformo dados
          complexos em informações estratégicas que impulsionam decisões de
          negócio.
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Conecte-se comigo
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown
          className='text-white/60 hover:text-white transition-colors'
          size={32}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

