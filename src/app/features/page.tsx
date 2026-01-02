import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock, Eye, BarChart3, Globe } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Advanced Features | Next-Gen AI Detection & Forensics",
  description: "Discover the suite of forensic tools behind RealGen. From Spectral Analysis to Pixel-Pattern Recognition, our platform offers the highest precision for identifying synthetic content.",
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Advanced AI Detection",
      description: "Our high-precision models identify artifacts left behind by GPT-4, Midjourney, and other modern AI tools with up to 99% accuracy.",
      icon: <Zap className="w-6 h-6 text-[#00FF7F]" />,
      color: "from-[#00FF7F]/10 to-[#00FF7F]/5",
      border: "border-[#00FF7F]/20"
    },
    {
      title: "Digital DNA Reports",
      description: "Get a deep dive into every file. We analyze frequency domains, pixel patterns, and metadata to provide a definitive 'Origin Proof'.",
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/20"
    },
    {
      title: "Zero-Knowledge Privacy",
      description: "We never store your files. Analysis happens in volatile memory and is purged the moment your report is generated.",
      icon: <Lock className="w-6 h-6 text-green-400" />,
      color: "from-green-500/10 to-green-500/5",
      border: "border-green-500/20"
    },
    {
      title: "Exportable Proofs",
      description: "Download verified certificates to share with clients or use as evidence. Each report comes with a unique, verifiable hash.",
      icon: <BarChart3 className="w-6 h-6 text-[#00FF7F]" />,
      color: "from-[#00FF7F]/10 to-[#00FF7F]/5",
      border: "border-[#00FF7F]/20"
    },
    {
      title: "Open Source Core",
      description: "Trust but verify. Our core detection logic is open-source, allowing researchers to audit and improve our methodology.",
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/20"
    },
    {
      title: "Enterprise Shield",
      description: "Designed for newsrooms and legal teams, our platform offers the reliability needed for professional-grade verification.",
      icon: <Shield className="w-6 h-6 text-green-400" />,
      color: "from-green-500/10 to-green-500/5",
      border: "border-green-500/20"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Powerful Tools for <span className="bg-gradient-to-r from-[#00FF7F] to-emerald-400 bg-clip-text text-transparent">Truth</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 font-medium">
            RealGen Identifier combines cutting-edge AI research with a commitment to privacy and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative p-8 rounded-[2rem] border ${feature.border} bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] px-12 h-16 text-lg font-black shadow-2xl shadow-[#00FF7F]/20 transition-all hover:scale-105 active:scale-95">
            <Link href="/app/analyze">Start Your First Check</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
