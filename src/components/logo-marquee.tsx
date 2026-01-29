"use client";

import { cn } from "@/lib/utils";
import { tools, software } from "@/data/profile";
import {
    Palette,
    Terminal,
    Wallet,
    Layers,
    Image as ImageIcon,
    Bot,
    Laptop,
} from "lucide-react";

interface LogoMarqueeProps {
    type: "tools" | "software";
    className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
    "AI / GenAI": Bot,
    "Creative / Build": Palette,
    "Web3": Wallet,
    "Dev/Deploy": Terminal,
    "Media/Utility": Layers,
};

export function LogoMarquee({ type, className }: LogoMarqueeProps) {
    const items = type === "tools" ? tools : software;
    // Duplicate enough times to ensure smooth looping even on wide screens
    const loopItems = [...items, ...items, ...items, ...items];

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden py-4 bg-background border-y border-border",
                className
            )}
        >
            {/* Gradients for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                <div className="flex gap-8 px-4">
                    {loopItems.map((item, i) => {
                        let Icon = Laptop;
                        // @ts-ignore
                        if (item.category && iconMap[item.category]) {
                            // @ts-ignore
                            Icon = iconMap[item.category];
                        } else if (type === "software") {
                            Icon = ImageIcon;
                        }

                        return (
                            <div
                                key={i}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-panel/50 backdrop-blur-sm shadow-sm hover:border-primary/50 hover:bg-panel transition-colors cursor-default"
                            >
                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm font-medium font-sans text-foreground/80 group-hover:text-foreground whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
