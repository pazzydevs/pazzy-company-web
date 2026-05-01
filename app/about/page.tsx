"use client";

import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";

export default function AboutPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8 sm:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-8 text-center md:text-left">About <span className="text-gradient">Pazzy</span></h1>
                <p className="text-base sm:text-xl text-white/60 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                    We are a team of visionary builders dedicated to transforming businesses through state-of-the-art digital craftsmanship.
                </p>
            </div>
            <About />
            <Testimonials />
        </main>
    );
}
