"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    id: string;
    name: string;
    company: string;
    text: string;
}

export const Testimonials = ({ initialTestimonials = [] }: { initialTestimonials?: Testimonial[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!initialTestimonials || initialTestimonials.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonial-card",
                { scale: 0.9, opacity: 0 },
                { scrollTrigger: { trigger: containerRef.current, start: "top 80%" }, scale: 1, opacity: 1, stagger: 0.15, duration: 1, ease: "back.out(1.4)" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [initialTestimonials]);

    if (!initialTestimonials || initialTestimonials.length === 0) return null;

    return (
        <section id="testimonials" ref={containerRef} className="py-16 md:py-24 px-5 sm:px-8 scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 italic tracking-tight">Client <span className="text-gradient-red">Voices</span></h2>
                    <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
                        Real stories from partners who scaled their businesses with Pazzy Solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {initialTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card glass p-8 sm:p-10 rounded-[2.5rem] relative group border border-white/5 hover:border-primary/20 transition-all duration-500">
                            <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/30 transition-colors">
                                <Quote size={40} />
                            </div>
                            
                            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-bold text-lg text-white">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base sm:text-lg">{testimonial.name}</h4>
                                    <p className="text-primary/60 text-xs sm:text-sm font-medium uppercase tracking-widest">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
