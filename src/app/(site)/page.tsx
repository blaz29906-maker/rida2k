import Link from "next/link";
import { Section } from "@/components/section";
import { profile, projects, blogPosts, services } from "@/data/profile";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
// Button import removed as we use Link with utility classes

// I'll use raw tailwind for buttons to avoid shadcn setup overhead if I haven't done it, 
// OR I'll quickly create a button component. simple <button> with utility classes.

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-16">
                <div className="container relative z-10 flex flex-col items-start gap-8">
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tighter md:text-[8rem] lg:text-[10rem] animate-in fade-in slide-in-from-bottom-10 duration-500">
                        CREATIVE
                        <br />
                        <span className="text-muted-foreground">AGENCY.</span>
                        {/* Wait, user title is Creative Technologist. Let's use that. */}
                        <span className="hidden">Technologist</span>
                    </h1>
                    {/* Revised Hero Text based on Brand Vibe */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-display text-6xl font-bold leading-none tracking-tighter md:text-8xl lg:text-9xl">
                            RIDA KANWAL
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mt-4">
                            {profile.title}.<br />
                            Building premium digital experiences at the intersection of AI, Design, and Web3.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/resume" // Or direct download logic
                            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </div>
                </div>

                {/* Abstract BG elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            </section>

            {/* About / Intro */}
            <Section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        INNOVATION <br /> MEETS DESIGN.
                    </h2>
                </div>
                <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {profile.summary}
                    </p>
                    <Link href="/about" className="inline-flex items-center mt-6 font-medium hover:text-primary transition-colors">
                        More about me <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </Section>

            {/* Selected Work */}
            <Section>
                <div className="flex items-end justify-between mb-12">
                    <h2 className="font-display text-4xl md:text-6xl font-bold">SELECTED WORK</h2>
                    <Link href="/projects" className="hidden md:flex items-center hover:text-primary transition-colors">
                        View all projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block space-y-4">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted relative">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-display text-2xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                                    {project.title}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{project.excerpt}</p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs border border-border px-2 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 md:hidden">
                    <Link href="/projects" className="flex items-center hover:text-primary transition-colors">
                        View all projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </Section>

            {/* Services */}
            <Section className="bg-panel py-20 rounded-3xl my-12">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">SERVICES</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
                            <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{service.summary}</p>
                            <ul className="space-y-2">
                                {service.bullets.map(bullet => (
                                    <li key={bullet} className="text-xs text-muted-foreground flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Latest Insights */}
            <Section>
                <div className="flex items-end justify-between mb-12">
                    <h2 className="font-display text-4xl md:text-6xl font-bold">INSIGHTS</h2>
                    <Link href="/blog" className="hidden md:flex items-center hover:text-primary transition-colors">
                        Read the blog <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {blogPosts.slice(0, 3).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border-t border-border pt-8 hover:border-primary transition-colors">
                            <span className="text-xs text-muted-foreground mb-4 block">{post.date}</span>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
