import { notFound } from "next/navigation";
import { modules, getModule } from "@/lib/modules";
import { ModulePage } from "./module-page";
import type { Metadata } from "next";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};

  const title = `${mod.name} — Módulo da eximIA Academy`;
  const description = mod.description.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://eximiaacademy.com/modulos/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: `https://eximiaacademy.com/modulos/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  return <ModulePage module={mod} />;
}
