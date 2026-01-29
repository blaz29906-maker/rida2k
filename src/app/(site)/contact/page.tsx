"use client";

import { Section } from "@/components/section";
import { submitContact } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Loader2, Send } from "lucide-react";
import { profile } from "@/data/profile";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
}

const initialState = {
    success: false,
    message: "",
    errors: {} as Record<string, string[]>,
};

export default function ContactPage() {
    const [state, formAction] = useFormState(submitContact, initialState);

    return (
        <div className="flex flex-col">
            <Section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">CONTACT</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Ready to start a project? Let's build something extraordinary together.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</span>
                            <p className="text-lg font-medium">{profile.contact.email}</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</span>
                            <p className="text-lg font-medium">{profile.contact.location}</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</span>
                            <p className="text-lg font-medium">{profile.contact.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-panel p-8 rounded-3xl border border-border">
                    {state.success ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <Send className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input name="name" id="name" required className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none" placeholder="Your name" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input name="email" id="email" type="email" required className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input name="subject" id="subject" required className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none" placeholder="Project inquiry" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea name="message" id="message" required rows={4} className="w-full p-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none resize-none" placeholder="Tell me about your project..." />
                            </div>

                            <SubmitButton />

                            {state.errors && Object.keys(state.errors).length > 0 && (
                                <div className="text-red-500 text-sm bg-red-500/10 p-4 rounded-lg">
                                    Please check the form for errors.
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </Section>
        </div>
    );
}
