import { Section } from "@/components/section";
import { tools } from "@/data/profile";
import { Check } from "lucide-react";

export default function ToolsPage() {
    // Group by category
    const categories = Array.from(new Set(tools.filter(t => t.category).map(t => t.category)));

    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-12">TOOLS STACK</h1>
            <div className="grid md:grid-cols-2 gap-12">
                {categories.map(category => (
                    <div key={category}>
                        <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">{category}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {tools.filter(t => t.category === category).map(tool => (
                                <div key={tool.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
