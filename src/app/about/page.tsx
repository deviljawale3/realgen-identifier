import { Mail, Shield, Zap, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Mission | Fighting for Truth in Digital Media",
    description: "Learn about RealGen Labs' mission to protect digital integrity and our commitment to privacy-first AI detection forensics.",
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-32">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 text-[#00FF7F] text-xs font-black uppercase tracking-widest mb-6">
                        Our Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8">
                        Fighting for <span className="bg-gradient-to-r from-[#00FF7F] to-emerald-400 bg-clip-text text-transparent italic">Truth</span> in a Digital Age
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        RealGen Identifier was built with one goal: to protect the integrity of digital content. In a world of synthetic media, we provide the tools to know what's real.
                    </p>
                </div>

                <div className="grid gap-12 mb-24">
                    <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                        <h2 className="text-3xl font-black text-white mb-6">Who We Are</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6 font-medium">
                            We are a collective of researchers, designers, and open-source advocates passionate about digital forensics. We believe that transparency shouldn't be a premium feature—it should be the standard.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                            Our technology uses advanced neural network analysis to detect patterns that are invisible to the human eye, providing a definitive proof of origin for images, videos, and documents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                            <Shield className="w-10 h-10 text-[#00FF7F] mb-6" />
                            <h3 className="text-xl font-black text-white mb-3">Privacy First</h3>
                            <p className="text-slate-500 font-medium text-sm">Your files never touch our permanent storage. Analysis happens in-memory and is wiped instantly.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                            <Zap className="w-10 h-10 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-black text-white mb-3">Lightning Fast</h3>
                            <p className="text-slate-500 font-medium text-sm">Using edge-computing, we deliver forensic reports in seconds, not minutes.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                            <Globe className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="text-xl font-black text-white mb-3">Community Led</h3>
                            <p className="text-slate-500 font-medium text-sm">Our core detection algorithms are open for audit, ensuring trust through transparency.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center p-12 rounded-[3rem] bg-gradient-to-br from-[#00FF7F]/10 via-transparent to-transparent border border-[#00FF7F]/10">
                    <Heart className="w-12 h-12 text-[#00FF7F] mx-auto mb-6 fill-[#00FF7F]/20" />
                    <h2 className="text-3xl font-black text-white mb-4">Get in Touch</h2>
                    <p className="text-slate-400 font-medium mb-8">
                        Have questions or want to collaborate? Reach out to our labs.
                    </p>
                    <a
                        href="mailto:deejayailabs3@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00FF7F] text-[#001a0d] font-black hover:scale-105 transition-all shadow-xl shadow-[#00FF7F]/20"
                    >
                        <Mail className="w-5 h-5" />
                        deejayailabs3@gmail.com
                    </a>
                </div>
            </div>
        </main>
    );
}
