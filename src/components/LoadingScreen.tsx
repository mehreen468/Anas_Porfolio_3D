import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#02030b] text-center"
    >
      <div className="space-y-6 rounded-[36px] border border-cyan-400/15 bg-slate-950/95 px-10 py-12 shadow-panel backdrop-blur-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 shadow-[0_0_50px_rgba(79,210,255,0.15)]">
          <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-300" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/80">Loading Portfolio</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Initializing command center...</h1>
        </div>
      </div>
    </motion.div>
  );
}
