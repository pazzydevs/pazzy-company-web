"use client";

import { updateProject } from "@/app/actions/projects";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function ProjectForm({ project }: { project: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form 
            action={async (formData) => {
                setIsSubmitting(true);
                await updateProject(project.id, formData);
            }} 
            className="glass p-8 rounded-3xl border border-white/10 space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Project Name</label>
                <input
                    required
                    name="name"
                    type="text"
                    defaultValue={project.name}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Description</label>
                <textarea
                    required
                    name="description"
                    rows={3}
                    defaultValue={project.description}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Tech Stack (comma separated)</label>
                    <input
                        required
                        name="tech"
                        type="text"
                        defaultValue={project.tech}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Status</label>
                    <select
                        name="status"
                        defaultValue={project.status}
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
                    defaultValue={project.image}
                    className="w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors"
                />
            </div>

            <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Project"}
                </Button>
            </div>
        </form>
    );
}
