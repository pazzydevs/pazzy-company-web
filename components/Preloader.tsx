"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
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
            duration: 0.5,
            ease: "power3.out"
        })
        .to(".preloader-progress", {
            width: "100%",
            duration: 0.8,
            ease: "power2.inOut"
        }, "-=0.2")
        .to(".preloader-text", {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power3.in"
        })
        .to(".preloader-wrapper", {
            yPercent: -100,
            duration: 0.6,
            ease: "power4.inOut"
        });
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader-wrapper fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
            <div className="preloader-text opacity-0 translate-y-8 flex flex-col items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center font-black text-black text-4xl shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    P
                </div>
                <div className="text-4xl font-black text-white tracking-[0.2em] uppercase">PAZZY</div>
                <div className="text-primary text-xs tracking-widest uppercase font-bold">Luxury Digital Solutions</div>
            </div>
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden flex">
                <div className="preloader-progress w-0 h-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c]" />
            </div>
        </div>
    );
};
