import Link from "next/link";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-panel py-12 text-sm">
            <div className="container grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold">RIDA KANWAL</h3>
                    <p className="text-muted-foreground max-w-xs">{profile.summary.slice(0, 120)}...</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary">About</Link></li>
                        <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
                        <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Services</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="/services/ai-powered-design" className="hover:text-primary">AI Design</Link></li>
                        <li><Link href="/services/branding-identity" className="hover:text-primary">Branding</Link></li>
                        <li><Link href="/services/workflow-automation" className="hover:text-primary">Automation</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
                    <div className="flex gap-4">
                        <a href={`mailto:${profile.contact.email}`} className="text-muted-foreground hover:text-primary"><Mail className="w-5 h-5" /></a>
                        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></a>
                        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github className="w-5 h-5" /></a>
                    </div>
                    <p className="mt-4 text-muted-foreground text-xs">
                        &copy; {new Date().getFullYear()} Rida Kanwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
