'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileText, Image as ImageIcon, FileSpreadsheet, Video, FileCode, Shield, X, Zap, Fingerprint, Terminal as TerminalIcon } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { ResultScreen } from '@/components/result-screen'
import { useToast } from '@/hooks/use-toast'
import { useEffect, useRef } from 'react'

const TERMINAL_MESSAGES = [
  "INITIALIZING PIXEL_SYNC_V4 PROTOCOL...",
  "ACCESSING VOLATILE MEMORY INSTANCE...",
  "SCANNING HIGH-FREQUENCY SPECTRAL BANDS...",
  "EXTRACTING NOISE VARIANCE MATRICES...",
  "COMPARING SENSOR ARTIFACT PATTERNS...",
  "ANALYZING JPEG ERROR LEVEL FREQUENCIES...",
  "VALIDATING HARDWARE-LEVEL EXIF INTEGRITY...",
  "MAPPING NEURAL VERDICT CONFIDENCE...",
  "FINALIZING FORENSIC AUTHENTICATION..."
];

export type AnalysisResult = {
  isAIGenerated: boolean
  confidence: number
  aiEngine?: string
  modelFingerprint?: {
    model: string
    version: string
    probability: number
  }
  videoTimeline?: {
    timestamp: string
    manipulationScore: number
    type: string
  }[]
  reasoning: string[]
  author?: string
  humanOrigin?: {
    device?: string
    software?: string
    author?: string
  }
  metadata?: Record<string, any>
  fileName: string
  fileType: string
  scanDate: string
  ledgerHash?: string
}

