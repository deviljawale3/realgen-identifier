'use client'

import { motion } from 'framer-motion'

export function DeeJayLabsLogo() {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative group">
        <div className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-[#001a0d] to-black flex items-center justify-center border border-white/10 relative overflow-hidden transition-all duration-500 group-hover:border-[#00FF7F]/30 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,255,127,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/5 via-transparent to-emerald-500/5" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 text-lg font-bold tracking-tight"
          >
            <span className="relative inline-block">
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">DeeJay Labs</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #00FF7F, #10b981, #34d399)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                DeeJay Labs
              </span>
            </span>
          </motion.span>
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 rounded-tl-sm transition-colors group-hover:border-[#00FF7F]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 rounded-tr-sm transition-colors group-hover:border-emerald-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 rounded-bl-sm transition-colors group-hover:border-green-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 rounded-br-sm transition-colors group-hover:border-[#00FF7F]" />
        </div>
      </div>
    </div>
  )
}
