import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, ShieldCheck, Server, Code2, BookOpen, ChevronRight, FileCode, Book, Shield, Zap, Terminal, Search } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Documentation | Integrate the RealGen Forensic Engine",
  description: "Access our comprehensive documentation for integrating AI detection and forensic analysis into your own applications. Explore our API, SDKs, and open-source methodology.",
};

export default function DocsPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: <Rocket className="w-6 h-6 text-[#00FF7F]" />,
      items: ["Installation Guide", "Environment Setup", "First Analysis"]
    },
    {
      title: "Core Concepts",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      items: ["Detection Methodology", "Confidence Scoring", "Data Retention"]
    },
    {
      title: "Deployment",
      icon: <Server className="w-6 h-6 text-green-400" />,
      items: ["Self-Hosting", "Docker Setup", "Cloud Deployment"]
    },
    {
      title: "API Reference",
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      items: ["Endpoint Overview", "Request Objects", "Webhooks"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#00FF7F]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-emerald-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF7F]/20 bg-[#00FF7F]/5 text-[#00FF7F] text-xs font-black uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              Intelligence Blueprint
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 italic leading-[0.9]">
              The Blueprint of <span className="bg-gradient-to-r from-[#00FF7F] to-emerald-400 bg-clip-text text-transparent">RealGen</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Everything you need to integrate, deploy, and understand our high-precision content verification engine.
            </p>
          </div>

          <Button asChild className="bg-[#00FF7F] text-[#001a0d] hover:bg-[#00e672] rounded-full h-16 px-10 font-black shadow-xl shadow-[#00FF7F]/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
            <Link href="/app/analyze" className="flex items-center gap-2">
              Launch Lab <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <Card key={idx} className="group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-[#00FF7F]/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00FF7F]/10 transition-all duration-500">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-black text-white italic tracking-tight">{cat.title}</h2>
              </div>

              <ul className="space-y-5">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-slate-400 hover:text-[#00FF7F] cursor-pointer transition-colors group/item">
                    <span className="font-bold text-lg">{item}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#00FF7F]" />
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 p-16 rounded-[4rem] border border-white/5 bg-gradient-to-br from-[#00FF7F]/5 to-transparent backdrop-blur-3xl text-center">
          <h3 className="text-3xl font-black text-white mb-6 italic">Need Forensic Support?</h3>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium text-lg">
            Our team and community are here to help you get the most out of RealGen Identifier's neural network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="outline" className="h-14 px-10 border-white/10 text-white hover:bg-white/5 rounded-full font-bold transition-all hover:scale-105">
              Join Intel Discord
            </Button>
            <Button className="h-14 px-10 bg-white text-black hover:bg-slate-200 rounded-full font-black shadow-2xl transition-all hover:scale-105">
              Open Technical Ticket
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
