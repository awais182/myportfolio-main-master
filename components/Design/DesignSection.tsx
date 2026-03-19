
import React from 'react';
import FunnyCodeOverlay from '../Common/FunnyCodeOverlay';

const DesignSection: React.FC = () => {
  return (
    <section id="design" className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <FunnyCodeOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
         <div className="text-center mb-10 sm:mb-12 md:mb-20">
           <h2 className="text-[8px] sm:text-xs font-black text-[#800000] tracking-[0.4em] uppercase mb-3 sm:mb-4 md:mb-6">Presentation Layer</h2>
           <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter">GRAPHIC <span className="text-[#800000]">DESIGN</span></h3>
           <p className="text-sm sm:text-base md:text-lg text-neutral-600 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed">
             Creating compelling visual identities and user experiences that communicate complex ideas with clarity and elegance. 
             From brand systems to interactive prototypes, I design digital experiences that engage and inspire.
           </p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
           {[
             { title: "Visual Branding", img: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=800&fit=crop&crop=center" },
             { title: "UI/UX Systems", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800&fit=crop&crop=center" },
             { title: "Typography Art", img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop&crop=center" },
             { title: "Digital Illustration", img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop&crop=center" },
           ].map((item, i) => (
             <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-[#FAFAF9]">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 translate-y-2 sm:translate-y-3 md:translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-black text-xs sm:text-sm md:text-lg uppercase tracking-tight">{item.title}</p>
                </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default DesignSection;
