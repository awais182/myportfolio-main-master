import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MessageCircle, ArrowUpRight, Cpu, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#050505] text-white py-16 sm:py-24 relative z-30 border-t border-white/5 overflow-hidden"
    >
      {/* 1. TOP SCANLINE ACCENT */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800000]/40 to-transparent" />
      
      {/* 2. AMBIENT ATMOSPHERE */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#800000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND ENGINE */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-5 group">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#800000]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-14 h-14 bg-gradient-to-br from-[#800000] to-[#4a0000] rounded-xl flex items-center justify-center text-white font-black text-2xl relative z-10 shadow-2xl border border-white/10 group-hover:border-[#800000]/50 transition-all duration-500">
                  AR
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter uppercase leading-none">
                  AWAIS <span className="text-[#800000] italic transform -skew-x-6 inline-block">RAZA</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-black">Link_Status: Active</p>
                </div>
              </div>
            </Link>
            
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed font-medium">
              Architecting the high-performance backbones of the digital age. 
              Engineering complexity into resilient, elegant infrastructure that powers the global economy. 
              Available for consulting, architecture reviews, and strategic technology partnerships.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/awais182", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/awais-raza-aa50b3310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/awsii_rajpoot_official", label: "Instagram" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1Dbnu5d1Uc/", label: "Facebook" },
                { icon: <Mail size={20} />, href: "mailto:awsiirajpoot9@gmail.com", label: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 hover:scale-105 group"
                  title={social.label}
                >
                  <span className="text-neutral-400 group-hover:text-red-500 transition-colors">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* NAVIGATION MATRIX - PMA Style Cards */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Systems & Infrastructure",
                  icon: "🌐",
                  description: "Network architecture, security, and data pipelines",
                  links: [
                    { label: "Infrastructure", to: "/systems" },
                    { label: "Security", to: "/security" },
                    { label: "Data Pipeline", to: "/data" }
                  ]
                },
                {
                  title: "Development & Engineering",
                  icon: "💻",
                  description: "Software engineering, R&D, and open source",
                  links: [
                    { label: "Software Eng", to: "/engineering" },
                    { label: "R&D Labs", to: "/labs" },
                    { label: "Open Source", to: "/git" }
                  ]
                },
                {
                  title: "Operations & Support",
                  icon: "⚡",
                  description: "System monitoring, documentation, and support",
                  links: [
                    { label: "Uptime", to: "/status" },
                    { label: "Documentation", to: "/docs" },
                    { label: "PGP Key", to: "/key" }
                  ]
                }
              ].map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-4">{section.icon}</div>
                  <h3 className="text-lg font-bold text-red-500 mb-3 uppercase tracking-wider">{section.title}</h3>
                  <p className="text-neutral-300 text-sm mb-6 leading-relaxed">{section.description}</p>

                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-neutral-400 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-3 group"
                        >
                          <span className="w-0 h-[1px] bg-red-500 group-hover:w-3 transition-all duration-300" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SYSTEM FOOTER BAR */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3"
            >
               <Cpu size={16} className="text-red-500" />
               <span className="text-sm font-mono text-neutral-300 tracking-wider">OS_VERSION: 2.0.6-STABLE</span>
            </motion.div>
            <p className="text-[10px] font-mono text-neutral-600 tracking-tighter">
              &copy; {new Date().getFullYear()} AWAIS_RAZA // ALL_RIGHTS_RESERVED
            </p>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3"
            >
              <Globe size={16} className="text-red-500" />
              <span className="text-sm font-mono text-neutral-300 tracking-wider">STAMP: {time} PKT</span>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.a
                href="mailto:awsiirajpoot9@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-red-500 transition-colors font-medium"
              >
                <Mail size={16} className="text-neutral-400 group-hover:text-red-500 transition-colors" />
                Email
              </motion.a>
              <motion.a
                href="tel:+923061247986"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-red-500 transition-colors font-medium"
              >
                <Phone size={16} className="text-neutral-400 group-hover:text-red-500 transition-colors" />
                +92 306 1247986
              </motion.a>
              <motion.a
                href="https://wa.me/923061247986"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <MessageCircle size={16} className="text-white" />
                WhatsApp
              </motion.a>
            </div>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <ArrowUpRight size={16} className="group-hover:-translate-y-1 transition-transform" />
              REBOOT_TO_TOP
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;