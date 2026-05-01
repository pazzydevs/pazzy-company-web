import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Scene from "@/components/Scene";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Preloader } from "@/components/Preloader";
import { ScrollProvider } from "@/components/ScrollProvider";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <ScrollProvider>
            <Preloader />
            <Scene />
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
        </ScrollProvider>
    );
}
