import type { CSSProperties } from "react";
import { platform } from "@/components/mockups/platform-tokens";

type PlatformAvatarProps = {
  initials: string;
  tone?: "ai" | "user" | "neutral";
};

const TONE_STYLE: Record<NonNullable<PlatformAvatarProps["tone"]>, CSSProperties> = {
  ai: { backgroundImage: platform.gradientAI, color: "#fff" },
  user: {
    backgroundColor: platform.bgElevated,
    color: platform.textSecondary,
    boxShadow: platform.shadowCard,
  },
  neutral: { backgroundColor: platform.bgElevated, color: platform.textSecondary },
};

/**
 * Avatar no padrão real da plataforma (gradiente Cerrado para a IA, superfície
 * elevada para pessoas), tema dark. Usado dentro do corpo dos 4 mockups, nunca
 * na moldura do navegador (que segue os tokens da landing via Avatar.tsx).
 */
export function PlatformAvatar({ initials, tone = "neutral" }: PlatformAvatarProps) {
  return (
    <span
      style={TONE_STYLE[tone]}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[0.6875rem] font-semibold"
    >
      {initials}
    </span>
  );
}
