"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, Brain, User, Zap } from "lucide-react";

interface VerificationEvent {
    id: string;
    location: string;
    type: string;
    status: "Authentic" | "AI Detected";
    confidence: number;
    timestamp: string;
}

const LOCATIONS = ["London, UK", "New York, USA", "Tokyo, JP", "Berlin, DE", "Paris, FR", "Singapore, SG", "Sydney, AU", "Dubai, UAE"];
const FILE_TYPES = ["IMAGE/PNG", "VIDEO/MP4", "DOC/PDF", "IMAGE/JPEG"];

export function LiveAuthRegistry() {
    const [events, setEvents] = useState<VerificationEvent[]>([]);

    useEffect(() => {
        // Initialize with some data
        const initialEvents: VerificationEvent[] = Array.from({ length: 5 }).map((_, i) => ({
            id: Math.random().toString(36).substr(2, 9),
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
            type: FILE_TYPES[Math.floor(Math.random() * FILE_TYPES.length)],
            status: Math.random() > 0.4 ? "Authentic" : "AI Detected",
            confidence: 85 + Math.random() * 14,
            timestamp: "JUST NOW",
        }));
        setEvents(initialEvents);

        // Add new event every 3-5 seconds
        const interval = setInterval(() => {
            const newEvent: VerificationEvent = {
                id: Math.random().toString(36).substr(2, 9),
                location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
                type: FILE_TYPES[Math.floor(Math.random() * FILE_TYPES.length)],
                status: Math.random() > 0.4 ? "Authentic" : "AI Detected",
                confidence: 85 + Math.random() * 14,
                timestamp: "JUST NOW",
            };

            setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10 px-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 text-[#00FF7F] text-[10px] font-black uppercase tracking-widest mb-4">
                        <Globe className="w-3 h-3 animate-pulse" /> Global Live Feed
                    </div>
                    <h2 className="text-4xl font-black text-white italic tracking-tight">Active <span className="text-[#00FF7F]">Verifications</span></h2>
                </div>
                <div className="flex items-center gap-8 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00FF7F]" /> 2.4k Scanned/hr
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" /> 142 Nodes Online
                    </div>
                </div>
            </div>

            <div className="relative space-y-3 overflow-hidden">
                {/* Fading Mask */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001a0d] to-transparent z-10 pointer-events-none" />

                <AnimatePresence mode="popLayout">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: -20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="group relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden hover:bg-white/[0.04] transition-all"
                        >
                            {/* Background Accent */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${event.status === "Authentic" ? "bg-[#00FF7F]" : "bg-red-500"}`} />

                            <div className="flex items-center gap-6 flex-1">
                                <div className={`p-4 rounded-2xl ${event.status === "Authentic" ? "bg-[#00FF7F]/10 text-[#00FF7F]" : "bg-red-500/10 text-red-500"}`}>
                                    {event.status === "Authentic" ? <Shield className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-white font-black tracking-tight">{event.location}</span>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{event.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-black uppercase tracking-widest ${event.status === "Authentic" ? "text-emerald-400" : "text-red-400"}`}>
                                            {event.status}
                                        </span>
                                        <span className="text-slate-700">•</span>
                                        <span className="text-xs font-bold text-slate-500">ID: {event.id}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-10">
                                <div className="text-right">
                                    <p className={`text-2xl font-black ${event.status === "Authentic" ? "text-[#00FF7F]" : "text-red-400"}`}>
                                        {event.confidence.toFixed(1)}%
                                    </p>
                                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Confidence</p>
                                </div>
                                <div className="hidden lg:block">
                                    <Zap className="w-5 h-5 text-slate-800" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
