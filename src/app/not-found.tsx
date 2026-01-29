import { Section } from "@/components/section";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
            <h1 className="font-display text-9xl font-bold text-primary opacity-20 select-none">404</h1>
            <div className="relative -mt-12 space-y-4">
                <h2 className="text-4xl font-bold">Page not found</h2>
                <p className="text-xl text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
                <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 mt-8"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
