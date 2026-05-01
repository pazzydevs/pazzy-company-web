"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-vision", 
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: { trigger: ".about-vision", start: "top 85%", scrub: false },
                    y: 0, opacity: 1, duration: 0.9, ease: "power3.out"
                }
            );
            gsap.fromTo(".about-image-inner", { scale: 1.3 }, {
                scrollTrigger: { trigger: ".about-image", start: "top bottom", end: "bottom top", scrub: 1.5 },
                scale: 1, ease: "none"
            });
            gsap.fromTo(".about-image",
                { opacity: 0, y: 40 },
                { scrollTrigger: { trigger: ".about-image", start: "top 85%" }, opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-16 md:py-24 px-5 sm:px-8 relative overflow-hidden scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="about-vision flex flex-col gap-5">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Pioneering the <span className="text-gradient-gold">Digital Era</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed">
                        Pazzy is a collective of visionary engineers, designers, and AI specialists dedicated to crafting the tools of tomorrow. We believe technology should empower, not overwhelm.
                    </p>
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 my-4">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">99%</h3>
                            <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">Client Satisfaction</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">50+</h3>
                            <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">Projects Delivered</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">5+</h3>
                            <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">12+</h3>
                            <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">Team Members</p>
                        </div>
                    </div>
                </div>

                <div className="about-image relative w-full aspect-video md:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                        alt="Luxury Agency Office"
                        className="about-image-inner absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
            </div>
        </section>
    );
};
