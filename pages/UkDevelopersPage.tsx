import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UkDevelopersPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-ukdev-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-ukdev-in');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <style>{`
        @keyframes ukdevIn {
          from {
            opacity: 0;
            transform: scale(0.95) rotateZ(-2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes constructionPulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 10px rgba(128, 0, 0, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(128, 0, 0, 0.6));
          }
        }
        .animate-ukdev-in {
          animation: ukdevIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-ukdev-animation] {
          animation: constructionPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-[#800000]/10 -skew-x-12 translate-x-1/4 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              UK <br/> <span className="text-[#800000]">DEVELOPERS</span>
            </h1>
            <p className="text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl mx-auto">
              Comprehensive construction and real estate development platform with project management, regulatory compliance, and stakeholder communication tools.
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
              Developed a comprehensive platform for UK Developers that streamlines construction project management, enhances client communication, and ensures regulatory compliance. The platform serves as a central hub for all construction and development activities, from initial planning to project completion and handover.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-4 uppercase tracking-widest">Key Features</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    Real-time construction project tracking and milestone management
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    Client progress portals with visual updates and timelines
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    Regulatory compliance management and documentation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                    Financial tracking, budgeting, and cost management tools
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-4 uppercase tracking-widest">Technical Challenges</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Managing complex construction workflow dependencies
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Integrating regulatory compliance systems and APIs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    Building real-time collaboration features for distributed teams
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
            alt="Construction Project Management"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop&crop=center"
            alt="Client Progress Portal"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
            alt="Regulatory Compliance Dashboard"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center pb-20 px-6"
      >
        <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase">
          Project Outcomes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl font-black text-[#800000] mb-2">30%</div>
            <div className="text-sm text-neutral-300 uppercase tracking-widest">Faster Project Completion</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl font-black text-[#800000] mb-2">95%</div>
            <div className="text-sm text-neutral-300 uppercase tracking-widest">On-Time Delivery</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl font-black text-[#800000] mb-2">50+</div>
            <div className="text-sm text-neutral-300 uppercase tracking-widest">Active Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl font-black text-[#800000] mb-2">£2M+</div>
            <div className="text-sm text-neutral-300 uppercase tracking-widest">Construction Value</div>
          </div>
        </div>
      </motion.section>

      {/* Back Button */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 bg-[#800000] hover:bg-[#600000] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors duration-300"
          >
            ← Back to Portfolio
          </button>
        </div>
      </section>
    </div>
  );
};

export default UkDevelopersPage;