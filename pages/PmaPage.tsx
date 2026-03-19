import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PmaPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-pma-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-pma-in');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <style>{`
        @keyframes pmaIn {
          from {
            opacity: 0;
            transform: scale(0.95) rotateZ(-2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes governmentPulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.6));
          }
        }
        .animate-pma-in {
          animation: pmaIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-pma-animation] {
          animation: governmentPulse 4s ease-in-out infinite;
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
              PMA <br/> <span className="text-red-500">ASTRANSIT</span>
            </h1>
            <p className="text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl mx-auto">
              Official mobile application for Punjab Mass Transit Authority featuring comprehensive public transport management for Metro, Buses, Orange Line Train, and integrated transport systems across Punjab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transport Systems Overview */}
      <section className="py-20 px-6 bg-neutral-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Transport Systems Covered
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Orange Line Metro",
                description: "Lahore's rapid transit system connecting major city centers",
                icon: "🚇",
                coverage: "27.1 km route"
              },
              {
                name: "Green Line Metro",
                description: "Upcoming metro line for enhanced connectivity",
                icon: "🚊",
                coverage: "Planned expansion"
              },
              {
                name: "Punjab Metro Bus",
                description: "Extensive bus rapid transit network across cities",
                icon: "🚌",
                coverage: "500+ buses daily"
              },
              {
                name: "Intercity Transport",
                description: "Regional connectivity between Punjab cities",
                icon: "🚍",
                coverage: "Multi-city routes"
              }
            ].map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-800/50 rounded-xl p-6 text-center border border-white/10 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold text-red-500 mb-2">{system.name}</h3>
                <p className="text-neutral-300 text-sm mb-3">{system.description}</p>
                <span className="text-xs text-neutral-400 bg-neutral-700 px-2 py-1 rounded-full">{system.coverage}</span>
              </motion.div>
            ))}
          </div>
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
              Developed the official mobile application for Punjab Mass Transit Authority (PMA), revolutionizing public transportation in Punjab. The app serves as a comprehensive digital platform managing Metro systems, Bus Rapid Transit, Orange Line Train operations, and integrated multi-modal transport solutions across major cities including Lahore, Rawalpindi, Faisalabad, and Multan.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Key Features</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Real-time Metro, Bus, and Train tracking with live updates
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Multi-modal journey planning and route optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Digital ticketing with NFC and QR code integration
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Emergency alerts and service disruption notifications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Accessibility features for differently-abled passengers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Multi-language support (Urdu, English, Punjabi)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Technical Challenges</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Integrating with legacy government transport APIs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Real-time data synchronization across multiple transport modes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Ensuring 99.9% uptime for critical public infrastructure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Implementing secure payment processing for government services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Managing high concurrent users during peak transport hours
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
            alt="Orange Line Metro Train"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop&crop=center"
            alt="Metro Bus Rapid Transit"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
            alt="Public Transport Integration"
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
              { name: 'React Native', color: 'bg-blue-500' },
              { name: 'Metro APIs', color: 'bg-orange-500' },
              { name: 'Bus Tracking', color: 'bg-green-500' },
              { name: 'JazzCash', color: 'bg-purple-500' },
              { name: 'PostgreSQL', color: 'bg-blue-600' },
              { name: 'Mapbox', color: 'bg-red-500' }
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

      {/* Advanced Features */}
      <section className="py-20 px-6 bg-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Advanced Features
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Cutting-edge smart transport capabilities powered by AI and IoT integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Route Optimization</h3>
              <p className="text-neutral-300 text-sm">
                Machine learning algorithms predict optimal routes based on real-time traffic, weather, and passenger density data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-white mb-3">IoT Sensor Integration</h3>
              <p className="text-neutral-300 text-sm">
                Real-time monitoring of vehicle conditions, passenger comfort, and infrastructure health through IoT sensors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-neutral-300 text-sm">
                Forecast passenger demand, maintenance needs, and service disruptions using historical data and AI models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Scheduling</h3>
              <p className="text-neutral-300 text-sm">
                AI-powered route adjustments and schedule optimization based on real-time demand and traffic conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Notifications</h3>
              <p className="text-neutral-300 text-sm">
                Personalized alerts for delays, route changes, and personalized travel recommendations based on user behavior.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Inter-modal Integration</h3>
              <p className="text-neutral-300 text-sm">
                Seamless connections between metro, bus, and train services with unified ticketing and journey planning.
              </p>
            </motion.div>
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
              { metric: '750K+', label: 'Daily Active Users' },
              { metric: '4.8/5', label: 'App Store Rating' },
              { metric: '45%', label: 'Public Transport Usage Increase' },
              { metric: 'Best Digital', label: 'Government Initiative 2024' }
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

export default PmaPage;