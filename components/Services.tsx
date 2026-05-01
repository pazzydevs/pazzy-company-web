"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Service {
    id: string;
    title: string;
    description: string;
    iconName: string;
    gradient: string;
}

export const Services = ({ initialServices = [] }: { initialServices?: Service[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!initialServices || initialServices.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                { y: 50, opacity: 0 },
                { scrollTrigger: { trigger: containerRef.current, start: "top 80%" }, y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [initialServices]);

    if (!initialServices || initialServices.length === 0) return null;

    return (
        <section id="services" ref={containerRef} className="py-16 md:py-24 px-5 sm:px-8 scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Core <span className="text-gradient-red">Expertise</span></h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl">
                        We combine strategic thinking with engineering excellence to deliver high-impact digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initialServices.map((service) => {
                        const Icon = (LucideIcons as any)[service.iconName] || LucideIcons.Briefcase;
                        
                        return (
                            <div key={service.id} className="service-card glass p-8 rounded-3xl group hover:border-primary/40 transition-all duration-500 relative overflow-hidden h-full">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                                        <Icon className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
