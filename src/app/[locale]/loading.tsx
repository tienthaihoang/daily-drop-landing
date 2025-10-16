"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50">
      {/* Logo or Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/*Todo: Import logo when available*/}
        {/* <Image
          src="/logo.svg"
          alt="Daily Drop"
          width={80}
          height={80}
          className="drop-shadow-md"
          priority
        /> */}

        <motion.div
          className="mt-6 w-12 h-12 border-[3px] border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-slate-600 font-medium tracking-wide"
      >
        Preparing your creative experience...
      </motion.p>
    </div>
  );
}
