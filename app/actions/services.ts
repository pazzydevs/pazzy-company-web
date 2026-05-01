"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createService(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const iconName = formData.get("iconName") as string;
    const gradient = formData.get("gradient") as string;

    await prisma.service.create({
        data: { title, description, iconName, gradient },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
    redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const iconName = formData.get("iconName") as string;
    const gradient = formData.get("gradient") as string;

    await prisma.service.update({
        where: { id },
        data: { title, description, iconName, gradient },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
    redirect("/admin/services");
}

export async function deleteService(id: string) {
    await prisma.service.delete({
        where: { id },
    });
    revalidatePath("/admin/services");
    revalidatePath("/");
}
