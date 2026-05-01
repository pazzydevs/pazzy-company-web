"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-5 sm:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16">
                {/* Left Info */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Let's <span className="text-gradient-gold">Connect</span></h2>
                    <p className="text-white/60 text-base md:text-lg mb-10 max-w-lg">
                        Ready to bring your vision to life? Fill out the form or reach out directly via one of our channels.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: "Email Us", value: "info.pazzy@gmail.com" },
                            { icon: Phone, label: "Call Us", value: "+94 (77) 123-4567" },
                            { icon: MapPin, label: "Location", value: "Remote First / Global" },
                        ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4 sm:gap-6 group">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{label}</h4>
                                    <p className="text-base sm:text-lg font-medium">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden border border-white/5">
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Your Name</label>
                                <input
                                    required type="text" value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3.5 outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Email Address</label>
                                <input
                                    required type="email" value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3.5 outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Project Message</label>
                            <textarea
                                required rows={5} value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3.5 outline-none focus:border-primary/60 transition-colors resize-none text-sm sm:text-base"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl font-bold flex gap-3 text-base bg-primary hover:bg-[#c5a034] text-black shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                        >
                            {isSubmitting ? "Sending..." : isSuccess ? "Success! ✓" : "Send Message"}
                            {!isSuccess && <Send size={18} />}
                        </Button>
                    </form>

                    {isSuccess && (
                        <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-500 z-20 rounded-2xl">
                            <div className="text-center p-8 glass rounded-3xl mx-4">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="text-black" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-white/60">We'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
