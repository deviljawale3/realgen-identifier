import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';
import { Github, Book, Shield, ExternalLink, Globe, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source Initiative | Collaborative AI Forensics",
  description: "Explore RealGen Labs' commitment to open-source transparency. Access our core detection models on GitHub and help build a more trustworthy digital future.",
};

export default function OpenSourcePage() {
  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF7F]/20 bg-[#00FF7F]/5 text-[#00FF7F] text-xs font-black uppercase tracking-widest mb-6">
            Transparency Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-none">
            Trust through <span className="text-[#00FF7F]">Openness</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            RealGen Identifier is designed to be forkable, auditable, and easy to self-host. Join the global effort for digital integrity.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-[#00FF7F]/30 transition-all duration-500">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00FF7F]/10 transition-colors">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white italic tracking-tight">Core Repository</h2>
            </div>

            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
              Access the source code, detection algorithms, and forensic models that power the RealGen engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-16 px-8 rounded-2xl bg-[#00FF7F] text-[#001a0d] font-black italic hover:scale-[1.03] transition-all shadow-xl shadow-[#00FF7F]/20">
                <Link href="/docs" className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Read Docs
                </Link>
              </Button>
              <Button variant="outline" className="h-16 px-8 rounded-2xl border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </Card>

          <Card className="group p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-emerald-400/30 transition-all duration-500">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/10 transition-colors">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-black text-white italic tracking-tight">Licensing</h2>
            </div>

            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
              Our core is protected by the MIT License, ensuring freedom of use while maintaining the integrity of the project.
            </p>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-black text-slate-600 uppercase tracking-widest">MIT License v2.0</span>
              <Button asChild variant="link" className="text-[#00FF7F] font-black uppercase tracking-[0.2em] text-[10px] hover:no-underline">
                <Link href="/app" className="flex items-center gap-2 group/link">
                  Open Application Node
                  <LayoutDashboard className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-20 p-16 rounded-[4rem] border border-white/5 bg-gradient-to-tr from-[#00FF7F]/5 to-transparent text-center">
          <Globe className="w-12 h-12 text-[#00FF7F] mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl font-black text-white mb-6 italic">Build the Future of Truth</h2>
          <p className="text-slate-400 font-medium mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            We're looking for researchers and developers to help us combat synthetic misinformation globally.
          </p>
          <Button asChild className="h-14 px-10 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all">
            <Link href="/contact">Join the Collective</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
