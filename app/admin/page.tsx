import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { FolderKanban, Users, Briefcase, MessageSquareQuote } from "lucide-react";

export default async function AdminDashboard() {
    const stats = [
        { name: "Total Projects", count: await prisma.project.count(), href: "/admin/projects", icon: FolderKanban },
        { name: "Total Clients", count: await prisma.client.count(), href: "/admin/clients", icon: Users },
        { name: "Total Services", count: await prisma.service.count(), href: "/admin/services", icon: Briefcase },
        { name: "Total Testimonials", count: await prisma.testimonial.count(), href: "/admin/testimonials", icon: MessageSquareQuote },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Link key={stat.name} href={stat.href}>
                            <div className="glass p-6 rounded-2xl hover:border-primary/50 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="text-white/60 text-sm font-medium mb-1">{stat.name}</h3>
                                <p className="text-3xl font-bold text-white">{stat.count}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
