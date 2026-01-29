"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { CommandPalette } from "./command-palette";
import { Menu, X, Command } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 font-display text-xl font-bold tracking-tight">
                        <span>RIDA KANWAL</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative",
                                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            className="hidden md:flex items-center gap-2 text-xs text-muted-foreground border border-border px-2 py-1.5 rounded-md hover:bg-muted transition-colors mr-2"
                            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                        >
                            <Command className="w-3 h-3" />
                            <span>Cmd+K</span>
                        </button>
                        <ThemeToggle />
                        <button
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed inset-0 top-16 z-30 bg-background border-t border-border md:hidden animate-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col p-6 gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "text-lg font-medium py-2 border-b border-border/50",
                                    pathname === link.href ? "text-primary" : "text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            <CommandPalette />
        </>
    );
}
