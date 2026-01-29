import { Section } from "@/components/section";
import { skills } from "@/data/profile";

export default function SkillsPage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">SKILLS</h1>
            <div className="flex flex-wrap gap-4">
                {skills.map(skill => (
                    <div key={skill} className="px-6 py-3 bg-panel border border-border rounded-full text-lg font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                        {skill}
                    </div>
                ))}
            </div>
        </Section>
    );
}
