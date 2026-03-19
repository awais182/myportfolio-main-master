import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AutoDialerPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-dialer-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-dialer-in');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <style>{`
        @keyframes dialerIn {
          from {
            opacity: 0;
            transform: scale(0.95) rotateZ(-2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes telecomPulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.6));
          }
        }
        .animate-dialer-in {
          animation: dialerIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-dialer-animation] {
          animation: telecomPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-red-500/10 -skew-x-12 translate-x-1/4 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              AUTO DIALER <br/> <span className="text-red-500">CALL CENTER</span>
            </h1>
            <p className="text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl mx-auto">
              Professional auto-dialing system for call centers with predictive dialing, CRM integration, call recording, and real-time analytics. Built for high-volume outbound calling operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Project Overview
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              Built a comprehensive auto-dialing system designed for call centers that automates outbound calling operations. The system features predictive dialing algorithms, CRM integration, call recording, and detailed analytics to optimize call center performance.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Key Features</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Predictive and progressive auto-dialing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Real-time call center analytics and reporting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    CRM integration and contact management
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Call recording and quality monitoring
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Technical Challenges</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Implementing predictive dialing algorithms
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Managing high-volume concurrent calls
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Ensuring telecom compliance and regulations
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 px-6 pb-20"
      >
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
            alt="Call Center Dashboard"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
            alt="Predictive Dialing System"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
            alt="Analytics and Reporting"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Technology Stack
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electron', color: 'bg-blue-500' },
              { name: 'Node.js', color: 'bg-green-500' },
              { name: 'WebRTC', color: 'bg-purple-500' },
              { name: 'Socket.io', color: 'bg-gray-600' },
              { name: 'PostgreSQL', color: 'bg-blue-600' },
              { name: 'Twilio API', color: 'bg-red-500' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${tech.color} rounded-xl p-6 text-center text-white font-bold text-lg hover:scale-105 transition-transform duration-300`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Project Outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '100+', label: 'Call Centers' },
              { metric: '300%', label: 'Agent Productivity' },
              { metric: '99.5%', label: 'System Uptime' },
              { metric: '40%', label: 'Cost Reduction' }
            ].map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-800/50 rounded-xl p-6 text-center border border-white/10 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="text-3xl font-black text-red-500 mb-2">{outcome.metric}</div>
                <div className="text-neutral-300 font-medium">{outcome.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate('/')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg"
          >
            ← Back to Portfolio
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AutoDialerPage;