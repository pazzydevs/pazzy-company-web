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
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-8 py-4",
            isScrolled ? "glass py-3" : "bg-transparent"
        )}>
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center font-black text-black shadow-[0_4px_10px_rgba(212,175,55,0.3)]">
                        P
                    </div>
                    <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">PAZZY</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-1 text-[11px] xl:text-[13px] font-semibold text-white/80 hover:text-primary transition-colors uppercase tracking-tight"
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={11} className="opacity-50" />}
                        </Link>
                    ))}
                    <Link href="/clients">
                        <Button variant="secondary" size="sm" className="bg-primary hover:bg-[#c5a034] text-black rounded-xl flex items-center gap-2 font-bold px-4 border border-white/10 shadow-[0_5px_15px_rgba(212,175,55,0.2)] text-xs xl:text-sm ml-2">
                            <User size={15} />
                            Client Area
                        </Button>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={cn(
                "lg:hidden absolute top-full left-0 right-0 glass border-t border-white/5 overflow-hidden transition-all duration-300",
                isMobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col px-4 sm:px-6 py-5 gap-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 text-base font-medium text-white/70 hover:text-primary hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={15} className="opacity-40" />}
                        </Link>
                    ))}
                    <div className="pt-3 mt-2 border-t border-white/5">
                        <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" className="w-full bg-primary hover:bg-[#c5a034] text-black border border-white/10 font-bold flex items-center justify-center gap-2 py-3">
                                <User size={17} /> Client Area
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
