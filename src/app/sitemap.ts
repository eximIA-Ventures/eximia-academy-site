import type { MetadataRoute } from "next";
import { modules } from "@/lib/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eximiaacademy.com.br";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...modules.map((mod) => ({
      url: `${base}/modulos/${mod.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
