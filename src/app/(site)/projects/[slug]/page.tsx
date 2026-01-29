import { Section } from "@/components/section";
import { projects } from "@/data/profile";
import { notFound } from "next/navigation"; // Correct import
import Link from "next/link"; // Required for potential back links
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

// Generate Static Params for build time generation
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.excerpt,
    };
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            <Section className="pb-0">
                <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Link>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-sm border border-border px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                    {project.excerpt}
                </p>
            </Section>

            <Section className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    {Object.entries(project.sections).map(([key, value]) => (
                        <div key={key}>
                            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-border pb-2">{key}</h2>
                            {Array.isArray(value) ? (
                                <ul className="flex flex-wrap gap-2">
                                    {value.map((v: string) => (
                                        <li key={v} className="bg-muted px-3 py-1 rounded-md text-sm">{v}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-lg text-muted-foreground leading-relaxed">{value}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="space-y-8">
                    <div className="p-6 bg-panel rounded-xl border border-border">
                        <h3 className="font-bold mb-4">Project Details</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Client</span>
                                <span>Create Tech Inc.</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Year</span>
                                <span>2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Role</span>
                                <span>Lead Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
