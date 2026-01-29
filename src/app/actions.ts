"use server";

import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    const result = schema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: result.error.flatten().fieldErrors
        };
    }

    // Simulate logging
    console.log("Contact Form Submission:", result.data);

    return {
        success: true,
        message: "Message received! We'll be in touch soon.",
        errors: {}
    };
}
