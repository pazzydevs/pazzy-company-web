"use client";

import { updateClient } from "@/app/actions/clients";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function ClientForm({ client }: { client: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form 
            action={async (formData) => {
                setIsSubmitting(true);
                await updateClient(client.id, formData);
            }} 
            className="glass p-8 rounded-3xl border border-white/10 space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Client Name</label>
                <input
                    required
                    name="name"
                    type="text"
                    defaultValue={client.name}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Logo URL (Optional)</label>
                <input
                    name="logoUrl"
                    type="url"
                    defaultValue={client.logoUrl || ""}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Client"}
                </Button>
            </div>
        </form>
    );
}
