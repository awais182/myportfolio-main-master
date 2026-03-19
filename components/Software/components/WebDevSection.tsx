import React from 'react';

const WebDevSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 75% 25%, #800000 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">

          {/* Web Development Visualization */}
          <div className="order-1 relative">
            <div className="relative flex items-center justify-center">
              {/* Browser Mockup */}
              <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl border border-neutral-200 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-neutral-100 px-4 py-3 border-b border-neutral-200 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-500 border border-neutral-300">
                    awais-raza.dev
                  </div>
                </div>

                {/* Browser Content */}
                <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                  {/* Website Mockup */}
                  <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden">
                    {/* Navigation */}
                    <div className="bg-[#800000] text-white px-4 py-3 flex justify-between items-center">
                      <div className="font-bold">AW</div>
                      <div className="flex gap-6 text-sm">
                        <span>Home</span>
                        <span>Work</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="p-6 bg-gradient-to-r from-neutral-50 to-neutral-100">
                      <h1 className="text-2xl font-bold text-neutral-900 mb-2">Full-Stack Developer</h1>
                      <p className="text-neutral-600 text-sm mb-4">Building modern web applications</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded animate-pulse"></div>
                        <div className="w-8 h-8 bg-green-500 rounded animate-pulse"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded animate-pulse"></div>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-4 grid grid-cols-2 gap-3">
                      <div className="bg-neutral-100 rounded p-3 animate-pulse">
                        <div className="h-2 bg-neutral-300 rounded mb-2"></div>
                        <div className="h-2 bg-neutral-300 rounded w-3/4"></div>
                      </div>
                      <div className="bg-neutral-100 rounded p-3 animate-pulse">
                        <div className="h-2 bg-neutral-300 rounded mb-2"></div>
                        <div className="h-2 bg-neutral-300 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-lg">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-sm">🌐</span>
              </div>
              <div className="absolute top-1/4 -right-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <span className="text-white text-xs">💾</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
            <div className="mb-8 md:mb-12">
              <h2 className="text-[10px] sm:text-xs font-black text-[#800000] tracking-[0.5em] uppercase mb-4 block">
                [ Web Layer ]
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
                FULL-STACK WEB <br/>
                <span className="text-[#800000] italic transform -skew-x-6 inline-block">DEVELOPMENT</span>
              </h3>
              <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed font-medium border-l-2 border-[#800000] pl-6">
                With 3+ years of experience in web development, I create responsive, scalable web applications using modern technologies. From frontend user interfaces to backend APIs, I deliver complete solutions that perform across all devices and browsers.
              </p>
            </div>

            {/* Web Development Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[
                { label: "Websites Built", val: "25+" },
                { label: "Technologies", val: "15+" },
                { label: "Performance", val: "95+ Score" },
                { label: "Responsive", val: "100%" }
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 sm:p-6 bg-white/80 border border-neutral-200 rounded-2xl hover:bg-[#800000]/5 transition-all group hover:-translate-y-1 hover:border-[#800000]/30 relative overflow-hidden shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/2 transition-all duration-500" />
                  <div className="relative z-10">
                    <p className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-[#800000] transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-neutral-900 group-hover:scale-105 transition-transform origin-left">
                      {stat.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "AWS"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#800000]/10 border border-[#800000]/20 rounded-full text-sm font-medium text-neutral-700 hover:bg-[#800000]/20 transition-colors"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="mt-8 p-4 bg-neutral-900 rounded-lg border border-neutral-200 font-mono text-[10px] sm:text-xs text-neutral-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#800000] font-bold">awais@web:</span>
                <span className="animate-pulse"># npm run build && npm start</span>
              </div>
              <div className="text-green-400">✓ Build completed successfully</div>
              <div className="text-blue-400">ℹ Server running on http://localhost:3000</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDevSection;