import React from 'react';

const MobileAppSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #800000 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">

          {/* Mobile App Visualization */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative w-48 h-96 sm:w-56 sm:h-[448px] bg-black rounded-[2rem] border-4 border-neutral-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl overflow-hidden">
                  {/* App Interface Mockup */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-6 h-6 bg-white/20 rounded"></div>
                      <div className="text-white text-xs font-bold">MyApp</div>
                      <div className="w-6 h-6 bg-white/20 rounded"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
                      <div className="h-8 bg-white/15 rounded animate-pulse"></div>
                      <div className="h-8 bg-white/15 rounded animate-pulse"></div>
                      <div className="h-20 bg-white/20 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around mt-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-6 h-6 bg-white/30 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-neutral-600 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-2xl">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg">⚛️</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <span className="text-white text-sm">🐦</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 md:mb-12">
              <h2 className="text-[10px] sm:text-xs font-black text-[#800000] tracking-[0.5em] uppercase mb-4 block">
                [ Mobile Layer ]
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
                MOBILE APP <br/>
                <span className="text-[#800000] italic transform -skew-x-6 inline-block">ENGINEERING</span>
              </h3>
              <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed font-medium border-l-2 border-[#800000] pl-6">
                With 3+ years of experience in mobile app development, I create cross-platform applications using React Native and Flutter. From concept to deployment, I deliver native-performance apps that provide seamless user experiences across iOS and Android platforms.
              </p>
            </div>

            {/* Mobile Development Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[
                { label: "Apps Built", val: "15+" },
                { label: "Platforms", val: "iOS & Android" },
                { label: "Frameworks", val: "React Native" },
                { label: "Performance", val: "Native-like" }
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#800000]/10 transition-all group hover:-translate-y-1 hover:border-[#800000]/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/2 transition-all duration-500" />
                  <div className="relative z-10">
                    <p className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-[#800000] transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-white group-hover:scale-105 transition-transform origin-left">
                      {stat.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {["React Native", "Flutter", "iOS", "Android", "Firebase", "App Store", "Play Store"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#800000]/10 border border-[#800000]/20 rounded-full text-sm font-medium text-white hover:bg-[#800000]/20 transition-colors"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="mt-8 p-4 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] sm:text-xs text-neutral-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#800000] font-bold">awais@mobile:</span>
                <span className="animate-pulse"># npx react-native run-ios --simulator</span>
              </div>
              <div className="text-green-400">✓ Build succeeded</div>
              <div className="text-blue-400">ℹ Running on iPhone Simulator</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;