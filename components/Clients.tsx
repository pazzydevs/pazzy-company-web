"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface Client {
    id: string;
    name: string;
}

export const Clients = ({ initialClients = [] }: { initialClients?: Client[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!initialClients || initialClients.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.to(".client-scroller", {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "none",
            });
        }, scrollRef);
        return () => ctx.revert();
    }, [initialClients]);

    if (!initialClients || initialClients.length === 0) return null;

    // Ensure we have enough items for a smooth infinite scroll
    const items = [...initialClients, ...initialClients, ...initialClients];

    return (
        <section id="clients" className="py-12 md:py-24 relative overflow-hidden scroll-mt-24" ref={scrollRef}>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-10 md:mb-16 text-center">
                <h2 className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4">Trusted by Industry Leaders Worldwide</h2>
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
            </div>

            <div className="relative">
                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <div className="flex whitespace-nowrap client-scroller items-center py-4">
                    {items.map((client, i) => (
                        <div key={i} className="flex items-center justify-center px-16 group">
                            <span className="text-3xl md:text-4xl font-black text-white/10 hover:text-primary transition-all duration-500 cursor-default tracking-tighter uppercase italic group-hover:scale-110">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                        Become a partner <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
