'use client'

import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DeeJayLabsLogo } from '@/components/deejay-labs-logo'

export function SplashScreen({
  onFinish,
  durationMs = 1400,
}: {
  onFinish: () => void
  durationMs?: number
}) {
  const id = "splash-singleton";

  useEffect(() => {
    const t = window.setTimeout(() => onFinish(), durationMs)
    return () => window.clearTimeout(t)
  }, [durationMs, onFinish])

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
      aria-label="Splash Screen"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.18, 0.36, 0.18],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ y: 16, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -12, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex flex-col items-center gap-5"
      >
        <DeeJayLabsLogo />
        <motion.div
          initial={{ width: 56, opacity: 0.0 }}
          animate={{ width: 140, opacity: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="h-[2px] rounded-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
        />
      </motion.div>
    </motion.div>
  )
}
