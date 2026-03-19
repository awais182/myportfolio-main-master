import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SjameelAndCoPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-sjameel-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-sjameel-in');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <style>{`
        @keyframes sjameelIn {
          from {
            opacity: 0;
            transform: scale(0.95) rotateZ(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes networkPulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 10px rgba(128, 0, 0, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(128, 0, 0, 0.6));
          }
        }
        .animate-sjameel-in {
          animation: sjameelIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-sjameel-animation] {
          animation: networkPulse 4s ease-in-out infinite;
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
            className="text-center"
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-[#800000] tracking-[0.6em] uppercase mb-8 flex items-center justify-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#800000]" />
              Sjameel and Co
            </motion.h4>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
            >
              Enterprise Networking <br/>
              <span className="text-[#800000] italic">& INFRASTRUCTURE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Enterprise networking solutions and IT infrastructure management for Sjameel and Co. Designed and implemented scalable network architectures supporting business operations across multiple locations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        {/* Project Overview */}
        <motion.section
          data-sjameel-animation
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-12 border border-white/10"
        >
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
            Project Overview
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            Architected and deployed comprehensive IT infrastructure for Sjameel and Co, a multinational enterprise with operations across 5 countries. The solution encompassed network design, cloud migration, security implementation, and ongoing infrastructure management to support their growing business needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#800000] mb-4 uppercase tracking-widest">Key Features</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                  Multi-location network architecture with SD-WAN technology
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                  Enterprise-grade security with advanced threat protection
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                  Hybrid cloud infrastructure with seamless data migration
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#800000] mt-2 flex-shrink-0" />
                  Unified communications platform integration
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#800000] mb-4 uppercase tracking-widest">Technical Challenges</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Coordinating infrastructure deployment across international locations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Ensuring data compliance across different regulatory environments
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Minimizing business disruption during cloud migration
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Project Images */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center"
              alt="Enterprise Network Architecture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
              alt="Cloud Infrastructure Setup"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
              alt="Security Implementation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase">
            Project Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-3xl font-black text-[#800000] mb-2">50%</div>
              <div className="text-sm text-neutral-300 uppercase tracking-widest">Cost Reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-3xl font-black text-[#800000] mb-2">60%</div>
              <div className="text-sm text-neutral-300 uppercase tracking-widest">Performance Increase</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-3xl font-black text-[#800000] mb-2">99.95%</div>
              <div className="text-sm text-neutral-300 uppercase tracking-widest">Uptime Achieved</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-3xl font-black text-[#800000] mb-2">2 Months</div>
              <div className="text-sm text-neutral-300 uppercase tracking-widest">Early Completion</div>
            </div>
          </div>
        </motion.section>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-4 text-[10px] font-black text-white transition-all duration-500 tracking-[0.4em] uppercase hover:text-[#800000]"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-3.5 7.5M21 12H3" />
            </svg>
            BACK_TO_PORTFOLIO
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SjameelAndCoPage;