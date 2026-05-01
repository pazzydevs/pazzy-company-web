"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { ChevronDown, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subTitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            tl.fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
              .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=0.3")
              .fromTo(subTitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.5")
              .fromTo(ctaRef.current, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.4")
              .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .fromTo(cardRef.current, { x: 50, scale: 0.95, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.9");

            // Parallax on scroll
            gsap.to(cardRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                },
                scale: 1.08,
                opacity: 0.3,
                y: 60,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080808]"
        >
            {/* Background glow blobs */}
            <div className="absolute top-1/3 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#E8342A]/6 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-[#E8342A]/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left order-1">
                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 bg-white/5 border border-[#E8342A]/30 rounded-full pl-1.5 pr-4 py-1.5 mb-5 sm:mb-6"
                    >
                        <div className="w-6 h-6 bg-[#E8342A] rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(232,52,42,0.5)]">
                            <Zap size={11} className="text-white fill-white" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-white/80">25% Discount on first annual purchase</span>
                    </div>

                    {/* Heading */}
                    <h1
                        ref={titleRef}
                        className="text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] xl:text-[4.8rem] font-bold tracking-tight mb-4 sm:mb-5 leading-[1.08] text-white"
                    >
                        Grow Your Business
                        <br className="hidden sm:block" />
                        to the&nbsp;
                        <span className="text-gradient-red inline-block hover:scale-105 transition-transform duration-700 cursor-default">Next Level</span>
                        <br className="hidden sm:block" />
                        with software solutions
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subTitleRef}
                        className="text-sm sm:text-base text-white/50 mb-7 sm:mb-8 max-w-xl leading-relaxed font-medium"
                    >
                        To become the dependable, long-term partner of our clients, we go the extra mile. Our first priority is becoming a true technology partner.
                    </p>

                    {/* CTA Buttons */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-[#E8342A] hover:bg-[#c42820] text-white px-7 py-3.5 text-base rounded-2xl border-0 font-bold shadow-[0_8px_28px_rgba(232,52,42,0.35)] transition-all hover:scale-105 hover:shadow-[0_12px_36px_rgba(232,52,42,0.45)]"
                            >
                                Get started now
                            </Button>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-base font-bold border-white/15 hover:border-[#E8342A]/50 hover:bg-[#E8342A]/8 transition-all"
                            >
                                View Services
                            </Button>
                        </Link>
                    </div>

                    {/* Stats row — visible on mobile too */}
                    <div ref={statsRef} className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5 w-full">
                        {[
                            { value: "50+", label: "Projects" },
                            { value: "99%", label: "Satisfaction" },
                            { value: "5+", label: "Years" },
                        ].map(({ value, label }) => (
                            <div key={label} className="flex flex-col">
                                <span className="text-xl sm:text-2xl font-black text-[#E8342A] leading-none">{value}</span>
                                <span className="text-[10px] sm:text-[11px] text-white/35 uppercase tracking-widest mt-1 font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card — shown on md+ screens, hidden on mobile */}
                <div ref={cardRef} className="hidden md:flex justify-center lg:justify-end items-center order-2 w-full">
                    <div className="w-full max-w-[360px] lg:max-w-[440px] aspect-square glass rounded-[2.5rem] lg:rounded-[3rem] p-5 lg:p-6 flex items-center justify-center border border-white/8 shadow-2xl relative">
                        {/* Red bloom */}
                        <div className="absolute -inset-12 bg-gradient-to-r from-[#E8342A]/12 to-transparent blur-[90px] opacity-60 -z-10" />

                        <div className="w-full h-full bg-gradient-to-br from-[#141414] to-[#080808] rounded-[2rem] lg:rounded-[2.5rem] p-7 lg:p-9 flex flex-col justify-between text-white relative shadow-2xl overflow-hidden border border-white/5 group">
                            {/* Abstract background image */}
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
                                alt="Tech"
                                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Red corner glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#E8342A]/20 to-transparent blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#E8342A]/10 to-transparent blur-2xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Logo mark */}
                                <div className="w-12 h-12 rounded-2xl bg-[#E8342A] flex items-center justify-center mb-7 shadow-[0_6px_22px_rgba(232,52,42,0.45)]">
                                    <svg viewBox="0 0 40 40" className="w-7 h-7" fill="white">
                                        <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                                    </svg>
                                </div>
                                <h2 className="text-[2rem] lg:text-[2.6rem] font-bold leading-[1.1] text-white/90 tracking-tight">
                                    Your preferred<br />software<br />partner
                                </h2>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <p className="text-[12px] font-medium text-white/35 tracking-tight">
                                    www.pazzy.com · info.pazzy@gmail.com
                                </p>
                                <div className="flex gap-2 items-center">
                                    <div className="h-[4px] w-10 bg-[#E8342A] rounded-full" />
                                    <div className="h-[4px] w-[4px] bg-white/15 rounded-full" />
                                    <div className="h-[4px] w-[4px] bg-white/15 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
                <span className="text-[8px] uppercase font-black tracking-[0.2em]">Scroll</span>
                <ChevronDown size={14} className="animate-bounce" />
            </div>
        </section>
    );
};
