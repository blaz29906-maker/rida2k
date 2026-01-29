"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const filtered = pages.filter((page) =>
        page.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (href: string) => {
        setOpen(false);
        router.push(href);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-panel border border-border shadow-2xl rounded-xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex items-center px-4 border-b border-border">
                    <Search className="w-5 h-5 text-muted-foreground mr-3" />
                    <input
                        autoFocus
                        className="flex-1 h-12 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={() => setOpen(false)} className="p-1 hover:bg-muted rounded">
                        <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                </div>
                <div className="py-2 max-h-[50vh] overflow-y-auto">
                    {filtered.length === 0 ? (
                        <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                            No results found.
                        </div>
                    ) : (
                        filtered.map((page) => (
                            <button
                                key={page.href}
                                onClick={() => handleSelect(page.href)}
                                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors group"
                            >
                                <span className="font-medium">{page.name}</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        ))
                    )}
                </div>
                <div className="px-4 py-2 border-t border-border bg-muted/20 text-xs text-muted-foreground flex justify-between">
                    <span>Navigation</span>
                    <span>Esc to close</span>
                </div>
            </div>
        </div>
    );
}
