import { Section } from "@/components/section";
import { services } from "@/data/profile";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return {};
    return {
        title: service.title,
        description: service.summary,
    };
}

export default function ServicePage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            <Section>
                <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                </Link>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.summary}
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="bg-panel p-8 rounded-2xl border border-border">
                        <h3 className="font-bold text-xl mb-6">What's Included</h3>
                        <ul className="space-y-4">
                            {service.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                            {/* Add some generic bullets to flesh it out if needed */}
                            <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <span>Consultation & Strategy</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <span>Implementation & Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
}
