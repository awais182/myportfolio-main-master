import { motion } from "framer-motion";

export const PageLoader = () => {
  const ease = [0.76, 0, 0.24, 1];

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none">
      {/* BACKGROUND GRADIENT */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease }}
        className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0000]"
      />

      {/* TOP SHUTTER */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black origin-top border-b border-[#800000]/30"
      />

      {/* BOTTOM SHUTTER */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black origin-bottom border-t border-[#800000]/30"
      />

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="flex flex-col items-center text-center w-full max-w-[90vw]">

          {/* NAME CONTAINER */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">

            {/* AWAIS */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="font-black uppercase italic tracking-[0.2em] text-white
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                AWAIS
              </motion.h1>
            </div>

            {/* DIVIDER */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#800000] to-transparent
              w-24 sm:w-32 md:w-40 lg:w-48"
            />

            {/* RAZA */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="font-light uppercase tracking-[0.2em]
                text-neutral-300
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                RAZA
              </motion.h1>
            </div>
          </div>

          {/* STATUS TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-6 font-mono uppercase tracking-[0.4em]
            text-[8px] sm:text-[10px] md:text-xs text-[#800000]"
          >
            Deploying_Portfolio_v3.0
          </motion.p>

          {/* LOADING BAR */}
          <div className="mt-6 w-full max-w-[200px] sm:max-w-[300px] h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="h-full w-1/2 bg-[#800000]"
            />
          </div>

          {/* GLOW EFFECT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]
            bg-[#800000] blur-[120px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};