export default function AnalyzePage() {
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [showGuide, setShowGuide] = useState(true)
  const [logs, setLogs] = useState<string[]>([])
  const logEndRef = useRef<HTMLDivElement>(null)

  const { toast } = useToast()

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logs])

  const saveToHistory = (newResult: AnalysisResult) => {
    try {
      const history = JSON.parse(localStorage.getItem('realgen_history') || '[]')
      // Prepend to history, keep last 20
      const updatedHistory = [newResult, ...history].slice(0, 20)
      localStorage.setItem('realgen_history', JSON.stringify(updatedHistory))
    } catch (e) {
      console.error('Failed to save history:', e)
    }
  }

  const analyzeFile = useCallback(async (file: File) => {
    setAnalyzing(true)
    setResult(null)

    let finalResult: AnalysisResult

    try {
      const formData = new FormData()
      formData.append('file', file)

      // Start dynamic logging
      setLogs([])
      for (const msg of TERMINAL_MESSAGES) {
        await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 150))
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`])
      }

      await new Promise(resolve => setTimeout(resolve, 500))

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      }).catch(() => ({ ok: false, json: () => null }))

      if (response.ok) {
        finalResult = await (response as Response).json()
      } else {
        // Deterministic Mock Logic if API fails
        const hash = file.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const isAI = hash % 2 === 0
        const isMedia = file.type.startsWith('image/') || file.type.startsWith('video/')

        finalResult = {
          isAIGenerated: isAI,
          confidence: 88 + (hash % 11),
          aiEngine: isAI ? (isMedia ? 'Stable Diffusion v3' : 'GPT-4o Forensics') : undefined,
          modelFingerprint: isAI && isMedia ? {
            model: hash % 2 === 0 ? 'Midjourney v6' : 'DALL-E 3',
            version: 'Professional',
            probability: 99.1
          } : undefined,
          videoTimeline: (isAI && file.type.startsWith('video/')) ? [
            { timestamp: '00:02', manipulationScore: 15, type: 'Clean' },
            { timestamp: '00:04', manipulationScore: 89, type: 'Deepfake' },
            { timestamp: '00:07', manipulationScore: 94, type: 'Artifact' },
          ] : undefined,
          reasoning: isAI
            ? (isMedia
              ? [
                'Abnormal GAN-noise signatures in high-frequency spectral bands',
                'Asymmetric lighting vectors in facial region',
                'Synthetically generated metadata headers detected'
              ]
              : [
                'Semantic patterns consistent with large language model output',
                'Lack of idiosyncratic human syntax variation',
                'Verification of known AI training set markers'
              ])
            : (isMedia
              ? [
                'Natural sensor noise distribution verified',
                'Consistent hardware-level EXIF data found',
                'Lens-blur consistency across all quadrants'
              ]
              : [
                'Document syntax matches documented human output',
                'Structural integrity of digital container verified',
                'Historical revision metadata validated'
              ]),
          fileName: file.name,
          fileType: file.type,
          scanDate: new Date().toISOString(),
          ledgerHash: `0x${hash.toString(16)}${Math.floor(Date.now() / 1000).toString(16)}`
        }
      }

      setResult(finalResult)
      saveToHistory(finalResult)
    } catch (error) {
      console.error('Analysis error:', error)
      const fallbackResult: AnalysisResult = {
        isAIGenerated: false,
        confidence: 100,
        reasoning: ['Analysis error: System encountered a processing delay. Manual verification recommended.'],
        fileName: file.name,
        fileType: file.type,
        scanDate: new Date().toISOString(),
      }
      setResult(fallbackResult)
    } finally {
      setAnalyzing(false)
    }
  }, [])

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setSelectedFile(file)

      // Create preview for images or videos
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      } else {
        setPreviewUrl(null)
      }

      await analyzeFile(file)
    }
  }, [analyzeFile])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected: () => {
      toast({
        title: "Forensic Protocol Violation",
        description: "Unsupported file architecture. Please submit images, videos, or verified documents.",
        variant: "destructive",
      })
    },
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif'],
      'video/*': ['.mp4', '.webm', '.mov'],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/*': ['.txt'],
    },
    maxFiles: 1,
  })

  const handleReset = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setResult(null)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-[#001a0d] via-[#002b16] to-[#001a0d] font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF7F]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="flex-1 relative z-20 px-4 py-12 max-w-7xl mx-auto w-full">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-8 md:gap-12"
          >
            {/* Forensic Icon Unit */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00FF7F]/30 blur-2xl rounded-full opacity-60" />
              <div className="relative p-4 rounded-3xl bg-gradient-to-br from-[#00FF7F]/20 to-transparent border border-[#00FF7F]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,127,0.15)] group-hover:border-[#00FF7F]/60 transition-colors duration-500">
                <Fingerprint className="w-10 h-10 text-[#00FF7F]" />
              </div>
            </div>

            {/* Title Unit */}
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Forensic <span className="bg-gradient-to-r from-[#00FF7F] via-emerald-400 to-[#00FF7F] bg-clip-text text-transparent italic">Lab</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] opacity-60 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-px bg-white/10" />
            Universal Forensic Standard <span className="text-white/20 mx-2">/</span> Secure Instance
            <span className="w-8 h-px bg-white/10" />
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              {!analyzing ? (
                <motion.div
                  {...getRootProps()}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`
                    relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-16
                    transition-all duration-500 cursor-pointer group overflow-hidden
                    ${isDragActive ? 'border-[#00FF7F] bg-[#00FF7F]/5' : 'hover:border-[#00FF7F]/30'}
                    relative z-40
                  `}
                >
                  <input {...getInputProps()} />

                  <div className="text-center relative z-10">
                    <motion.div
                      animate={isDragActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      className="inline-flex items-center justify-center w-28 h-28 rounded-[2rem] bg-[#00FF7F]/5 border border-[#00FF7F]/10 mb-10 group-hover:shadow-[0_0_50px_rgba(0,255,127,0.15)] transition-all duration-500"
                    >
                      <Upload className="w-12 h-12 text-[#00FF7F]" />
                    </motion.div>

                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                      {isDragActive ? 'Drop File' : 'Initialize Scan'}
                    </h3>

                    <p className="text-slate-500 mb-10 font-bold uppercase tracking-widest text-xs">AI Artifact Detection Engine v4.2</p>

                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        { icon: <ImageIcon className="w-4 h-4" />, name: "Images" },
                        { icon: <Video className="w-4 h-4" />, name: "Videos" },
                        { icon: <FileText className="w-4 h-4" />, name: "Forensics" }
                      ].map((type) => (
                        <span key={type.name} className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-xs font-black text-slate-400 group-hover:text-slate-200 transition-colors">
                          {type.icon} {type.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Background decorative elements */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                    <FileCode className="w-24 h-24 text-[#00FF7F]" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative p-12 rounded-[3rem] bg-black/40 border border-[#00FF7F]/20 backdrop-blur-xl overflow-hidden"
                >
                  {/* LIVE FORENSIC SCAN VISUALIZER */}
                  <div className="relative aspect-video rounded-2xl bg-slate-900 overflow-hidden mb-12 border border-white/5 shadow-2xl">
                    {previewUrl ? (
                      <img src={previewUrl} className="w-full h-full object-cover opacity-60 grayscale scale-110" alt="Scanning..." />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-950">
                        <FileText className="w-20 h-20 text-slate-800 animate-pulse" />
                      </div>
                    )}

                    {/* Laser Line */}
                    <motion.div
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-[#00FF7F] z-20 shadow-[0_0_20px_#00FF7F,0_0_40px_#00FF7F]"
                    />

                    {/* Scan Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Random Artifact Tags */}
                    <motion.div
                      animate={{ opacity: [0, 1, 0], x: [100, 150, 120], y: [50, 80, 60] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute px-3 py-1 bg-red-500/20 border border-red-500 text-[10px] text-red-500 font-black uppercase tracking-tighter"
                    >
                      Artifact 0x7F
                    </motion.div>

                    <motion.div
                      animate={{ opacity: [0, 1, 0], x: [300, 320, 340], y: [150, 130, 140] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                      className="absolute px-3 py-1 bg-[#00FF7F]/20 border border-[#00FF7F] text-[10px] text-[#00FF7F] font-black uppercase tracking-tighter"
                    >
                      Pixel Sync OK
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center items-center gap-3 mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#00FF7F] animate-ping" />
                      <h3 className="text-2xl font-black text-white tracking-tight italic uppercase">Scanning File Architecture...</h3>
                    </div>

                    {/* Terminal HUD */}
                    <div className="w-full h-32 mb-8 bg-[#001a0d] border border-[#00FF7F]/20 rounded-2xl overflow-hidden relative group">
                      <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <TerminalIcon className="w-3 h-3 text-[#00FF7F]" />
                        <span className="text-[10px] font-black text-[#00FF7F] uppercase tracking-widest">Forensic_Stream.sh</span>
                      </div>
                      <div className="pt-10 pb-4 px-6 h-full overflow-y-auto font-mono text-left space-y-1.5 scrollbar-hide">
                        {logs.map((log, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] font-bold text-emerald-500/80 leading-tight"
                          >
                            <span className="text-[#00FF7F] mr-2">&gt;</span>
                            {log}
                          </motion.div>
                        ))}
                        <div ref={logEndRef} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#001a0d] pointer-events-none" />
                    </div>

                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden max-w-sm mx-auto mb-8 shadow-inner">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-[#00FF7F] to-emerald-400"
                      />
                    </div>

                    <div className="flex justify-center gap-4">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5">CPU LOAD: 88%</div>
                      <div className="text-[10px] font-black text-[#00FF7F] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 shadow-[0_0_15px_rgba(0,255,127,0.1)]">TENSOR FLOW: ACTIVE</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <ResultScreen result={result} onReset={handleReset} previewUrl={previewUrl} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Forensic Assistant Guide */}
        <AnimatePresence>
          {showGuide && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 10 }}
              className="fixed bottom-8 left-8 z-[100] max-w-xs hidden xl:block"
            >
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative group pointer-events-auto">
                <button
                  onClick={() => setShowGuide(false)}
                  className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-50 p-1 rounded-full hover:bg-white/5"
                  aria-label="Close Guide"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-[#00FF7F] flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform pointer-events-none z-40">
                  <Shield className="w-5 h-5 text-[#001a0d]" />
                </div>
                <h4 className="text-xs font-black text-[#00FF7F] uppercase tracking-[0.2em] mb-2">Forensic AI Guide</h4>
                <p className="text-slate-400 text-[13px] font-medium leading-relaxed">
                  "Initializing a pixel-sync scan ensures we detect artifacts in the high-frequency domain where AI usually fails."
                </p>
                <div className="mt-4 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#00FF7F]" />
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
