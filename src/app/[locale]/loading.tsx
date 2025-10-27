"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10"
      >
        {/* Logo placeholder - can be replaced with actual logo */}
        {/* <Image
          src="/logo.svg"
          alt="Daily Drop"
          width={80}
          height={80}
          className="drop-shadow-xl"
          priority
        /> */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-black bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-8"
        >
          DailyDrop
        </motion.div>

        <motion.div
          className="relative w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-20 blur-md"></div>
          <div className="absolute inset-0 border-[3px] border-transparent border-t-purple-500 border-r-indigo-500 rounded-full"></div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-slate-400 font-medium tracking-wide relative z-10"
      >
        Preparing your creative experience...
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex gap-2 mt-6 relative z-10"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-purple-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
