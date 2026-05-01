import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-12 md:py-16 px-5 sm:px-8 border-t border-white/5 bg-[#080808]">
            <div className="max-w-[1400px] mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#E8342A] flex items-center justify-center shadow-[0_4px_14px_rgba(232,52,42,0.4)]">
                                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="white">
                                    <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-black tracking-tighter text-white">PAZZY</span>
                                <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-bold">Software Solutions</span>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm max-w-xs mt-2">
                            Pioneering the digital era with high-performance software and AI solutions.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 text-sm font-medium text-white/50 w-full md:w-auto">
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/product" className="hover:text-primary transition-colors">Products</Link>
                            <Link href="/ai" className="hover:text-primary transition-colors">AI & Innovation</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/work-with-us" className="hover:text-primary transition-colors">Work With Us</Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
                    <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                        © {new Date().getFullYear()} PAZZY SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    
                    {/* Social */}
                    <div className="flex gap-6 text-sm font-medium text-white/40">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
