"use client";

import { updateService } from "@/app/actions/services";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function ServiceForm({ service }: { service: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form 
            action={async (formData) => {
                setIsSubmitting(true);
                await updateService(service.id, formData);
            }} 
            className="glass p-8 rounded-3xl border border-white/10 space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Service Title</label>
                <input
                    required
                    name="title"
                    type="text"
                    defaultValue={service.title}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Description</label>
                <textarea
                    required
                    name="description"
                    rows={3}
                    defaultValue={service.description}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Icon Name (Lucide)</label>
                    <input
                        required
                        name="iconName"
                        type="text"
                        defaultValue={service.iconName}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Gradient Class</label>
                    <input
                        required
                        name="gradient"
                        type="text"
                        defaultValue={service.gradient}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                    />
                </div>
            </div>

            <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Service"}
                </Button>
            </div>
        </form>
    );
}
