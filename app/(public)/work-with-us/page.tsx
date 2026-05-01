"use client";

import { Button } from "@/components/Button";

export default function WorkPage() {
    return (
        <main className="relative pt-20 sm:pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-5 sm:mb-8 text-center">Work with <span className="text-gradient">Us</span></h1>
                <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 sm:mb-16">
                    Be part of the team shaping the future of digital solutions. We're always looking for brilliant minds to join our collective.
                </p>

                <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
                    {["Frontend Engineer", "AI Researcher", "Product Designer"].map((job) => (
                        <div key={job} className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-left hover:scale-105 transition-transform">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{job}</h3>
                            <p className="text-sm sm:text-base text-white/40 mb-5 sm:mb-6 font-medium">Remote / Full-time</p>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">Apply Now</Button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-24 p-6 sm:p-12 md:p-16 glass rounded-[2rem] md:rounded-[3rem] text-center border-primary/20 border">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Don't see your role?</h2>
                    <p className="text-base sm:text-lg text-white/60 mb-8 sm:mb-10 max-w-xl mx-auto">
                        We are always open to meeting exceptional talent. Send us your portfolio and let's have a chat.
                    </p>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">Send Portfolio</Button>
                </div>
            </div>
        </main>
    );
}
