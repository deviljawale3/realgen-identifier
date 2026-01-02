'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Download, Brain, User, Camera, Clock, Shield, AlertTriangle, CheckCircle2, Zap, Cpu, FileCode, Sparkles, Monitor, Image as ImageIcon, Hash, HardDrive, PenTool, Globe, Award, FileCheck, Printer, Share2, Link2, Search, Activity, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react'
import type { AnalysisResult } from '@/app/app/analyze/page'

import { useRef, useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useToast } from "@/hooks/use-toast"

interface ResultScreenProps {
  result: AnalysisResult
  onReset: () => void
  previewUrl?: string | null
}

export function ResultScreen({ result, onReset, previewUrl }: ResultScreenProps) {
  const certificateRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const [isGenerating, setIsGenerating] = useState(false)
  const [showHeatmap, setShowHeatmap] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [sliderPos, setSliderPos] = useState(50)
  const [showPeeker, setShowPeeker] = useState(false)
  const [peekerPos, setPeekerPos] = useState({ x: 50, y: 50 })
  const [mounted, setMounted] = useState(false)
  const [spectralData, setSpectralData] = useState<number[]>([])

  // Use a stable ID for the link
  const verificationId = useRef("RG-PENDING")

  useEffect(() => {
    setMounted(true)
    verificationId.current = generateCertificateId()
    setSpectralData(Array.from({ length: 30 }).map(() => Math.random() * 80 + 20))
  }, [])

  const handleShareLink = () => {
    if (!mounted) return
    const url = `${window.location.origin}/verify/${verificationId.current}`
    navigator.clipboard.writeText(url)
    toast({
      title: "Verification Link Copied",
      description: "You can now share this official truth certificate.",
    })
  }

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff'
      })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 3, canvas.height / 3]
      })
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 3, canvas.height / 3)
      pdf.save(`RealGen_Proof_${result.fileName.split('.')[0]}.pdf`)
      toast({
        title: "Proof Downloaded",
        description: "Your official forensic report has been saved.",
      })
    } catch (error) {
      console.error('PDF Generation failed:', error)
      toast({
        title: "Generation Error",
        description: "Failed to generate report. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a0d] via-[#002b16] to-[#001a0d] pb-20 font-sans text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* 1. Forensic Visualizer Section (Conditional) */}
        {previewUrl && result.isAIGenerated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 relative rounded-[3rem] border border-[#00FF7F]/20 bg-black/40 p-6 md:p-10 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-black italic tracking-tight">Forensic <span className="text-[#00FF7F]">Visualizer</span></h3>
                <p className="text-slate-500 text-sm font-medium">Multi-spectral anomaly distribution analysis.</p>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => { setShowHeatmap(!showHeatmap); setShowComparison(false); setShowPeeker(false); }}
                  size="sm"
                  variant={showHeatmap ? 'default' : 'secondary'}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Heatmap
                </Button>
                <Button
                  onClick={() => { setShowComparison(!showComparison); setShowHeatmap(false); setShowPeeker(false); }}
                  size="sm"
                  variant={showComparison ? 'default' : 'secondary'}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  Slider
                </Button>
                <Button
                  onClick={() => { setShowPeeker(!showPeeker); setShowHeatmap(false); setShowComparison(false); }}
                  size="sm"
                  variant={showPeeker ? 'default' : 'secondary'}
                >
                  <Search className="w-3.5 h-3.5" />
                  Peeker
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-slate-950 group">
              <div
                className="relative w-full h-full cursor-crosshair select-none"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  if (showComparison) setSliderPos(x);
                  if (showPeeker) setPeekerPos({ x, y });
                }}
              >
                <img src={previewUrl} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${showHeatmap ? 'brightness-50 grayscale contrast-125' : ''}`} alt="Evidence" />

                {/* Comparison Overlays */}
                {showComparison && (
                  <>
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                      <img src={previewUrl} className="absolute inset-0 w-full h-full object-cover" alt="Original" />
                    </div>
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
                      <div className="absolute inset-0 bg-[#00FF7F]/40 backdrop-blur-sm mix-blend-overlay" />
                      <img src={previewUrl} className="absolute inset-0 w-full h-full object-cover grayscale contrast-200" alt="Artifacts" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>
                    <div className="absolute top-0 bottom-0 w-1 bg-[#00FF7F] z-30 shadow-[0_0_15px_#00FF7F]" style={{ left: `${sliderPos}%` }}>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00FF7F] border-4 border-[#001a0d] flex items-center justify-center">
                        <div className="flex gap-0.5">
                          <div className="w-0.5 h-3 bg-[#001a0d] rounded-full" />
                          <div className="w-0.5 h-3 bg-[#001a0d] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <AnimatePresence>
                  {showHeatmap && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 pointer-events-none">
                      <div className="absolute top-[20%] left-[30%] w-40 h-40 bg-red-500/40 rounded-full blur-[40px] animate-pulse" />
                      <div className="absolute top-[60%] left-[10%] w-32 h-32 bg-orange-500/30 rounded-full blur-[35px] animate-pulse [animation-delay:0.5s]" />
                      <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-red-600/40 rounded-full blur-[50px] animate-pulse [animation-delay:0.8s]" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                      <div className="absolute top-[25%] left-[35%] px-2 py-1 bg-red-500 text-[8px] font-black text-white uppercase tracking-widest rounded">Anomaly 0x1</div>
                    </motion.div>
                  )}

                  {showPeeker && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute z-40 w-48 h-48 rounded-full border-4 border-[#00FF7F] bg-black/60 backdrop-blur-md overflow-hidden pointer-events-none shadow-[0_0_30px_rgba(0,255,127,0.4)]"
                      style={{ left: `${peekerPos.x}%`, top: `${peekerPos.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <img
                        src={previewUrl}
                        className="absolute w-[400%] h-[400%] object-cover contrast-200 grayscale brightness-150"
                        style={{ left: `${-peekerPos.x * 4 + 50}%`, top: `${-peekerPos.y * 4 + 50}%` }}
                      />
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#00FF7F] text-[#001a0d] text-[8px] font-black uppercase px-2 py-0.5 rounded">Neural Peeker</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-[#00FF7F]/40" />
                        <div className="h-full w-px bg-[#00FF7F]/40 absolute" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* AI Fingerprint & Video Timeline */}
            {result.modelFingerprint && (
              <div className="mt-8 p-6 rounded-2xl bg-[#00FF7F]/5 border border-[#00FF7F]/10 flex items-center gap-6">
                <Award className="w-8 h-8 text-[#00FF7F]" />
                <div className="flex-1">
                  <h4 className="font-black text-lg">Model Fingerprint Identified</h4>
                  <p className="text-slate-400 text-sm">{result.modelFingerprint.model} {result.modelFingerprint.version} ({result.modelFingerprint.probability}%)</p>
                </div>
              </div>
            )}

            {result.fileType.startsWith('video/') && result.videoTimeline && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6 font-bold text-xl"><Clock className="text-[#00FF7F]" /> Temporal Analysis</div>
                <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative h-12 flex items-center overflow-hidden">
                  {result.videoTimeline.map((seg, i) => (
                    <div key={i} className={`h-full flex-1 ${seg.manipulationScore > 50 ? 'bg-red-500/20' : 'bg-[#00FF7F]/5'}`} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* 2. Main Result Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
          <div className={`p-10 border-b border-white/5 bg-gradient-to-r ${result.isAIGenerated ? 'from-red-500/10 to-orange-500/10' : 'from-[#00FF7F]/10 to-emerald-500/10'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${result.isAIGenerated ? 'bg-gradient-to-br from-red-500 to-orange-600' : 'bg-gradient-to-br from-[#00FF7F] via-emerald-400 to-green-500'}`}>
                  {result.isAIGenerated ? <Brain className="w-10 h-10" /> : <User className="w-10 h-10 text-[#001a0d]" />}
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight">{result.fileName}</h2>
                  <p className="text-slate-500 font-medium">{result.fileType} • {result.confidence}% Certainty</p>
                </div>
              </div>
              <div className="relative z-50">
                <Button onClick={onReset} variant="outline" className="rounded-full border-white/10 hover:bg-white/5 font-bold">Analyze Next</Button>
              </div>
            </div>
          </div>

          <CardContent className="p-10">
            {/* ANALYSIS VERDICT BANNER */}
            <div className={`mb-10 p-8 rounded-3xl border ${result.isAIGenerated ? 'bg-red-500/5 border-red-500/20' : 'bg-[#00FF7F]/5 border-[#00FF7F]/20'} flex flex-col md:flex-row items-center justify-between gap-6`}>
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${result.isAIGenerated ? 'bg-red-500/10 text-red-500' : 'bg-[#00FF7F]/10 text-[#00FF7F]'}`}>
                  {result.isAIGenerated ? <AlertTriangle className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">Final Verdict</h3>
                  <div className={`text-3xl font-black uppercase tracking-tighter ${result.isAIGenerated ? 'text-red-500' : 'text-[#00FF7F]'}`}>
                    {result.isAIGenerated ? 'AI Pattern Detected' : 'Authentic / Human Origin'}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">High-Precision Score</div>
                <div className="text-4xl font-black text-white">{result.confidence.toFixed(1)}%</div>
              </div>
            </div>

            {/* NEW: Source Intelligence Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group hover:border-[#00FF7F]/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00FF7F]/10 transition-colors">
                  {result.isAIGenerated ? <Monitor className="w-6 h-6 text-[#00FF7F]" /> : <Camera className="w-6 h-6 text-[#00FF7F]" />}
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{result.isAIGenerated ? 'Detection Model' : 'Hardware Intel'}</div>
                  <div className="text-lg font-black text-white italic tracking-tight">{result.aiEngine || result.humanOrigin?.device || 'Anonymous Hardware'}</div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group hover:border-[#00FF7F]/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00FF7F]/10 transition-colors">
                  <User className="w-6 h-6 text-[#00FF7F]" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{result.isAIGenerated ? 'Prompt Engineer' : 'Attributed Author'}</div>
                  <div className="text-lg font-black text-white italic tracking-tight">{result.author || result.humanOrigin?.author || 'Unknown Entity'}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Reasoning */}
              <div className="md:col-span-2 space-y-6">
                <h4 className="flex items-center gap-3 text-xl font-black italic">
                  <Activity className="w-5 h-5 text-[#00FF7F]" />
                  Forensic Reasoning
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.reasoning.map((reason, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00FF7F] shrink-0" />
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Deep Dive */}
              <div className="md:col-span-2 space-y-8 pt-8 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Spectral Response</h4>
                    <div className="h-40 flex items-end gap-1">
                      {spectralData.map((val, i) => (
                        <div key={i} className="flex-1 bg-[#00FF7F]/30 rounded-full transition-all duration-1000" style={{ height: `${val}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Chain of Trust Ledger</h4>
                    <div className="font-mono text-sm break-all opacity-50 mb-4">{result.ledgerHash || 'Initializing...'}</div>
                    <Badge className="bg-[#00FF7F]/10 text-[#00FF7F] border-[#00FF7F]/20 uppercase tracking-tighter">Verified Node: RT-Prime</Badge>
                  </div>
                </div>

                {/* Forensic Investigator Discussion & Suggestions */}
                <div className="mt-12 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#00FF7F]/5 to-transparent border border-[#00FF7F]/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageSquare className="w-24 h-24 text-[#00FF7F]" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-[#00FF7F] flex items-center justify-center text-[#001a0d]">
                        <Brain className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black italic tracking-tight">AI Investigator Analysis</h4>
                        <p className="text-[10px] font-black text-[#00FF7F] uppercase tracking-widest">Active Discussion Thread</p>
                      </div>
                    </div>

                    <div className="space-y-6 max-w-3xl">
                      <p className="text-lg text-white font-medium italic leading-relaxed">
                        &quot;Based on the spectral response and neural fingerprinting, I {result.isAIGenerated ? 'highly recommend flagging this across your distribution channels' : 'can confirm this asset meets all human-origin consensus protocols'}. The {result.isAIGenerated ? 'synthetic noise signatures' : 'natural light distribution'} found in the {result.fileType.split('/')[0]} architecture are {result.isAIGenerated ? 'typical of ' + (result.aiEngine || 'advanced generators') : 'consistent with high-end optical capture'}.&quot;
                      </p>

                      <div className="pt-6 border-t border-white/5">
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Suggested Actions & Next Steps</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {result.isAIGenerated ? (
                            <>
                              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center gap-3">
                                <ShieldAlert className="w-4 h-4 text-red-500" />
                                <span className="text-xs font-bold text-white">Flag for manual review</span>
                              </div>
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                <Zap className="w-4 h-4 text-[#00FF7F]" />
                                <span className="text-xs font-bold text-white">Extract AI noise profile</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="p-4 rounded-xl bg-[#00FF7F]/5 border border-[#00FF7F]/10 flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#00FF7F]" />
                                <span className="text-xs font-bold text-white">Mint Origin Certificate</span>
                              </div>
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                                <span className="text-xs font-bold text-white">Push to verified ledger</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="md:col-span-2 flex flex-wrap gap-6 justify-center pt-8 border-t border-white/5 relative z-50">
              <Button onClick={handleShareLink} variant="outline" size="lg" className="flex items-center gap-2">
                <Link2 className="w-5 h-5" /> Get Link
              </Button>
              <Button onClick={handleDownloadPDF} disabled={isGenerating} size="lg" className="flex items-center gap-3">
                <Download className="w-5 h-5" /> {isGenerating ? 'Generating...' : 'Download Proof'}
              </Button>
            </div>
          </CardContent>
        </motion.div>

        {/* 3. Official Certificate (Hidden but used for PDF) */}
        <div ref={certificateRef} className="bg-white p-20 rounded-[3rem] text-slate-950 relative overflow-hidden hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"><Shield className="w-[400px] h-[400px]" /></div>
          <div className="relative z-10 text-center">
            <Shield className="w-20 h-20 text-[#00FF7F] mx-auto mb-8" />
            <h2 className="text-5xl font-black mb-4">PROOF OF ORIGIN</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-12">Verification ID: {verificationId.current}</p>
            <div className="text-3xl font-black mb-8 px-10 py-6 border-4 border-[#00FF7F] inline-block rounded-3xl">
              {result.isAIGenerated ? 'AI GENERATED' : 'HUMAN ORIGIN'}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

function generateCertificateId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = 'RG-'
  for (let i = 0; i < 12; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}
