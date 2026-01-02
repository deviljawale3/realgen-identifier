"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, MapPin, ShieldAlert, Cpu, Activity, Zap, Radio, Search, Crosshair } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HOTSPOTS = [
    { id: 1, x: "18%", y: "35%", city: "San Francisco", threat: "High", color: "#FF3B30", risk: 89, nodeId: "NA-WEST" },
    { id: 2, x: "28%", y: "42%", city: "New York", threat: "Critical", color: "#FF3B30", risk: 94, nodeId: "NA-EAST" },
    { id: 3, x: "48%", y: "30%", city: "London", threat: "Moderate", color: "#FFCC00", risk: 62, nodeId: "EU-WEST" },
    { id: 4, x: "55%", y: "45%", city: "Lagos", threat: "High", color: "#FF3B30", risk: 78, nodeId: "AF-WEST" },
    { id: 5, x: "78%", y: "38%", city: "Beijing", threat: "Critical", color: "#FF3B30", risk: 97, nodeId: "AS-EAST" },
    { id: 6, x: "82%", y: "78%", city: "Sydney", threat: "Stable", color: "#00FF7F", risk: 14, nodeId: "OC-EAST" },
    { id: 7, x: "32%", y: "72%", city: "São Paulo", threat: "High", color: "#FF3B30", risk: 82, nodeId: "SA-EAST" },
];

