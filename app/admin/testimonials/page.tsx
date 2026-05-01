import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { deleteTestimonial } from "@/app/actions/testimonials";
import { Button } from "@/components/Button";
import { DeleteButton } from "@/components/DeleteButton";

export default async function TestimonialsPage() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Testimonials</h1>
                <Link href="/admin/testimonials/new">
                    <Button size="sm" className="flex items-center gap-2">
                        <Plus size={16} /> Add Testimonial
                    </Button>
                </Link>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-4 font-medium text-white/60">Name</th>
                            <th className="p-4 font-medium text-white/60">Company</th>
                            <th className="p-4 font-medium text-white/60 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="p-8 text-center text-white/40">
                                    No testimonials found.
                                </td>
                            </tr>
                        ) : (
                            testimonials.map((t) => (
                                <tr key={t.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-semibold">{t.name}</td>
                                    <td className="p-4 text-white/40 text-sm">{t.company}</td>
                                    <td className="p-4 text-right flex items-center justify-end gap-2">
                                        <Link href={`/admin/testimonials/${t.id}`} className="p-2 text-white/40 hover:text-white transition-colors">
                                            <Pencil size={18} />
                                        </Link>
                                        <DeleteButton id={t.id} onDelete={deleteTestimonial} />
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
