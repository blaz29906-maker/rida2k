import { Section } from "@/components/section";
import { experience, education, skills, profile } from "@/data/profile";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "Professional experience and skills.",
};

export default function ResumePage() {
    return (
        <div className="flex flex-col">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">RESUME</h1>
                        <p className="text-xl text-muted-foreground text-foreground max-w-2xl">{profile.summary}</p>
                    </div>
                    <a
                        href="/Rida-Kanwal-Resume.pdf"
                        download
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                    >
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-16">
                        {/* Experience */}
                        <div>
                            <h2 className="flex items-center text-2xl font-bold mb-8 border-b border-border pb-4">
                                <Briefcase className="w-6 h-6 mr-3 text-primary" /> Experience
                            </h2>
                            <div className="space-y-12">
                                {experience.map((role, i) => (
                                    <div key={i} className="relative pl-8 border-l border-border hover:border-primary transition-colors">
                                        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary" />
                                        <h3 className="text-xl font-bold">{role.role}</h3>
                                        <div className="text-lg font-medium text-muted-foreground mb-2">{role.company} | {role.period}</div>
                                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                            {role.description.map((desc, j) => (
                                                <li key={j}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h2 className="flex items-center text-2xl font-bold mb-8 border-b border-border pb-4">
                                <GraduationCap className="w-6 h-6 mr-3 text-primary" /> Education
                            </h2>
                            <div className="space-y-8">
                                {education.map((edu, i) => (
                                    <div key={i} className="relative pl-8 border-l border-border hover:border-primary transition-colors">
                                        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary" />
                                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                                        <div className="text-lg font-medium text-muted-foreground">{edu.institution}</div>
                                        <div className="text-sm text-muted-foreground">{edu.period} • GPA: {edu.gpa}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* Skills */}
                        <div className="bg-panel p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold mb-6">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
