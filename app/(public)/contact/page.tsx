"use client";

import { Contact } from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6 sm:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-8 text-center md:text-left">Contact <span className="text-gradient">Us</span></h1>
                <p className="text-base sm:text-xl text-white/60 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                    Let's discuss your next breakthrough. Our team is ready to help you scale your vision.
                </p>
            </div>
            <Contact />
        </main>
    );
}
