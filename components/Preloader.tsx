"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
                document.body.style.overflow = "auto";
            }
        });

        tl.to(".preloader-text", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(".preloader-progress", {
            width: "100%",
            duration: 1.0,
            ease: "power2.inOut"
        }, "-=0.2")
        .to(".preloader-text", {
            opacity: 0,
            y: -20,
            duration: 0.35,
            ease: "power3.in"
        })
        .to(".preloader-wrapper", {
            yPercent: -100,
            duration: 0.7,
            ease: "power4.inOut"
        });
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader-wrapper fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808]">
            <div className="preloader-text opacity-0 translate-y-8 flex flex-col items-center gap-5 mb-10">
                {/* Logo mark — red rounded square with star */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#E8342A] flex items-center justify-center shadow-[0_0_40px_rgba(232,52,42,0.5)]">
                    {/* 8-point star using two overlapping squares */}
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="white">
                        <polygon points="20,2 23,17 38,20 23,23 20,38 17,23 2,20 17,17" />
                    </svg>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl font-black text-white tracking-[0.25em] uppercase">PAZZY</div>
                    <div className="text-[#E8342A] text-[10px] tracking-[0.3em] uppercase font-bold">Software Solutions</div>
                </div>
            </div>
            <div className="w-56 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden flex">
                <div className="preloader-progress w-0 h-full bg-gradient-to-r from-[#E8342A] via-[#ff6b5e] to-[#E8342A]" />
            </div>
        </div>
    );
};
