import { Section } from "@/components/section";

export default function BookPage() {
    return (
        <Section className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-8">BOOK A CALL</h1>
            <div className="aspect-square w-full max-w-md mx-auto bg-muted rounded-2xl flex items-center justify-center border border-border">
                <p className="text-muted-foreground">
                    [Calendly Embed Placeholder]
                    <br />
                    calendar.com/rida-kanwal
                </p>
            </div>
        </Section>
    );
}
