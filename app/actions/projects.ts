"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const tech = formData.get("tech") as string;
    const status = formData.get("status") as string;
    const image = formData.get("image") as string;

    await prisma.project.create({
        data: { name, description, tech, status, image },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/");
    redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const tech = formData.get("tech") as string;
    const status = formData.get("status") as string;
    const image = formData.get("image") as string;

    await prisma.project.update({
        where: { id },
        data: { name, description, tech, status, image },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/");
    redirect("/admin/projects");
}

export async function deleteProject(id: string) {
    await prisma.project.delete({
        where: { id },
    });
    revalidatePath("/admin/projects");
    revalidatePath("/");
}
