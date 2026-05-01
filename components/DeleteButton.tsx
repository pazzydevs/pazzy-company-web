"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";

interface DeleteButtonProps {
    id: string;
    onDelete: (id: string) => Promise<void>;
}

export const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this item?")) {
            setIsDeleting(true);
            try {
                await onDelete(id);
            } catch (error) {
                console.error("Delete failed", error);
                alert("Failed to delete item.");
                setIsDeleting(false);
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-white/40 hover:text-red-500 transition-colors disabled:opacity-50"
        >
            <Trash2 size={18} className={isDeleting ? "animate-pulse" : ""} />
        </button>
    );
};
