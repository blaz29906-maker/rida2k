import { Section } from "@/components/section";
import { experience } from "@/data/profile";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">EXPERIENCE</h1>
            <div className="space-y-12 max-w-4xl">
                {experience.map((role, i) => (
                    <div key={i} className="pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                        <h2 className="text-2xl font-bold">{role.role}</h2>
                        <p className="text-xl text-primary font-medium mb-2">{role.company}</p>
                        <span className="text-sm font-mono text-muted-foreground block mb-4">{role.period}</span>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {role.description.map((desc, j) => (
                                <li key={j}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
