import { prisma } from "@/lib/prisma";
import { updateClient } from "@/app/actions/clients";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ClientForm from "./ClientForm";

export default async function EditClientPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const client = await prisma.client.findUnique({
        where: { id },
    });

    if (!client) notFound();

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/clients" className="p-2 text-white/60 hover:text-white glass rounded-xl">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Edit Client</h1>
            </div>

            <ClientForm client={client} />
        </div>
    );
}
