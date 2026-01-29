import { Section } from "@/components/section";
import { blogPosts } from "@/data/profile";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="flex flex-col">
            <Section className="max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 5 min read</span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">{post.title}</h1>
                </div>

                <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-headings:font-display prose-headings:font-bold prose-a:text-primary max-w-none">
                    {/* Using whitespace-pre-line to handle newlines in the simple string content */}
                    <div className="whitespace-pre-line">
                        {post.content}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-lg font-bold mb-4">Share this article</h3>
                    {/* Social share buttons placeholder */}
                    <div className="flex gap-4">
                        <button className="text-sm font-medium hover:text-primary">Twitter</button>
                        <button className="text-sm font-medium hover:text-primary">LinkedIn</button>
                    </div>
                </div>
            </Section>
        </article>
    );
}
