import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false); // New state for the "Blast off"
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true); // Start the funny animation
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Reset position after it flies off screen
    setTimeout(() => setIsLaunching(false), 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // INITIAL: Pop in with a bounce
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            // When launching, it jitters left/right then flies UP off the screen
            y: isLaunching ? -window.innerHeight : 0, 
            x: isLaunching ? [0, -5, 5, -5, 5, 0] : 0,
          }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          
          // HOVER: Nervous jittering animation
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -2, 2, -2, 2, 0],
            transition: { rotate: { repeat: Infinity, duration: 0.2 } }
          }}
          whileTap={{ scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] cursor-pointer group"
        >
          {/* Tooltip text that only shows on hover */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isLaunching ? "YEET! 🚀" : "UP WE GO!"}
          </div>

          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28" cy="28" r="24"
                fill="none"
                stroke="rgba(128, 0, 0, 0.1)"
                strokeWidth="4"
              />
              <motion.circle
                cx="28" cy="28" r="24"
                fill="none"
                stroke="#800000"
                strokeWidth="4"
                strokeDasharray="100 100"
                style={{ pathLength: smoothProgress }}
              />
            </svg>

            {/* Icon Center - Added "Eyes" that appear on hover */}
            <div className="w-10 h-10 bg-[#800000] rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-[#800000]/40 overflow-hidden relative">
              {/* Secret Eyes (Hover effect) */}
              <div className="flex gap-1 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
              </div>

              <motion.div
                animate={isLaunching ? { y: [-2, 2] } : { y: 0 }}
                transition={{ repeat: Infinity, duration: 0.1 }}
              >
                <ChevronUp size={20} strokeWidth={3} />
              </motion.div>
            </div>

            {/* Particle "Smoke" effect when launching */}
            {isLaunching && (
               <motion.div 
                 initial={{ opacity: 1 }}
                 animate={{ opacity: 0, y: 40 }}
                 className="absolute bottom-0 w-full flex justify-center gap-1"
               >
                 <div className="w-2 h-2 bg-gray-400 rounded-full blur-[2px]" />
                 <div className="w-3 h-3 bg-gray-300 rounded-full blur-[2px]" />
                 <div className="w-2 h-2 bg-gray-400 rounded-full blur-[2px]" />
               </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}