import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import perfil from '../lib/Perfil.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { t } = useTranslation();

  return (
    <section id='about' className='py-20 bg-gray-800' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          className='max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
            {t('about_me_title')}
          </h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Text Content */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <p className='text-lg text-gray-300 leading-relaxed'>
                {t('about_paragraph1')}
                <span className='text-blue-400 font-semibold'>
                  {' '}
                  {t('data_engineer_intern')}
                </span>

              </p>

              <p className='text-lg text-gray-300 leading-relaxed'>
                {t('about_paragraph2')}
                <span className='text-purple-400 font-semibold'>Spark</span>,
                <span className='text-blue-400 font-semibold'>
                  {' '}
                  Microsoft Azure
                </span>{' '}
                e<span className='text-green-400 font-semibold'> Python</span>,
                {t('about_paragraph3')}
              </p>

              <p className='text-lg text-gray-300 leading-relaxed'>
                {t('about_paragraph4')}
              </p>

              <div className='flex flex-wrap gap-3 mt-6'>
                <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30'>
                  {t('data_engineering')}
                </span>
                <span className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30'>
                  {t('big_data')}
                </span>
                <span className='px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30'>
                  {t('cloud_computing')}
                </span>
                <span className='px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30'>
                  {t('analytics')}
                </span>
              </div>
            </motion.div>

            <motion.div
              className='flex justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <div className='w-80 h-100 rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg'>
                <img
                  src={perfil}
                  alt={t('profile_picture_alt')}
                  className='w-full h-full object-cover'
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
