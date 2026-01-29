import { Section } from "@/components/section";

export default function TermsPage() {
    return (
        <Section className="prose dark:prose-invert">
            <h1>Terms of Service</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Standard terms and conditions apply.</p>
        </Section>
    );
}
