import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { deleteClient } from "@/app/actions/clients";
import { Button } from "@/components/Button";
import { DeleteButton } from "@/components/DeleteButton";

export default async function ClientsPage() {
    const clients = await prisma.client.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Clients</h1>
                <Link href="/admin/clients/new">
                    <Button size="sm" className="flex items-center gap-2">
                        <Plus size={16} /> Add Client
                    </Button>
                </Link>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-4 font-medium text-white/60">Name</th>
                            <th className="p-4 font-medium text-white/60">Logo URL</th>
                            <th className="p-4 font-medium text-white/60 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="p-8 text-center text-white/40">
                                    No clients found.
                                </td>
                            </tr>
                        ) : (
                            clients.map((client) => (
                                <tr key={client.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-semibold">{client.name}</td>
                                    <td className="p-4 text-white/40 text-xs truncate max-w-xs">
                                        {client.logoUrl || "None"}
                                    </td>
                                    <td className="p-4 text-right flex items-center justify-end gap-2">
                                        <Link href={`/admin/clients/${client.id}`} className="p-2 text-white/40 hover:text-white transition-colors">
                                            <Pencil size={18} />
                                        </Link>
                                        <DeleteButton id={client.id} onDelete={deleteClient} />
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
