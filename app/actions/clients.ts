"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createClient(formData: FormData) {
    const name = formData.get("name") as string;
    const logoUrl = formData.get("logoUrl") as string;

    await prisma.client.create({
        data: { name, logoUrl },
    });

    revalidatePath("/admin/clients");
    revalidatePath("/");
    redirect("/admin/clients");
}

export async function updateClient(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const logoUrl = formData.get("logoUrl") as string;

    await prisma.client.update({
        where: { id },
        data: { name, logoUrl },
    });

    revalidatePath("/admin/clients");
    revalidatePath("/");
    redirect("/admin/clients");
}

export async function deleteClient(id: string) {
    await prisma.client.delete({
        where: { id },
    });
    revalidatePath("/admin/clients");
    revalidatePath("/");
}
