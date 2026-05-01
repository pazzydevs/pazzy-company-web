import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-10 px-5 sm:px-8 border-t border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center font-black text-black text-lg">P</div>
                        <span className="text-xl font-bold tracking-tighter uppercase text-white">PAZZY</span>
                    </div>

                    {/* Nav links */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/40">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/product" className="hover:text-primary transition-colors">Products</Link>
                        <Link href="/ai" className="hover:text-primary transition-colors">AI & Innovation</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        <Link href="/work-with-us" className="hover:text-primary transition-colors">Work With Us</Link>
                    </div>

                    {/* Social */}
                    <div className="flex gap-6 text-sm font-medium text-white/40">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
                        © {new Date().getFullYear()} PAZZY SOLUTIONS. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-white/20 text-xs">Built with passion in Sri Lanka 🇱🇰</p>
                </div>
            </div>
        </footer>
    );
};
