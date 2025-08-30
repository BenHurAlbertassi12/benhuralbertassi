import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactCard = ({ icon: Icon, title, value, link, delay = 0 }) => {
  const { t } = useTranslation();
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 ${link ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
            <Icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white ml-4 group-hover:text-blue-300 transition-colors">
            {t(title)}
          </h3>
        </div>
        {link && (
          <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors" size={16} />
        )}
      </div>
      
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors font-medium">
        {value}
      </p>
    </motion.div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: "email_title",
      value: "dev.benhur@gmail.com",
      link: "mailto:dev.benhur@gmail.com"
    },
    {
      icon: Phone,
      title: "phone_title",
      value: "(24) 99999-8028",
      link: "tel:+5524999998028"
    },
    {
      icon: Github,
      title: "github_title",
      value: "benhuralbertassi12",
      link: "https://github.com/benhuralbertassi12"
    },
    {
      icon: Linkedin,
      title: "linkedin_title",
      value: "benhur albertassi",
      link: "https://linkedin.com/in/benhur-albertassi"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('contact_title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              value={contact.value}
              link={contact.link}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('collaborate_title')}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('collaborate_description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:dev.benhur@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2" size={18} />
                {t('send_email_button')}
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/benhur-albertassi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

