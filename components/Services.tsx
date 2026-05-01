"use client";

import { Code2, Cpu, Globe, Cloud, Database, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Web Application Development", description: "High-performance, scalable web apps built with the latest technologies like Next.js and React.", icon: Globe, gradient: "from-primary/30 to-transparent" },
    { title: "AI & Automation Solutions", description: "Intelligent systems that automate your workflows and provide data-driven insights.", icon: Cpu, gradient: "from-white/20 to-transparent" },
    { title: "SaaS Platforms", description: "Complete SaaS product development from architecture to deployment and scaling.", icon: Cloud, gradient: "from-primary/20 to-transparent" },
    { title: "Cloud Systems", description: "Robust cloud infrastructure design and management for maximum availability and security.", icon: Database, gradient: "from-primary/10 to-transparent" },
    { title: "Data Engineering", description: "Building scalable data pipelines and warehousing solutions for complex datasets.", icon: BarChart3, gradient: "from-white/10 to-transparent" },
    { title: "Custom Software", description: "Tailor-made software solutions specifically designed to solve your unique business challenges.", icon: Code2, gradient: "from-primary/15 to-transparent" },
];

export const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                { scale: 0.85, opacity: 0, y: 50 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
                    scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "back.out(1.5)"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-16 md:py-24 px-5 sm:px-8 bg-gradient-glow scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient-red">Core Services</span></h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
                        We provide end-to-end digital transformation solutions to help startups and enterprises scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card glass p-6 md:p-8 rounded-2xl md:rounded-[2rem] group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(232,52,42,0.15)] relative overflow-hidden cursor-pointer"
                        >
                            <div className={cn(
                                "absolute -right-8 -top-8 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br",
                                service.gradient
                            )} />
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                                <service.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm sm:text-base group-hover:text-white/70 transition-colors">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
