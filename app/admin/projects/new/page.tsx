"use client";

import { createProject } from "@/app/actions/projects";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function NewProjectPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/projects" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Add New Project</h1>
            </div>

            <form 
                action={async (formData) => {
                    setIsSubmitting(true);
                    await createProject(formData);
                }} 
                className="glass p-8 rounded-3xl border border-white/10 space-y-6"
            >
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Project Name</label>
                    <input
                        required
                        name="name"
                        type="text"
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="e.g. Nexus SaaS"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Description</label>
                    <textarea
                        required
                        name="description"
                        rows={3}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="Short description of the project..."
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Tech Stack (comma separated)</label>
                        <input
                            required
                            name="tech"
                            type="text"
                            className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                            placeholder="e.g. Next.js, OpenAI, Prisma"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Status</label>
                        <select
                            name="status"
                            className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors appearance-none"
                        >
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Image URL</label>
                    <input
                        required
                        name="image"
                        type="url"
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                        placeholder="https://images.unsplash.com/photo-..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Project"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
