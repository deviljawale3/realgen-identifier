import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, CheckCircle, Zap } from "lucide-react";
import { LiveAuthRegistry } from "@/components/live-auth-registry";
import { GlobalThreatMap } from "@/components/global-threat-map";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FF7F]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Know What's <span className="bg-gradient-to-r from-[#00FF7F] to-emerald-400 bg-clip-text text-transparent">Real</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed text-balance">
            Instantly check if a photo or video was made by an AI or a real person. Simple, fast, and private.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
            <Button asChild size="lg">
              <Link href="/app/analyze">Initialize Forensic Lab</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/app">Access Archive</Link>
            </Button>
          </div>

          {/* NEXT LEVEL: Global Threat Map */}
          <div className="mt-40">
            <GlobalThreatMap />
          </div>

          <LiveAuthRegistry />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00FF7F]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#00FF7F]/10 flex items-center justify-center mb-6 border border-[#00FF7F]/20 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-[#00FF7F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-left">Totally Private</h3>
              <p className="text-slate-400 text-left leading-relaxed">
                We don't save your files. Everything is checked instantly and then cleared.
              </p>
            </div>

            <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-left">Easy to Read</h3>
              <p className="text-slate-400 text-left leading-relaxed">
                No complex terms. Just a clear answer on who or what made the file.
              </p>
            </div>

            <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-left">Quick Results</h3>
              <p className="text-slate-400 text-left leading-relaxed">
                Get your report in seconds. Works for images, videos, and documents.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

