"use client";

import { Section } from "@/components/section";
import { blogPosts } from "@/data/profile";
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

export default function BlogPage() {
    const [query, setQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Section>
            <div className="mb-12">
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">BLOG</h1>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Insights on AI, Design, and Future Tech.
                    </p>
                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="pl-9 pr-4 py-2 w-full md:w-64 bg-panel border border-border rounded-full text-sm focus:outline-none focus:border-primary"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col h-full border-t border-border pt-6 hover:border-primary transition-colors"
                        >
                            <span className="text-sm text-muted-foreground mb-4 font-mono">{post.date}</span>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
                            <p className="text-muted-foreground flex-1 mb-6">{post.excerpt}</p>
                            <span className="text-sm font-medium underline decoration-border group-hover:decoration-primary underline-offset-4 transition-all">Read Article</span>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        No articles found matching "{query}".
                    </div>
                )}
            </div>
        </Section>
    );
}
