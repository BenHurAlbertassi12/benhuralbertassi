import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Cloud, Code, BarChart3, Cpu, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ icon: Icon, title, skills, delay = 0 }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
          <Icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white ml-4 group-hover:text-blue-300 transition-colors">
          {t(title)}
        </h3>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
              {t(skill)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: Database,
      title: 'big_data_analytics_title',
      skills: [
        'apache_spark',
        'sql',
        'big_data_processing',
        'data_warehousing',
      ],
    },
    {
      icon: Cloud,
      title: 'cloud_platforms_title',
      skills: [
        'microsoft_azure',
        'microsoft_fabric',
        'azure_data_factory',
        'cloud_architecture',
      ],
    },
    {
      icon: Code,
      title: 'development_title',
      skills: [
        'python',
        'javascript_typescript',
        'pyspark',
        'data_pipelines',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('technical_skills_title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('technical_skills_description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t('other_competencies_title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "etl_elt", "data_modeling", "business_intelligence", "machine_learning_basics",
              "git_github", "agile_methodologies", "data_visualization", "api_development"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
                whileHover={{ scale: 1.05 }}
              >
                {t(skill)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

