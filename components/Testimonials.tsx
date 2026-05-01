"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        company: "NexGen Labs",
        text: "Pazzy transformed our legacy systems into a modern SaaS powerhouse. Their team's technical depth is unparalleled.",
    },
    {
        name: "Sarah Chen",
        company: "ScaleUp AI",
        text: "Working with Pazzy felt like having an elite engineering team on demand. They didn't just build code; they built solutions.",
    },
    {
        name: "Marcus Thorne",
        company: "Velocity Fintech",
        text: "The delivery speed and code quality were exceptional. Pazzy is truly at the cutting edge of digital development.",
    },
];

export const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
    }, [index]);

    return (
        <section className="py-16 md:py-24 px-5 sm:px-8 overflow-hidden bg-gradient-glow">
            <div className="max-w-4xl mx-auto text-center" ref={containerRef}>
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center">
                        <Quote className="text-primary w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>

                <div className="testimonial-card">
                    <p className="text-xl sm:text-2xl md:text-4xl font-medium leading-[1.3] md:leading-[1.4] mb-8 md:mb-12 italic text-white/90">
                        "{testimonials[index].text}"
                    </p>
                    <div>
                        <h4 className="text-lg md:text-xl font-bold">{testimonials[index].name}</h4>
                        <p className="text-primary text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-widest mt-1.5 md:mt-2">{testimonials[index].company}</p>
                    </div>
                </div>

                <div className="flex justify-center gap-2 md:gap-3 mt-10 md:mt-16">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? "bg-primary w-8" : "bg-white/10"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
