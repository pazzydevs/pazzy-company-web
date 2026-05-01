"use client";

import { Zap, Cloud, Cpu, Globe, Database, Activity, Layers, Shield, Workflow, Target } from "lucide-react";

const clientCategories = [
    {
        category: "Strategic Partners",
        clients: [
            { name: "TechFlow", logo: Zap, description: "Leading the way in workflow automation." },
            { name: "Nexus AI", logo: Cpu, description: "Advanced neural networks for enterprise." },
            { name: "Quantum", logo: Layers, description: "Next-gen distributed ledger technology." },
        ]
    },
    {
        category: "Enterprise Solutions",
        clients: [
            { name: "Velocity", logo: Activity, description: "High-speed data processing systems." },
            { name: "Elevate", logo: Cloud, description: "Cloud-native infrastructure providers." },
            { name: "Synergy", logo: Workflow, description: "Integrated business management platforms." },
        ]
    },
    {
        category: "Innovative Startups",
        clients: [
            { name: "Horizon", logo: Globe, description: "Global connectivity and networking." },
            { name: "Pulse", logo: Target, description: "Performance monitoring and analytics." },
            { name: "Zenith", logo: Database, description: "Immutable cloud storage solutions." },
            { name: "Vortex", logo: Shield, description: "Cybersecurity and threat detection." },
        ]
    }
];

export default function ClientsPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-secondary/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                <div className="mb-12 sm:mb-20 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-5 sm:mb-8 text-gradient">Our Clients</h1>
                    <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto">
                        Trusted by industry leaders and visionary startups. We help our clients push the boundaries of technology.
                    </p>
                </div>

                <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24">
                    {clientCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-8 sm:space-y-12">
                            <div className="flex items-center gap-4 sm:gap-6">
                                <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary/80">{cat.category}</h2>
                                <div className="h-[1px] flex-grow bg-white/10" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                                {cat.clients.map((client, cIdx) => (
                                    <div key={cIdx} className="glass group p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] hover:border-primary/50 transition-all duration-500">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                            <client.logo className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{client.name}</h3>
                                        <p className="text-sm sm:text-base text-white/50 leading-relaxed font-medium">
                                            {client.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass px-6 py-12 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] text-center border-primary/20 border mb-16 sm:mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Want to be our next success story?</h2>
                    <p className="text-base sm:text-lg text-white/60 mb-8 sm:mb-10 max-w-xl mx-auto font-medium">
                        Join 50+ companies that have scaled their digital presence with Pazzy solutions.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-primary text-black font-bold rounded-2xl hover:scale-105 transition-all w-full sm:w-auto">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </main>
    );
}
