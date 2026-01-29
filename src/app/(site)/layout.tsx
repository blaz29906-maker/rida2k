import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/logo-marquee";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <div className="flex flex-col border-t border-border">
                <LogoMarquee type="tools" />
                <LogoMarquee type="software" className="border-t-0" />
            </div>
            <Footer />
        </div>
    );
}
