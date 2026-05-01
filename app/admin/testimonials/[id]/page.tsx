import { prisma } from "@/lib/prisma";
import { updateTestimonial } from "@/app/actions/testimonials";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import TestimonialForm from "./TestimonialForm";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const testimonial = await prisma.testimonial.findUnique({
        where: { id },
    });

    if (!testimonial) notFound();

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/testimonials" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Edit Testimonial</h1>
            </div>

            <TestimonialForm testimonial={testimonial} />
        </div>
    );
}
