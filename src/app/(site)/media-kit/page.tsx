import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { Download } from "lucide-react";

export default function MediaKitPage() {
    return (
        <Section>
            <h1 className="font-display text-5xl font-bold mb-6">MEDIA KIT</h1>
            <p className="text-xl text-muted-foreground mb-8">Assets and bio for press usage.</p>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Short Bio</h2>
                    <p className="p-6 bg-panel border border-border rounded-xl text-muted-foreground">
                        {profile.summary}
                    </p>
                    <button className="mt-4 flex items-center text-primary font-medium">
                        <Download className="w-4 h-4 mr-2" /> Copy Bio
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Headshots</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Headshot 1</span>
                        </div>
                        <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Headshot 2</span>
                        </div>
                    </div>
                    <button className="mt-4 flex items-center text-primary font-medium">
                        <Download className="w-4 h-4 mr-2" /> Download Assets
                    </button>
                </div>
            </div>
        </Section>
    );
}
