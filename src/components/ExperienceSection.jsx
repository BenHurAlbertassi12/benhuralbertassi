import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Minha jornada na área de engenharia de dados e transformação digital
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
                  <p className="text-blue-400 font-semibold">Estagiário em Engenharia de Dados</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>Atual</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>Brasil</span>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                A <span className="text-blue-400 font-semibold">EloGroup</span> é uma consultoria 
                especializada em transformação digital que integra competências de Tecnologia, 
                Analytics e Gestão para tornar negócios estrategicamente digitais.
              </p>
              
              <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                <ExternalLink size={16} className="mr-2" />
                <span className="text-sm">elogroup.com</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                Principais Atividades:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Desenvolvimento de pipelines de dados com Apache Spark",
                  "Implementação de soluções em Microsoft Azure e Fabric",
                  "Análise e processamento de Big Data",
                  "Colaboração em projetos de transformação digital",
                  "Otimização de processos de ETL/ELT",
                  "Suporte em arquiteturas de dados na nuvem"
                ].map((activity, index) => (
                  <motion.div
                    key={activity}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Tecnologias Utilizadas:
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
              Próximos Passos
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Busco continuar evoluindo na área de engenharia de dados, explorando novas tecnologias 
              e contribuindo para projetos que gerem impacto real nos negócios através da transformação digital.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

