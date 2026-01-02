"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulate marketing collection
            console.log("Collecting for marketing:", email);
            setSubmitted(true);
        }
    };

    return (
        <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                            Stay Connected
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8">
                            Let's build a <span className="text-[#00FF7F]">Transparent</span> future.
                        </h1>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                            Join our community of digital pioneers. Whether you have a question, a feature request, or just want to stay updated on AI forensics—we're here.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-[#00FF7F]" />
                                </div>
                                <h3 className="text-lg font-bold text-white">General Inquiries</h3>
                                <p className="text-slate-500 text-sm font-medium">For partnership and support questions.</p>
                                <p className="text-[#00FF7F] font-bold text-sm">deejayailabs3@gmail.com</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Feedback Space</h3>
                                <p className="text-slate-500 text-sm font-medium">Tell us how we can improve the suite.</p>
                                <p className="text-emerald-400 font-bold text-sm">Feedback Portal &rarr;</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#00FF7F]/20 to-transparent blur-3xl opacity-30" />
                        <div className="relative p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <h2 className="text-3xl font-black text-white mb-4">Join our Lab</h2>
                                        <p className="text-slate-400 font-medium mb-10">
                                            Be the first to know about new detection models, forensic insights, and product updates.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-4">Email Address</label>
                                                <Input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="h-16 px-6 rounded-2xl bg-white/[0.03] border-white/10 text-white placeholder:text-slate-600 focus:border-[#00FF7F]/50 focus:ring-1 focus:ring-[#00FF7F]/50 transition-all font-bold"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full h-16 rounded-2xl bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#00FF7F]/20 flex items-center justify-center gap-3"
                                            >
                                                Subscribe to Insights
                                                <ArrowRight className="w-5 h-5" />
                                            </Button>
                                            <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                                Zero Spam. Forensic precision only.
                                            </p>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 rounded-3xl bg-[#00FF7F]/10 border border-[#00FF7F]/20 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 className="w-10 h-10 text-[#00FF7F]" />
                                        </div>
                                        <h2 className="text-3xl font-black text-white mb-4">You're in the Loop</h2>
                                        <p className="text-slate-400 font-medium mb-10">
                                            Thanks for joining. We'll send the latest forensic updates straight to your inbox.
                                        </p>
                                        <Button
                                            onClick={() => setSubmitted(false)}
                                            variant="outline"
                                            className="rounded-full border-white/10 text-white font-bold px-8"
                                        >
                                            Back
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
