import { MetadataRoute } from "next";
import { projects, blogPosts, services } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rida-kanwal.com"; // Placeholder domain

    const staticRoutes = [
        "",
        "/about",
        "/resume",
        "/contact",
        "/projects",
        "/services",
        "/blog",
        "/experience",
        "/education",
        "/skills",
        "/tools",
        "/software",
        "/testimonials",
        "/media-kit",
        "/now",
        "/book",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes];
}
