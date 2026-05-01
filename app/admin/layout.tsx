"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, Users, Briefcase, MessageSquareQuote, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Projects", href: "/admin/projects", icon: FolderKanban },
        { name: "Clients", href: "/admin/clients", icon: Users },
        { name: "Services", href: "/admin/services", icon: Briefcase },
        { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
    ];

    return (
        <div className="flex min-h-screen bg-[#080808] text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-[#0c0c0c] flex flex-col shrink-0">
                <div className="p-6 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-[#E8342A] flex items-center justify-center shadow-[0_2px_10px_rgba(232,52,42,0.4)] group-hover:scale-110 transition-transform">
                            <svg viewBox="0 0 40 40" className="w-4 h-4" fill="white">
                                <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight">Pazzy Admin</span>
                    </Link>
                </div>
                
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                        
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                    isActive 
                                        ? "bg-primary/10 text-white border border-primary/20 shadow-[0_0_15px_rgba(232,52,42,0.1)]" 
                                        : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                                )}
                            >
                                <Icon className={cn(
                                    "w-5 h-5 transition-colors",
                                    isActive ? "text-primary" : "text-white/40 group-hover:text-primary/70"
                                )} />
                                <span className="font-medium text-sm">{item.name}</span>
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(232,52,42,0.6)]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm">
                        <LogOut className="w-4 h-4" />
                        Back to Site
                    </Link>
                    <div className="text-[10px] text-white/20 text-center uppercase tracking-[0.2em]">
                        Pazzy Solutions v1.0
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative bg-[#080808]">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
