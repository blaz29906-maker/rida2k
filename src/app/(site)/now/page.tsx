import { Section } from "@/components/section";

export default function NowPage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-6">NOW</h1>
            <p className="text-xl text-muted-foreground mb-4">What I'm focused on right now.</p>
            <ul className="list-disc pl-5 space-y-2 text-lg">
                <li>Deep diving into Generative AI workflows.</li>
                <li>Building premium web experiences for clients.</li>
                <li>Learning standard deviation of creativity.</li>
            </ul>
        </Section>
    );
}
