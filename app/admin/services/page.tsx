import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { deleteService } from "@/app/actions/services";
import { Button } from "@/components/Button";
import { DeleteButton } from "@/components/DeleteButton";

export default async function ServicesPage() {
    const services = await prisma.service.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Services</h1>
                <Link href="/admin/services/new">
                    <Button size="sm" className="flex items-center gap-2">
                        <Plus size={16} /> Add Service
                    </Button>
                </Link>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-4 font-medium text-white/60">Title</th>
                            <th className="p-4 font-medium text-white/60">Icon</th>
                            <th className="p-4 font-medium text-white/60 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="p-8 text-center text-white/40">
                                    No services found.
                                </td>
                            </tr>
                        ) : (
                            services.map((service) => (
                                <tr key={service.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-semibold">{service.title}</td>
                                    <td className="p-4 text-white/40 text-sm">
                                        {service.iconName}
                                    </td>
                                    <td className="p-4 text-right flex items-center justify-end gap-2">
                                        <Link href={`/admin/services/${service.id}`} className="p-2 text-white/40 hover:text-white transition-colors">
                                            <Pencil size={18} />
                                        </Link>
                                        <DeleteButton id={service.id} onDelete={deleteService} />
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
