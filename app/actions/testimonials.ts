"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTestimonial(formData: FormData) {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const text = formData.get("text") as string;

    await prisma.testimonial.create({
        data: { name, company, text },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/");
    redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const text = formData.get("text") as string;

    await prisma.testimonial.update({
        where: { id },
        data: { name, company, text },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/");
    redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
    await prisma.testimonial.delete({
        where: { id },
    });
    revalidatePath("/admin/testimonials");
    revalidatePath("/");
}
