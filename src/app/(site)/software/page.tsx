import { Section } from "@/components/section";
import { software } from "@/data/profile";
import { Laptop } from "lucide-react";

export default function SoftwarePage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">SOFTWARE STACK</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {software.map(sw => (
                    <div key={sw.name} className="flex flex-col items-center justify-center p-8 bg-panel border border-border rounded-2xl hover:border-primary/50 transition-colors">
                        <Laptop className="w-8 h-8 text-muted-foreground mb-4" />
                        <span className="font-bold text-center">{sw.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
