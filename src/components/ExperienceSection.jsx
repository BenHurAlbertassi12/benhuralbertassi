import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('experience_title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('experience_subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl border border-blue-500/30 mr-4">
                  <Building2 className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">EloGroup</h3>
                  <p className="text-blue-400 font-semibold">{t('data_engineer_intern_role')}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{t('current')}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>{t('brazil')}</span>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('elogroup_description_part1')}
                <span className="text-blue-400 font-semibold">EloGroup</span>
                {t('elogroup_description_part2')}
              </p>
              
              <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                <ExternalLink size={16} className="mr-2" />
                <span className="text-sm">elogroup.com</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                {t('main_activities_title')}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "develop_data_pipelines",
                  "implement_azure_fabric_solutions",
                  "big_data_analysis_processing",
                  "digital_transformation_collaboration",
                  "etl_elt_optimization",
                  "cloud_data_architecture_support"
                ].map((activity, index) => (
                  <motion.div
                    key={activity}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{t(activity)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                {t('technologies_used_title')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Apache Spark", "Python", "SQL", "Microsoft Azure", "Microsoft Fabric",
                  "Big Data", "ETL/ELT", "Data Pipelines", "Cloud Computing"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('next_steps_title')}
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('next_steps_description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

