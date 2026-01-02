"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#001a0d]/70 backdrop-blur-2xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Premium Brand Area */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#00FF7F]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:rotate-[30deg] transition-all duration-700 ease-out">
                <rect x="20" y="20" width="60" height="60" rx="12" fill="none" stroke="#00FF7F" strokeWidth="2" className="opacity-40" />
                <path d="M50 35 L65 50 L50 65 L35 50 Z" fill="#00FF7F" className="group-hover:fill-white transition-colors duration-500" />
                <circle cx="50" cy="50" r="8" stroke="#00FF7F" strokeWidth="2" fill="none" className="group-hover:scale-125 origin-center transition-transform duration-500" />
                <rect x="15" y="15" width="4" height="4" fill="#00FF7F" />
                <rect x="81" y="81" width="4" height="4" fill="#00FF7F" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-[-0.04em] text-white">
              Real<span className="text-[#00FF7F]">Gen</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-emerald-400 transition-colors">
              Identifier
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300 relative group flex items-center gap-1"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00FF7F] to-emerald-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:block">
            <Button asChild size="default" className="shadow-2xl">
              <Link href="/app/analyze" className="flex items-center gap-2">
                Check File
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#00FF7F]" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-[#001a0d] border-b border-white/10 p-6 md:hidden z-40 shadow-2xl"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white hover:text-[#00FF7F] transition-colors flex items-center justify-between group"
                >
                  {item.name}
                  <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-[#00FF7F] transition-colors" />
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5">
                <Button asChild className="w-full h-14 bg-[#00FF7F] text-black font-black rounded-2xl">
                  <Link href="/app/analyze" onClick={() => setIsOpen(false)}>
                    Initialize Scan
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
