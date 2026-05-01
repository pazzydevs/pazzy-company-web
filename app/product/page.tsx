"use client";

import { Hero } from "@/components/Hero";

export default function ProductPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-8 text-center md:text-left">Our <span className="text-gradient">Products</span></h1>
                <p className="text-base sm:text-xl text-white/60 max-w-2xl mb-10 sm:mb-16 text-center md:text-left mx-auto md:mx-0">
                    Exploring the digital ecosystem we've built to empower businesses with intelligent tools and scalable infrastructure.
                </p>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="glass p-8 sm:p-12 rounded-[2rem]">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pazzy Cloud</h2>
                        <p className="text-sm sm:text-base text-white/50 mb-6 sm:mb-8">Seamless cloud infrastructure for modern applications.</p>
                        <div className="h-40 bg-primary/10 rounded-2xl border border-primary/20" />
                    </div>
                    <div className="glass p-8 sm:p-12 rounded-[2rem]">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">AI Core</h2>
                        <p className="text-sm sm:text-base text-white/50 mb-6 sm:mb-8">Proprietary AI models tailored for enterprise efficiency.</p>
                        <div className="h-40 bg-secondary/10 rounded-2xl border border-secondary/20" />
                    </div>
                </div>
            </div>
        </main>
    );
}
