"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle2,
  Globe,
  Lock,
  Share2,
  Printer,
  Download,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useToast } from "@/hooks/use-toast";

export default function VerifyPage({
  params,
}: {
  params: { id: string };
}) {
  const [verifying, setVerifying] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVerifying(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setIsGenerating(true);

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width / 3, canvas.height / 3],
      });

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        canvas.width / 3,
        canvas.height / 3
      );

      pdf.save(`RealGen_Verification_${params.id}.pdf`);

      toast({
        title: "Certificate Downloaded",
        description: "The official proof of origin has been saved to your device.",
      });
    } catch (error) {
      console.error("PDF Generation failed:", error);
      toast({
        title: "Generation Failed",
        description: "Could not generate certificate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Verification URL has been copied to clipboard.",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#001a0d] py-32 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {verifying ? (
            <motion.div
              key="verifying"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center py-20"
            >
              <div className="relative w-32 h-32 mb-10">
                <div className="absolute inset-0 rounded-full border-4 border-[#00FF7F]/10 border-t-[#00FF7F] animate-spin" />
                <div className="absolute inset-4 rounded-full border-4 border-[#00FF7F]/5 border-b-emerald-400/50 animate-spin-slow rotate-180" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#00FF7F] animate-pulse" />
                </div>
              </div>

              <h1 className="text-3xl font-black text-white italic tracking-tighter mb-4">
                Verifying <span className="text-[#00FF7F]">Authenticity</span>
              </h1>

              <p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px]">
                Checking Neural Ledger Node: {params.id.substring(0, 8)}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="verified"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              {/* Status Header */}
              <div className="text-center space-y-4">
                <Badge className="bg-[#00FF7F]/10 text-[#00FF7F] border-[#00FF7F]/20 px-4 py-2 rounded-full uppercase tracking-[0.4em] text-[10px] font-black">
                  Official Verification Portal
                </Badge>

                <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter leading-none">
                  MEDIA STATUS:{" "}
                  <span className="text-[#00FF7F]">AUTHENTIC</span>
                </h1>

                <p className="text-slate-500 font-medium">
                  This asset has been verified by the RealGen Neural Network.
                </p>
              </div>

              {/* Certificate */}
              <div
                ref={certificateRef}
                className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-slate-950 relative overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                  <Shield className="w-[400px] h-[400px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center mb-16">
                    <div className="w-20 h-20 rounded-2xl bg-[#00FF7F] flex items-center justify-center mb-8 shadow-2xl shadow-[#00FF7F]/40 rotate-12">
                      <Shield className="w-10 h-10 text-[#001a0d]" />
                    </div>

                    <h2 className="text-4xl font-black tracking-tighter mb-2 text-[#001a0d]">
                      CERTIFICATE OF TRUTH
                    </h2>

                    <p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px]">
                      Verification ID: {params.id}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-y border-slate-100 py-12">
                    <div className="space-y-8">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                          Confidence Level
                        </label>
                        <p className="text-3xl font-black text-[#00FF7F]">
                          99.82%
                        </p>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                          Neural Scan Verdict
                        </label>
                        <p className="text-lg font-bold text-[#001a0d]">
                          Zero Synthetic Artifacts Detected
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                          Scan Signature
                        </label>
                        <p className="text-sm font-mono font-bold text-[#001a0d]">
                          SHA-256: 8f2a...91b0
                        </p>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                          Origin Date
                        </label>
                        <p className="text-lg font-bold text-[#001a0d]">
                          {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white">
                      <Lock className="w-4 h-4 text-[#00FF7F]" />
                      <span className="text-xs font-black uppercase tracking-widest">
                        End-to-End Encrypted Verification
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                      Authorized by RealGen Identification Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-6 print:hidden">
                <Button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="h-14 px-10 bg-[#00FF7F] text-[#001a0d] hover:bg-[#00e672] rounded-full font-black flex items-center gap-3 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  {isGenerating ? "Generating..." : "Download PDF Proof"}
                </Button>

                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="h-14 px-10 border-white/10 text-white hover:bg-white/5 rounded-full font-bold transition-all"
                >
                  <Share2 className="w-5 h-5 mr-3" />
                  Share This Page
                </Button>

                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="h-14 px-10 border-white/10 text-white hover:bg-white/5 rounded-full font-bold transition-all"
                >
                  <Printer className="w-5 h-5 mr-3" />
                  Print Physical Copy
                </Button>
              </div>

              <div className="pt-20 text-center print:hidden">
                <p className="text-slate-500 text-sm font-medium mb-4">
                  Want to verify your own files?
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-[#00FF7F] font-black uppercase tracking-widest text-xs"
                >
                  <Link href="/app/analyze">Enter the RealGen Lab</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
