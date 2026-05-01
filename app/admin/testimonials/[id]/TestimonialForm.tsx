"use client";

import { updateTestimonial } from "@/app/actions/testimonials";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function TestimonialForm({ testimonial }: { testimonial: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form 
            action={async (formData) => {
                setIsSubmitting(true);
                await updateTestimonial(testimonial.id, formData);
            }} 
            className="glass p-8 rounded-3xl border border-white/10 space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Client Name</label>
                <input
                    required
                    name="name"
                    type="text"
                    defaultValue={testimonial.name}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Company / Position</label>
                <input
                    required
                    name="company"
                    type="text"
                    defaultValue={testimonial.company}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Testimonial Text</label>
                <textarea
                    required
                    name="text"
                    rows={4}
                    defaultValue={testimonial.text}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Testimonial"}
                </Button>
            </div>
        </form>
    );
}
