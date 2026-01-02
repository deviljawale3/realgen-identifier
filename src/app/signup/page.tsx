import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Mail, Lock, ShieldPlus, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen bg-[#001a0d] overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#00FF7F]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center px-6 py-20">
        <Card className="w-full max-w-lg border-white/10 bg-white/[0.02] backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00FF7F]/10 rounded-full blur-3xl group-hover:bg-[#00FF7F]/20 transition-all duration-700" />

          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-[#00FF7F]/10 border border-[#00FF7F]/20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#00FF7F]/5">
              <ShieldPlus className="w-10 h-10 text-[#00FF7F]" />
            </div>
            <h1 className="text-4xl font-black text-white italic tracking-tighter mb-4">Investigator Onboarding</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Create your forensic credentials</p>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Full Identity Name</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                <input
                  className="w-full h-16 rounded-2xl border border-white/5 bg-white/5 px-16 text-white font-bold outline-none placeholder:text-slate-700 focus:border-[#00FF7F]/30 focus:bg-white/[0.08] transition-all"
                  placeholder="Agent 001"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Communication: Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                <input
                  className="w-full h-16 rounded-2xl border border-white/5 bg-white/5 px-16 text-white font-bold outline-none placeholder:text-slate-700 focus:border-[#00FF7F]/30 focus:bg-white/[0.08] transition-all"
                  placeholder="forensics@realgen.sh"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Secret: Password</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                <input
                  className="w-full h-16 rounded-2xl border border-white/5 bg-white/5 px-16 text-white font-bold outline-none placeholder:text-slate-700 focus:border-[#00FF7F]/30 focus:bg-white/[0.08] transition-all"
                  placeholder="••••••••••••"
                  type="password"
                />
              </div>
            </div>

            <div className="py-4">
              <Button className="w-full h-16 rounded-2xl bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#00FF7F]/20 flex items-center justify-center gap-3">
                Finalize Registry
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="text-center pt-4 border-t border-white/5">
              <p className="text-xs font-bold text-slate-600 mb-2">Already have high-level access?</p>
              <Link className="text-xs font-black text-white hover:text-[#00FF7F] transition-colors uppercase tracking-widest border-b border-[#00FF7F]/30" href="/login">
                Return to Login Protocol
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
