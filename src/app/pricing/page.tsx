import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Shield, Users, Building2, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Infrastructure | Enterprise AI Detection",
  description: "Explore RealGen identifier's open-source community edition and our enterprise-grade hosted infrastructure options.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Community",
      price: "$0",
      description: "Self-hosted, open-source forensic engine.",
      icon: <Shield className="w-8 h-8 text-[#00FF7F]" />,
      features: ["Open-Source Core", "Basic Analysis", "Community Support", "Manual Updates"],
      buttonText: "Get the Code",
      href: "/open-source",
      primary: false
    },
    {
      name: "Teams",
      price: "Custom",
      description: "High-throughput infrastructure for agile teams.",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      features: ["SSO & Audit Logs", "API Access", "Usage Analytics", "Priority Support"],
      buttonText: "View Documentation",
      href: "/docs",
      primary: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Mission-critical verification for legal & newsrooms.",
      icon: <Building2 className="w-8 h-8 text-white" />,
      features: ["Private Models", "On-Prem Deploy", "99.9% SLA", "Dedicated Forensic Team"],
      buttonText: "Connect to Lab",
      href: "/app",
      primary: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF7F]/20 bg-[#00FF7F]/5 text-[#00FF7F] text-xs font-black uppercase tracking-widest mb-6">
            Infrastructure Access
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-none">
            Scale your <span className="text-[#00FF7F]">Truth</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Open-source core by default. Enterprise-grade infrastructure for serious verification.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`relative p-10 rounded-[3rem] border backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 ${tier.primary
                ? "bg-white/[0.04] border-[#00FF7F]/30 shadow-[0_0_50px_rgba(0,255,127,0.1)]"
                : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}>
              {tier.primary && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00FF7F] text-[#001a0d] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Deployed
                </div>
              )}

              <div className="mb-8">{tier.icon}</div>
              <h3 className="text-2xl font-black text-white italic mb-2 tracking-tight">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-white">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ Month</span>}
              </div>
              <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">{tier.description}</p>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00FF7F]/10 flex items-center justify-center border border-[#00FF7F]/20">
                      <Check className="w-3 h-3 text-[#00FF7F]" />
                    </div>
                    <span className="text-sm font-bold text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className={`w-full h-16 rounded-2xl font-black text-lg transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 ${tier.primary
                  ? "bg-[#00FF7F] text-[#001a0d] hover:bg-[#00e672] shadow-xl shadow-[#00FF7F]/20"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                }`}>
                <Link href={tier.href}>
                  {tier.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
