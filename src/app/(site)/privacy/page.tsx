import { Section } from "@/components/section";

export default function PrivacyPage() {
    return (
        <Section className="prose dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This is a standard privacy policy template. We respect your privacy and do not sell your data.</p>
        </Section>
    );
}
