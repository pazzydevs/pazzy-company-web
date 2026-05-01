"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, User } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product", hasDropdown: true },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "AI & Innovation", href: "/ai" },
        { name: "About Us", href: "/about", hasDropdown: true },
        { name: "Our Clients", href: "/clients" },
        { name: "Contact Us", href: "/contact" },
        { name: "Work with Us", href: "/work-with-us" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4",
            isScrolled ? "glass py-2 sm:py-3" : "bg-transparent"
        )}>
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8342A] flex items-center justify-center shadow-[0_4px_14px_rgba(232,52,42,0.45)] transition-transform duration-300 hover:scale-105">
                        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="white">
                            <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-lg sm:text-xl font-black tracking-tighter text-white">PAZZY</span>
                        <span className="text-[8px] sm:text-[9px] text-white/40 uppercase tracking-[0.12em] font-medium">Software Solutions</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-1 text-[11px] xl:text-[12px] font-semibold text-white/70 hover:text-[#E8342A] transition-colors uppercase tracking-tight"
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={11} className="opacity-50" />}
                        </Link>
                    ))}
                    <Link href="/clients">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="bg-[#E8342A] hover:bg-[#c42820] text-white rounded-xl flex items-center gap-2 font-bold px-4 border-0 shadow-[0_4px_14px_rgba(232,52,42,0.35)] text-xs xl:text-sm ml-2 transition-all hover:scale-105"
                        >
                            <User size={14} />
                            Client Area
                        </Button>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white p-2 rounded-xl hover:bg-white/8 transition-colors active:scale-95"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Full-screen Menu */}
            <div className={cn(
                "lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-[-1] transition-all duration-400",
                isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu panel */}
                <div className={cn(
                    "absolute top-0 right-0 w-full sm:w-[320px] h-full bg-[#0e0e0e] border-l border-white/5 flex flex-col pt-20 pb-8 px-6 transition-transform duration-400 overflow-y-auto",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* Close button top-right */}
                    <button
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl glass text-white/60 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={20} />
                    </button>

                    {/* Logo inside menu */}
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                        <div className="w-9 h-9 rounded-xl bg-[#E8342A] flex items-center justify-center shadow-[0_4px_14px_rgba(232,52,42,0.4)]">
                            <svg viewBox="0 0 40 40" className="w-5 h-5" fill="white">
                                <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                            </svg>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-black tracking-tighter text-white">PAZZY</span>
                            <span className="text-[8px] text-white/40 uppercase tracking-[0.12em] font-medium">Software Solutions</span>
                        </div>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col gap-1 flex-1">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-white/65 hover:text-white hover:bg-white/5 rounded-xl transition-all group"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ transitionDelay: isMobileMenuOpen ? `${i * 40}ms` : "0ms" }}
                            >
                                <span>{link.name}</span>
                                {link.hasDropdown && <ChevronDown size={14} className="opacity-40 group-hover:opacity-70" />}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA button */}
                    <div className="mt-6 pt-5 border-t border-white/5">
                        <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button
                                variant="primary"
                                className="w-full bg-[#E8342A] hover:bg-[#c42820] text-white border-0 font-bold flex items-center justify-center gap-2 py-3.5 rounded-xl shadow-[0_6px_20px_rgba(232,52,42,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                            >
                                <User size={17} /> Client Area
                            </Button>
                        </Link>
                        <p className="text-center text-white/20 text-xs mt-4">info.pazzy@gmail.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
