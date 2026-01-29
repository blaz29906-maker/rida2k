import { Section } from "@/components/section";

const testimonials = [
    { name: "Client A", role: "CEO, Tech Co", quote: "Rida delivered exceptional work that transformed our brand." },
    { name: "Client B", role: "Founder, Startup", quote: "The AI integration was a game changer for our workflow." },
    { name: "Client C", role: "Marketing Director", quote: "Professional, creative, and highly technical. A rare mix." },
    { name: "Client D", role: "Product Manager", quote: "Best developer we've worked with." },
    { name: "Client E", role: "Designer", quote: "Her eye for detail is unmatched." },
    { name: "Client F", role: "CTO", quote: "Clean code and stunning visuals." },
];

export default function TestimonialsPage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">TESTIMONIALS</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="p-8 bg-panel border border-border rounded-2xl">
                        <p className="text-lg italic mb-6">"{t.quote}"</p>
                        <div>
                            <div className="font-bold">{t.name}</div>
                            <div className="text-sm text-muted-foreground">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
