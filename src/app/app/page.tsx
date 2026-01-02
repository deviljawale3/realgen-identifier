"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, PlusCircle, LayoutDashboard, Brain, User, AlertCircle, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { AnalysisResult } from "./analyze/page";

export default function AppHistoryPage() {
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('realgen_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('realgen_history');
    setHistory([]);
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 font-sans">
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-4">
            <div className="p-2 rounded-2xl bg-[#00FF7F]/10">
              <History className="w-8 h-8 text-[#00FF7F]" />
            </div>
            Workstream
          </h1>
          <p className="mt-3 text-white/50 text-lg font-medium">
            Manage your high-precision forensic reports.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {history.length > 0 && (
            <Button
              onClick={clearHistory}
              variant="ghost"
              className="text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-full flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </Button>
          )}
          <Button asChild className="bg-[#00FF7F] hover:bg-[#00e672] text-[#001a0d] font-black rounded-full px-8 h-12 shadow-lg shadow-[#00FF7F]/10 transition-all hover:scale-105 active:scale-95">
            <Link href="/app/analyze" className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              New Scan
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {history.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.map((item, idx) => (
              <Card key={idx} className="border-white/5 bg-white/[0.02] p-6 rounded-3xl backdrop-blur-3xl hover:border-[#00FF7F]/20 transition-all group relative overflow-hidden">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${item.isAIGenerated ? 'bg-red-500/10 text-red-400' : 'bg-[#00FF7F]/10 text-[#00FF7F]'}`}>
                    {item.isAIGenerated ? <Brain className="w-6 h-6" /> : <User className="w-6 h-6" />}
                  </div>
                  <Badge className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.isAIGenerated ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-[#00FF7F]/10 text-[#00FF7F] border-[#00FF7F]/20'}`}>
                    {item.isAIGenerated ? 'AI Detected' : 'Authentic'}
                  </Badge>
                </div>

                <h3 className="text-xl font-black text-white truncate mb-2">{item.fileName}</h3>
                <div className="flex items-center gap-3 text-slate-500 text-sm font-bold mb-6">
                  <AlertCircle className="w-4 h-4" />
                  <span>{item.confidence.toFixed(1)}% Confidence</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{new Date(item.scanDate).toLocaleDateString()}</span>
                  <Link href="/app/analyze" className="text-xs font-black text-[#00FF7F] hover:underline">Re-Verify &rarr;</Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-white/5 bg-white/[0.02] p-16 text-center rounded-[2.5rem] backdrop-blur-3xl">
            <div className="mx-auto w-24 h-24 rounded-3xl bg-[#00FF7F]/5 flex items-center justify-center mb-8 border border-[#00FF7F]/10 rotate-3">
              <LayoutDashboard className="w-10 h-10 text-[#00FF7F]/40" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Void Detected</h3>
            <p className="text-white/30 mb-10 max-w-xs mx-auto font-medium">
              Your forensic workstream is empty. Start by initializing your first digital scan.
            </p>
            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 h-12 font-bold transition-all hover:scale-105">
              <Link href="/app/analyze">Get Started</Link>
            </Button>
          </Card>
        )}
      </div>
    </main>
  );
}
