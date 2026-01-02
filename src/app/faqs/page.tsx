"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, ShieldCheck, Zap, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQS = [
    {
        question: "How accurate is the RealGen detection engine?",
        answer: "Our neural network analysis achieves over 99% accuracy across standard image and video formats. We use multi-spectral forensic analysis to detect artifacts in high-frequency domains where generative AI models typically leave synthetic fingerprints.",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        question: "Does RealGen store the files I upload?",
        answer: "No. Privacy is our core protocol. Files are processed in volatile memory (RAM) and are instantly purged after the analysis is complete. We do not maintain any permanent storage of your sensitive data.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        question: "What file types do you support?",
        answer: "Currently, we support common image formats (JPG, PNG, WebP), video formats (MP4, WebM), and document files (PDF, DOCX). We are constantly updating our models to support emerging generative media types.",
        icon: <Globe className="w-5 h-5" />
    },
    {
        question: "What is a 'Verification Certificate'?",
        answer: "A Verification Certificate is a digitally signed PDF proof of our forensic analysis. It contains a unique file hash, neural network confidence scores, and a timestamp, making it suitable for legal or professional documentation.",
        icon: <HelpCircle className="w-5 h-5" />
    },
    {
        question: "Can I use the API for enterprise applications?",
        answer: "Yes. While our community dashboard is open-source, we offer enterprise-grade hosted infrastructure with high-throughput API access, custom SLAs, and dedicated forensic support.",
        icon: <MessageCircle className="w-5 h-5" />
    }
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-32">
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 text-[#00FF7F] text-xs font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        Support Intelligence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-none"
                    >
                        Forensic <span className="text-[#00FF7F]">FAQ's</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Everything you need to know about digital truth, neural detection, and our high-precision forensic infrastructure.
                    </motion.p>
                </header>

                <div className="space-y-4 mb-24">
                    {FAQS.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${activeIndex === index
                                    ? "bg-white/[0.04] border-[#00FF7F]/30 shadow-[0_0_40px_rgba(0,255,127,0.05)]"
                                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-8 text-left flex items-center justify-between gap-6"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`p-3 rounded-2xl transition-colors duration-500 ${activeIndex === index ? "bg-[#00FF7F] text-[#001a0d]" : "bg-white/5 text-[#00FF7F]"
                                        }`}>
                                        {faq.icon}
                                    </div>
                                    <span className="text-xl font-black text-white tracking-tight">{faq.question}</span>
                                </div>
                                <div className={`p-2 rounded-full border transition-all duration-500 ${activeIndex === index ? "border-[#00FF7F]/50 rotate-0" : "border-white/10 rotate-180"
                                    }`}>
                                    {activeIndex === index ? (
                                        <Minus className="w-4 h-4 text-[#00FF7F]" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-slate-500" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pl-24">
                                            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-2xl border-l border-[#00FF7F]/20 pl-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-12 rounded-[3rem] bg-gradient-to-br from-[#00FF7F]/10 via-transparent to-transparent border border-[#00FF7F]/10 text-center"
                >
                    <h2 className="text-3xl font-black text-white mb-4 italic">Still have inquiries?</h2>
                    <p className="text-slate-400 font-medium mb-10 max-w-sm mx-auto">
                        Our forensic specialists are available for custom verification and enterprise integration support.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="h-14 px-8 rounded-full bg-[#00FF7F] text-[#001a0d] font-black hover:scale-105 transition-all shadow-xl shadow-[#00FF7F]/20">
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                        <Button asChild variant="outline" className="h-14 px-8 rounded-full border-white/10 text-white hover:bg-white/5 font-bold">
                            <Link href="/docs">Consult Docs</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
