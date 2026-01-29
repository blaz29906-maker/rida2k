import { Section } from "@/components/section";
import { education } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">EDUCATION</h1>
            <div className="space-y-12 max-w-4xl">
                {education.map((edu, i) => (
                    <div key={i} className="p-8 bg-panel border border-border rounded-2xl">
                        <GraduationCap className="w-10 h-10 text-primary mb-4" />
                        <h2 className="text-3xl font-bold mb-2">{edu.degree}</h2>
                        <p className="text-xl text-muted-foreground mb-4">{edu.institution}</p>
                        <div className="flex gap-4 text-sm font-mono">
                            <span>{edu.period}</span>
                            <span>GPA: {edu.gpa}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
