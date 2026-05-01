"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    name: string;
    description: string;
    tech: string;
    status: string;
    image: string;
}

export const Projects = ({ initialProjects = [] }: { initialProjects?: Project[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!initialProjects || initialProjects.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { y: 100, opacity: 0 },
                { scrollTrigger: { trigger: containerRef.current, start: "top 80%" }, y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power4.out" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [initialProjects]);

    if (!initialProjects || initialProjects.length === 0) return null;

    return (
        <section id="projects" ref={containerRef} className="py-16 md:py-32 px-5 sm:px-8 scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Portfolio</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter">Recent <span className="text-gradient-red">Innovations</span></h3>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-white/40 text-right max-w-xs text-sm uppercase tracking-widest font-bold">Pushing the boundaries of digital possibilities.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {initialProjects.map((project, index) => (
                        <div key={project.id} className={`project-card group relative ${index % 2 === 1 ? 'md:mt-24' : ''}`}>
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[3rem] glass border border-white/10">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                                
                                <div className="absolute top-8 right-8">
                                    <span className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4 px-4 sm:px-8">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-2xl sm:text-3xl font-black italic tracking-tight group-hover:text-primary transition-colors">{project.name}</h4>
                                    <span className="text-primary font-black text-xl opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">→</span>
                                </div>
                                <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.split(",").map(t => (
                                        <span key={t} className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{t.trim()}</span>
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
