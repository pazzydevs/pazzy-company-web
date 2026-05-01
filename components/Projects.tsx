"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    name: string;
    description: string;
    tech: string;
    status: string;
    image: string;
}

export const Projects = ({ initialProjects }: { initialProjects: Project[] }) => {
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
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ongoing <span className="text-gradient-red">Innovations</span></h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl">
                        A glimpse into the cutting-edge solutions we're currently building for our partners.
                    </p>
                </div>

                {initialProjects.length === 0 ? (
                    <div className="text-center py-20 glass rounded-[2rem] border border-white/5">
                        <p className="text-white/50 text-lg">No projects added yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {initialProjects.map((project) => (
                            <div key={project.id} className="project-card glass rounded-2xl md:rounded-[2rem] overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(232,52,42,0.1)]">
                                <div className="h-44 sm:h-52 md:h-64 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 backdrop-blur-md border border-white/5 ${project.status === "Completed" ? "bg-primary/20 text-[#ff6b5e]" : "bg-white/10 text-white/70"}`}>
                                            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.status === "Completed" ? "bg-[#ff6b5e]" : "bg-white/60"}`} />
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                                    <p className="text-white/50 mb-5 leading-relaxed text-sm sm:text-base">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.split(",").map((t) => (
                                            <span key={t.trim()} className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-white/50 border border-white/10">{t.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
