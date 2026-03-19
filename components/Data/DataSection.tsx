
import React from 'react';
import AnalyticsDashboard from './AnalyticsDashboard';
import FunnyCodeOverlay from '../Common/FunnyCodeOverlay';

const DataSection: React.FC = () => {
  return (
    <section id="data" className="py-16 sm:py-24 md:py-32 bg-[#FAFAF9] relative overflow-hidden">
       <FunnyCodeOverlay />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
         <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-center">
           <div className="lg:col-span-5">
             <h2 className="text-[8px] sm:text-xs font-black text-[#800000] tracking-[0.4em] uppercase mb-3 sm:mb-4 md:mb-6">Semantic Layer</h2>
             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-none">
               DATA INTEL & <br/> <span className="text-[#800000]">ANNOTATION</span>
             </h3>
             <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed font-medium">
               As a Data Engineer with 3+ years of experience, I specialize in data annotations and analysis. I create efficient pipelines for data preparation, perform statistical analysis, and ensure data quality for machine learning models and business intelligence solutions.
             </p>
             
             <ul className="space-y-2 sm:space-y-3 md:space-y-4">
               {[
                 "Data Annotation & Labeling - Creating high-quality training datasets for computer vision and NLP models",
                 "Statistical Analysis - Performing data analysis and generating insights for business decision-making",
                 "Data Pipeline Development - Building efficient ETL processes and data processing workflows",
                 "Quality Assurance - Implementing data validation and cleaning procedures for reliable datasets"
               ].map((item, i) => (
                 <li 
                    key={item} 
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-[12px] sm:text-sm font-bold text-neutral-700"
                 >
                   <div className="w-1.5 h-1.5 rounded-full bg-[#800000] flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="lg:col-span-7">
             <div className="relative">
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#800000]/10 rounded-full blur-3xl" />
               <div className="relative z-10">
                 <AnalyticsDashboard />
                 
                 {/* Bounding Box Simulation */}
                 <div 
                    className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-neutral-100 max-w-[220px] sm:max-w-[260px] md:max-w-[280px]"
                 >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2 sm:mb-3 md:mb-4 bg-neutral-200">
                       <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&crop=center" alt="sample" className="w-full h-full object-cover opacity-50" />
                       <div className="absolute inset-0 border-2 border-[#800000] m-4">
                         <span className="absolute -top-5 -left-0 bg-[#800000] text-white text-[7px] sm:text-[8px] md:text-[9px] px-1.5 sm:px-2 py-0.5 font-bold uppercase tracking-widest">
                           OBJECT_CLASS: SYSTEMS_OPTIMAL
                         </span>
                       </div>
                    </div>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-neutral-400 uppercase tracking-widest text-center">Confidence: 99.82%</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

export default DataSection;
