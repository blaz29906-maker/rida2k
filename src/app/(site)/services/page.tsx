import { Section } from "@/components/section";
import { services } from "@/data/profile";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Capabilities and offerings.",
};

export default function ServicesPage() {
    return (
        <Section>
            <div className="mb-12">
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">SERVICES</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    High-end digital solutions tailored for growth and innovation.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex flex-col p-8 rounded-2xl border border-border bg-panel hover:border-primary/50 transition-all hover:shadow-lg group"
                    >
                        <Sparkles className="w-8 h-8 text-primary mb-6" />
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                        <p className="text-muted-foreground mb-6 flex-1">{service.summary}</p>
                        <ul className="space-y-2 mb-6 border-t border-border pt-4">
                            {service.bullets.map(b => (
                                <li key={b} className="text-sm text-foreground/80 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center text-sm font-medium text-primary mt-auto">
                            Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
