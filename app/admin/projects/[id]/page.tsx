import { prisma } from "@/lib/prisma";
import { updateProject } from "@/app/actions/projects";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProjectForm from "./ProjectForm";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const project = await prisma.project.findUnique({
        where: { id },
    });

    if (!project) notFound();

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/projects" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Edit Project</h1>
            </div>

            <ProjectForm project={project} />
        </div>
    );
}
