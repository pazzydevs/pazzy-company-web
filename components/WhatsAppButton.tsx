"use client";

import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/your-number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 glass rounded-full flex items-center justify-center text-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.15)] hover:scale-110 transition-transform duration-300 border border-white/10"
    >
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
};
