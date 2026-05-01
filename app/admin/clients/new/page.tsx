"use client";

import { createClient } from "@/app/actions/clients";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function NewClientPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/clients" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Add New Client</h1>
            </div>

            <form 
                action={async (formData) => {
                    setIsSubmitting(true);
                    await createClient(formData);
                }} 
                className="glass p-8 rounded-3xl border border-white/10 space-y-6"
            >
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Client Name</label>
                    <input
                        required
                        name="name"
                        type="text"
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="e.g. Google"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Logo URL (Optional)</label>
                    <input
                        name="logoUrl"
                        type="url"
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="https://..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Client"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
