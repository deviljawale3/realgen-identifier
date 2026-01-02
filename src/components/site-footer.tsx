import Link from "next/link";
import { DeeJayLabsLogo } from "@/components/deejay-labs-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#001a0d] py-20 font-sans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10">
            <div className="text-3xl font-black text-white mb-2 tracking-[-0.04em]">
              Real<span className="text-[#00FF7F]">Gen</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">
              Identifier
            </div>
            <p className="text-slate-500 text-base max-w-sm mx-auto font-medium">
              The world's most trusted tool for verifying digital authenticity and fighting synthetic misinformation.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mb-14">
            <Link href="/features" className="text-sm font-bold text-slate-400 hover:text-[#00FF7F] transition-all">
              Features
            </Link>
            <Link href="/about" className="text-sm font-bold text-slate-400 hover:text-[#00FF7F] transition-all">
              About
            </Link>
            <Link href="/faqs" className="text-sm font-bold text-slate-400 hover:text-[#00FF7F] transition-all">
              FAQs
            </Link>
            <Link href="/contact" className="text-sm font-bold text-slate-400 hover:text-[#00FF7F] transition-all">
              Contact
            </Link>
            <Link href="/app/analyze" className="text-sm font-bold text-slate-400 hover:text-[#00FF7F] transition-all">
              Analyzer
            </Link>
          </nav>

          <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-[#00FF7F]/10 to-transparent mb-12" />

          <div className="scale-90 origin-center">
            <DeeJayLabsLogo />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-slate-600 font-black">
            &copy; {new Date().getFullYear()} RealGen Labs. Built for a transparent future.
          </p>
        </div>
      </div>
    </footer>
  );
}
