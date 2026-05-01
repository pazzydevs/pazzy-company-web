import { prisma } from "@/lib/prisma";
import { updateService } from "@/app/actions/services";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ServiceForm from "./ServiceForm";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const service = await prisma.service.findUnique({
        where: { id },
    });

    if (!service) notFound();

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/services" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Edit Service</h1>
            </div>

            <ServiceForm service={service} />
        </div>
    );
}
