"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function MarketingPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds, only if not already dismissed in this session
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem("realgen_cta_dismissed");
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem("realgen_cta_dismissed", "true");
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log("Subscribing for marketing:", email);
            setSubscribed(true);
            setTimeout(() => {
                handleDismiss();
            }, 3000);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100] w-[380px] hidden md:block"
                >
                    <div className="relative p-8 rounded-[2.5rem] bg-[#001a0d] border border-[#00FF7F]/30 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,255,127,0.1)] overflow-hidden">
                        {/* Background Decorative */}
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldCheck className="w-20 h-20 text-[#00FF7F]" />
                        </div>

                        <button
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!subscribed ? (
                            <>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 text-[#00FF7F] text-[10px] font-black uppercase tracking-widest mb-6">
                                    <Sparkles className="w-3 h-3" /> Exclusive Lab Access
                                </div>

                                <h3 className="text-2xl font-black text-white mb-3">Master Digital <span className="text-[#00FF7F]">Forensics</span></h3>
                                <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                                    Join 10,000+ experts receiving our weekly AI artifact prevent guide and priority scan access.
                                </p>

                                <form onSubmit={handleSubscribe} className="space-y-4">
                                    <Input
                                        type="email"
                                        placeholder="Enter your lab email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 bg-white/[0.03] border-white/10 text-white rounded-xl focus:border-[#00FF7F]/50"
                                    />
                                    <Button type="submit" className="w-full h-12 bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] font-black rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-[#00FF7F]/10">
                                        Get Forensic Access
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-6"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 flex items-center justify-center mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-[#00FF7F]" />
                                </div>
                                <h3 className="text-xl font-black text-white mb-2">Access Granted</h3>
                                <p className="text-slate-500 text-sm font-medium">Check your inbox for the DNA guide.</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
