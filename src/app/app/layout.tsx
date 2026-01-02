'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const nav = [
  { href: '/app', label: 'History' },
  { href: '/app/analyze', label: 'Check File' },
  { href: '/app/reports', label: 'All Reports' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-[#001a0d] min-h-screen font-sans">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl gap-8 px-6 py-12">
        <aside className="hidden w-72 shrink-0 md:block">
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl sticky top-28 relative z-30">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Forensic Suite</span>
              <div className="flex items-center gap-1 text-[8px] font-black text-[#00FF7F] uppercase tracking-widest bg-[#00FF7F]/10 px-2 py-0.5 rounded-md border border-[#00FF7F]/20">
                <Zap className="w-2 h-2 fill-current" /> PRO
              </div>
            </div>

            <nav className="mt-2 grid gap-2">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 flex items-center gap-3 ${active
                      ? 'bg-[#00FF7F]/10 text-[#00FF7F] border border-[#00FF7F]/20 shadow-lg shadow-[#00FF7F]/5'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-all ${active ? 'bg-[#00FF7F] scale-110' : 'bg-transparent'}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-white/5 pt-6">
              <Button
                asChild
                variant="secondary"
                className="w-full h-12 rounded-2xl bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5 transition-all font-bold"
              >
                <Link href="/">Exit to Portal</Link>
              </Button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-6 flex items-center justify-between md:hidden">
            <div className="text-xl font-black text-white">Analyzer</div>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="bg-white/10 text-white rounded-xl"
            >
              <Link href="/">Portal</Link>
            </Button>
          </div>

          <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl overflow-hidden min-h-[600px] relative z-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
