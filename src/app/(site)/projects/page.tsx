import { Section } from "@/components/section";
import { projects } from "@/data/profile";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected work and case studies.",
};

export default function ProjectsPage() {
    return (
        <Section>
            <div className="mb-12">
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">PROJECTS</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A selection of work across AI, Branding, and Web3.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block space-y-4 border border-border p-6 rounded-2xl bg-panel hover:border-primary/50 transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground">{project.excerpt}</p>
                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md">{tag}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