export function GlobalThreatMap() {
    const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[1]); // Default to NY
    const [mounted, setMounted] = useState(false);
    const [telemetry, setTelemetry] = useState({ anomalies: 4872, traffic: 12.4 });
    const [anomaliesStr, setAnomaliesStr] = useState("4,872");

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setActiveHotspot(HOTSPOTS[Math.floor(Math.random() * HOTSPOTS.length)]);
            setTelemetry(prev => ({
                anomalies: prev.anomalies + Math.floor(Math.random() * 5),
                traffic: Number((prev.traffic + Math.random() * 0.1).toFixed(1))
            }));
            setAnomaliesStr(`4,${Math.floor(Math.random() * 800 + 100)}`);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return (
        <div className="w-full max-w-7xl mx-auto mb-40 px-6">
            <div className="aspect-[21/9] bg-[#000a05] rounded-[3.5rem] animate-pulse" />
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto mb-32 px-6 font-sans">
            <div className="flex flex-col items-center gap-10">

                {/* ADVANCED GLOBAL MONITORING TERMINAL */}
                <div className="relative aspect-[21/7] w-full bg-[#000d07] rounded-[2rem] border border-[#00FF7F]/10 overflow-hidden group shadow-[0_0_60px_rgba(0,255,127,0.06)]">

                    {/* Background Layers */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#001a0d_0%,#000000_100%)]" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#00FF7F_1px,transparent_1px),linear-gradient(90deg,#00FF7F_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Accurate SVG World Map (Stylized) */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-12">
                        <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,127,0.1)]">
                            <defs>
                                <pattern id="worldDotPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                                    <circle cx="1.5" cy="1.5" r="1" fill="#00FF7F" opacity="0.4" />
                                </pattern>
                                <mask id="mapMaskDetailed">
                                    <g fill="white">
                                        <path d="M100,120 L150,100 L250,90 L320,110 L350,150 L380,180 L350,250 L300,280 L250,260 L200,280 L150,250 L120,200 L100,120 Z" />
                                        <path d="M280,290 L320,300 L350,340 L340,400 L300,470 L260,450 L240,400 L250,330 L280,290 Z" />
                                        <path d="M450,230 L530,220 L580,240 L600,300 L580,380 L520,440 L460,420 L420,340 L440,260 L450,230 Z" />
                                        <path d="M450,110 L500,90 L600,80 L750,90 L850,110 L920,150 L940,220 L900,280 L800,310 L700,290 L600,280 L500,250 L450,180 L450,110 Z" />
                                        <path d="M800,360 L860,350 L910,380 L900,440 L830,450 L790,410 L800,360 Z" />
                                        <circle cx="210" cy="80" r="15" />
                                        <path d="M720,200 L760,210 L780,250 L740,260 L720,200 Z" />
                                        <path d="M830,160 L850,150 L870,180 L860,220 L830,160 Z" />
                                    </g>
                                </mask>
                            </defs>
                            <g mask="url(#mapMaskDetailed)" opacity="0.15">
                                <rect width="1000" height="500" fill="#00FF7F" />
                            </g>
                            <rect width="1000" height="500" fill="url(#worldDotPattern)" mask="url(#mapMaskDetailed)" />
                            <g mask="url(#mapMaskDetailed)" stroke="#00FF7F" strokeWidth="0.5" fill="none" opacity="0.1">
                                <path d="M 0,0 L 1000,500 M 0,500 L 1000,0 M 500,0 L 500,500 M 0,250 L 1000,250" />
                            </g>
                        </svg>
                    </div>

                    {/* Interactive Hotspots */}
                    {HOTSPOTS.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute z-20 transition-all duration-1000"
                            style={{ left: spot.x, top: spot.y }}
                        >
                            <button
                                onClick={() => setActiveHotspot(spot)}
                                className="relative flex items-center justify-center p-4 -translate-x-1/2 -translate-y-1/2 outline-none group/pin"
                            >
                                <motion.div
                                    animate={{
                                        scale: activeHotspot.id === spot.id ? [1, 2.2, 1] : [1, 1.2, 1],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-2.5 h-2.5 rounded-full bg-white relative z-10"
                                    style={{ border: `2px solid ${spot.color}`, boxShadow: `0 0 20px ${spot.color}` }}
                                />
                                {activeHotspot.id === spot.id && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute inset-0 bg-[#00FF7F]/10 rounded-full animate-ping" />
                                        <div className="absolute inset-[-15px] border border-[#00FF7F]/10 rounded-full animate-pulse" />
                                    </div>
                                )}
                            </button>

                            <AnimatePresence>
                                {activeHotspot.id === spot.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                        className="absolute left-6 top-0 z-50 pointer-events-none"
                                    >
                                        <div className="bg-[#001a0d]/95 border border-[#00FF7F]/30 p-5 rounded-[2rem] backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-[#00FF7F]/20 min-w-[240px]">
                                            <div className="flex items-center justify-between mb-4 border-b border-[#00FF7F]/10 pb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-1 px-2 rounded bg-[#00FF7F]/10 text-[#00FF7F] text-[8px] font-black tracking-widest uppercase">{spot.nodeId}</div>
                                                    <span className="text-sm font-black text-white italic tracking-tight">{spot.city}</span>
                                                </div>
                                                <Radio className="w-3 h-3 text-[#00FF7F] animate-pulse" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Threat Risk</p>
                                                        <p className="text-2xl font-black text-white italic leading-none">{spot.risk}%</p>
                                                    </div>
                                                    <div className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter`} style={{ backgroundColor: `${spot.color}15`, color: spot.color }}>
                                                        {spot.threat}
                                                    </div>
                                                </div>
                                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${spot.risk}%` }}
                                                        className="h-full bg-current shadow-[0_0_10px_currentColor]"
                                                        style={{ color: spot.color }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* HUD Overlays - Positioned for cinematic feel */}
                    <div className="absolute top-10 left-10 z-30 pointer-events-none">
                        <div className="p-6 rounded-[2.5rem] bg-black/40 border border-[#00FF7F]/10 backdrop-blur-3xl">
                            <div className="flex items-center gap-5">
                                <Activity className="w-5 h-5 text-red-500 animate-pulse" />
                                <span className="text-3xl font-black text-[#00FF7F] italic">{anomaliesStr}</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 z-30 opacity-40 font-mono text-[10px] text-[#00FF7F] tracking-[0.3em]">
                        LAT: 37.77 / L0NG: -122.41
                    </div>

                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00FF7F]/30 to-transparent z-10"
                    />
                </div>

                {/* COMPACT CONTENT BELOW MAP */}
                <div className="w-full max-w-5xl text-center space-y-8">
                    <div className="flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest">
                            <ShieldAlert className="w-4 h-4" /> Threat Protocol: Level 5 (Critical)
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
                            Global <span className="text-[#00FF7F]">Sentinel</span> Monitoring
                        </h2>

                        <p className="text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                            RealGen's global sentinel network autonomously detects, maps, and neutralizes synthetic clusters at the edge. Monitor live propagation data across sovereign boundaries in real-time.
                        </p>
                    </div>

                    {/* Small Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00FF7F]/30 transition-all text-left">
                            <div className="p-3 rounded-xl bg-[#00FF7F]/10 text-[#00FF7F]">
                                <Globe className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white italic leading-none">142 Nations</p>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Geo-Nodes / Coverage</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all text-left">
                            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                                <Cpu className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white italic leading-none">2.4ms</p>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Latency / Speed</p>
                            </div>
                        </div>
                    </div>

                    {/* Ledger Status */}
                    <div className="pt-6 border-t border-white/5 inline-flex items-center gap-6 text-[#00FF7F]">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#00FF7F] animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Neural Ledger: Verified</span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-600 tracking-tighter">NODE_ID: 0x7F...2B9</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
