"use client";

import { Projects } from "@/components/Projects";

export default function AIPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8 sm:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-8 text-center md:text-left">AI & <span className="text-gradient">Innovation</span></h1>
                <p className="text-base sm:text-xl text-white/60 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                    Pushing the boundaries of what's possible with neural networks, automation, and intelligent system design.
                </p>
            </div>
            <Projects />
        </main>
    );
}
