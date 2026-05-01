"use client";

import { createService } from "@/app/actions/services";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function NewServicePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/services" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Add New Service</h1>
            </div>

            <form 
                action={async (formData) => {
                    setIsSubmitting(true);
                    await createService(formData);
                }} 
                className="glass p-8 rounded-3xl border border-white/10 space-y-6"
            >
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Service Title</label>
                    <input
                        required
                        name="title"
                        type="text"
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="e.g. AI Development"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Description</label>
                    <textarea
                        required
                        name="description"
                        rows={3}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="Short description of the service..."
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Icon Name (Lucide)</label>
                        <input
                            required
                            name="iconName"
                            type="text"
                            className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                            placeholder="e.g. Brain, Code, Rocket"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Gradient Class</label>
                        <input
                            required
                            name="gradient"
                            type="text"
                            defaultValue="from-primary/20 via-primary/5 to-transparent"
                            className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Service"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
