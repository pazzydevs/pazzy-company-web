"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { name: "Nexus SaaS", description: "An AI-powered project management tool for large enterprise teams.", tech: ["Next.js", "OpenAI", "Prisma"], status: "In Progress", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
    { name: "QuantFlow", description: "Automated trading platform with real-time data analysis and execution.", tech: ["Python", "React", "AWS"], status: "Completed", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80" },
    { name: "EcoTrack", description: "IoT suite for monitoring industrial carbon footprints in real-time.", tech: ["TypeScript", "Rust", "MQTT"], status: "Completed", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" },
    { name: "AlphaCore AI", description: "Neural network framework for high-speed edge computing devices.", tech: ["C++", "PyTorch", "GCP"], status: "In Progress", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80" },
];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { y: 60, opacity: 0 },
                { scrollTrigger: { trigger: containerRef.current, start: "top 80%" }, y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="ai" ref={containerRef} className="py-16 md:py-24 px-5 sm:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ongoing <span className="text-gradient-gold">Innovations</span></h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl">
                        A glimpse into the cutting-edge solutions we're currently building for our partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass rounded-2xl md:rounded-[2rem] overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500">
                            <div className="h-44 sm:h-52 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                                <div className="absolute top-4 right-4 z-10">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 backdrop-blur-md border border-white/5 ${project.status === "Completed" ? "bg-primary/20 text-[#d4af37]" : "bg-white/10 text-white/70"}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.status === "Completed" ? "bg-primary" : "bg-white/60"}`} />
                                        {project.status}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                                <p className="text-white/50 mb-5 leading-relaxed text-sm sm:text-base">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-white/50 border border-white/10">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
