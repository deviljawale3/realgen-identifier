import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileSearch, Plus } from "lucide-react";

export default function ReportsPage() {
  return (
    <main className="p-8 text-white font-sans max-w-7xl mx-auto">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black flex items-center gap-4">
            <div className="p-2 rounded-2xl bg-emerald-500/10">
              <FileSearch className="w-8 h-8 text-emerald-400" />
            </div>
            Saved Results
          </h1>
          <p className="mt-4 text-white/50 text-lg font-medium">
            A place to keep your file check results and proofs.
          </p>
        </div>
        <Button asChild className="bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] font-black rounded-full px-10 h-12 shadow-lg shadow-[#00FF7F]/10 transition-all hover:scale-105 active:scale-95">
          <Link href="/app/analyze" className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Check
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-white/5 bg-white/[0.02] p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-[#00FF7F]/20 transition-all group">
          <div className="text-xs text-[#00FF7F] font-black uppercase tracking-[0.2em] mb-4">Initial Setup</div>
          <div className="text-2xl font-black text-white mb-3">No results yet</div>
          <p className="text-white/40 leading-relaxed font-medium">
            Run a check on a file to see your first result here. We'll generate a proof for you.
          </p>
        </Card>

        <Card className="border-white/5 bg-white/[0.01] p-10 rounded-[2.5rem] backdrop-blur-3xl opacity-60">
          <div className="text-xs text-slate-500 font-black uppercase tracking-[0.2em] mb-4">In Development</div>
          <div className="text-2xl font-black text-white mb-3">Download Formats</div>
          <p className="text-white/30 leading-relaxed font-medium">
            Soon you'll be able to save your results as clear, printable digital certificates.
          </p>
        </Card>
      </div>
    </main>
  );
}
