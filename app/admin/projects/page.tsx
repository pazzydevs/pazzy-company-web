import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { deleteProject } from "@/app/actions/projects";
import { Button } from "@/components/Button";
import { DeleteButton } from "@/components/DeleteButton";

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Projects</h1>
                <Link href="/admin/projects/new">
                    <Button size="sm" className="flex items-center gap-2">
                        <Plus size={16} /> Add Project
                    </Button>
                </Link>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-4 font-medium text-white/60">Name</th>
                            <th className="p-4 font-medium text-white/60">Status</th>
                            <th className="p-4 font-medium text-white/60">Tech Stack</th>
                            <th className="p-4 font-medium text-white/60 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-white/40">
                                    No projects found.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-semibold">{project.name}</td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${project.status === "Completed" ? "bg-primary/20 text-[#ff6b5e]" : "bg-white/10 text-white/70"}`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-white/60 text-sm">
                                        {project.tech}
                                    </td>
                                    <td className="p-4 text-right flex items-center justify-end gap-2">
                                        <Link href={`/admin/projects/${project.id}`} className="p-2 text-white/40 hover:text-white transition-colors">
                                            <Pencil size={18} />
                                        </Link>
                                        <DeleteButton id={project.id} onDelete={deleteProject} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
