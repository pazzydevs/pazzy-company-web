"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { ChevronDown, Bell } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subTitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
              .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" }, "-=0.3")
              .fromTo(subTitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.5")
              .fromTo(ctaRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.5")
              .fromTo(cardRef.current, { x: 40, scale: 0.95, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.7");

            // Parallax zoom on scroll
            gsap.to(cardRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                },
                scale: 1.1,
                opacity: 0.4,
                y: 80,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden bg-[#050505]"
        >
            {/* Background glow blobs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left order-1">
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 mb-5 glass"
                    >
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                            <Bell size={10} className="text-black fill-black" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white/90">25% Discount first annual purchase</span>
                    </div>

                    <h1
                        ref={titleRef}
                        className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5.2rem] font-bold tracking-tight mb-5 leading-[1.08] text-white"
                    >
                        Grow Your Business <br className="hidden sm:block" />
                        to the&nbsp;
                        <span className="text-gradient-gold inline-block hover:scale-105 transition-transform duration-700 cursor-default">Next Level</span>
                        <br className="hidden sm:block" />
                        with software solutions
                    </h1>

                    <p
                        ref={subTitleRef}
                        className="text-sm sm:text-base text-white/50 mb-8 max-w-xl leading-relaxed font-medium"
                    >
                        To become the dependable, long-term partner of our clients, we go the extra mile. Our first priority is becoming a true technology partner.
                    </p>

                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/contact">
                            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-[#c5a034] text-black px-8 py-3.5 text-base rounded-[1rem] border border-white/10 font-bold shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all transform hover:scale-105">
                                Get started now
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3.5 rounded-[1rem] text-base font-bold border-white/20 hover:border-primary/50">
                                View Services
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Content - Feature Card (visible on md+) */}
                <div ref={cardRef} className="hidden md:flex justify-center lg:justify-end items-center order-2 w-full">
                    <div className="w-full max-w-[380px] lg:max-w-[460px] aspect-square glass rounded-[2.5rem] lg:rounded-[3.5rem] p-5 lg:p-7 flex items-center justify-center border border-white/10 shadow-2xl relative">
                        {/* Decorative bloom */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-transparent blur-[80px] opacity-30 -z-10" />

                        <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#050505] rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between text-white relative shadow-2xl overflow-hidden border border-white/5 group">
                            {/* Abstract background image */}
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Abstract Luxury" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-1000" />
                            {/* Card inner glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 to-transparent blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center mb-8 shadow-[0_8px_20px_rgba(212,175,55,0.3)]">
                                    <span className="text-2xl font-black text-black">P</span>
                                </div>
                                <h2 className="text-[2rem] lg:text-[2.8rem] font-bold leading-[1.1] text-white/90 tracking-tight">
                                    Your preferred<br />software<br />partner
                                </h2>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <p className="text-[13px] font-medium text-white/40 tracking-tight">
                                    www.pazzy.com | info.pazzy@gmail.com
                                </p>
                                <div className="flex gap-2 items-center">
                                    <div className="h-[5px] w-10 bg-primary rounded-full" />
                                    <div className="h-[5px] w-[5px] bg-white/20 rounded-full" />
                                    <div className="h-[5px] w-[5px] bg-white/20 rounded-full" />
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
