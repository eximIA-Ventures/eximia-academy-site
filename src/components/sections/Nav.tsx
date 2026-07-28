"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ANCHORS = [
  { href: "#virada", label: "A Virada" },
  { href: "#metodo", label: "Como funciona" },
  { href: "#hci", label: "HCI" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#para-quem", label: "Para quem" },
];

type NavSurface = "light" | "dark";

/**
 * NAV sticky minimal. Observa `[data-nav-surface]` nas seções da página para
 * alternar entre a tinta clara (mundo escuro) e a tinta escura (mundo claro).
 * Sem seções escuras marcadas (como nesta preview isolada), permanece no
 * variante claro por default.
 */
export function Nav() {
  const [surface, setSurface] = useState<NavSurface>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-surface]"),
    );

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (!visible) {
          return;
        }

        setSurface(
          visible.target.getAttribute("data-nav-surface") === "dark"
            ? "dark"
            : "light",
        );
      },
      { rootMargin: "-1px 0px -85% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const isDark = surface === "dark";

  return (
    <header
      className={
        isDark
          ? "sticky top-0 z-50 border-b border-white/10 bg-night/85 text-cream backdrop-blur-md"
          : "sticky top-0 z-50 border-b border-line bg-paper/85 text-ink backdrop-blur-md"
      }
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-6 py-3.5">
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="exímIA Academy, ir para o topo"
        >
          {isDark ? (
            <Image
              src="/secoes/eximia-horizontal-light.png"
              alt="exímIA Academy"
              width={2632}
              height={567}
              unoptimized
              priority
              className="h-6 w-auto md:h-7"
            />
          ) : (
            <Image
              src="/secoes/eximia-horizontal-tinta.svg"
              alt="exímIA Academy"
              width={632}
              height={136}
              unoptimized
              priority
              className="h-6 w-auto md:h-7"
            />
          )}
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navegação principal"
        >
          {ANCHORS.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className={
                isDark
                  ? "font-sans text-sm font-medium text-mist transition-colors duration-[240ms] hover:text-cream"
                  : "font-sans text-sm font-medium text-ink-soft transition-colors duration-[240ms] hover:text-ink"
              }
            >
              {anchor.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            data-cta="nav_acessar"
            className={
              isDark
                ? "hidden rounded-button border border-white/25 px-5 py-2.5 font-sans text-sm font-medium text-cream transition-colors duration-[240ms] hover:border-cream/60 md:inline-flex"
                : "hidden rounded-button border border-line px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors duration-[240ms] hover:border-brasa-500 hover:text-brasa-700 md:inline-flex"
            }
          >
            Acessar
          </a>

          <a
            href="#contato"
            data-cta="nav_agendar"
            className="hidden rounded-button bg-brasa-500 px-5 py-2.5 font-sans text-sm font-semibold text-ink shadow-cta transition-transform duration-[240ms] hover:-translate-y-0.5 md:inline-flex"
          >
            Agendar conversa
          </a>

          <button
            type="button"
            className={
              isDark
                ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-button border border-white/20 md:hidden"
                : "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-button border border-line md:hidden"
            }
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-panel"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={
                  isDark
                    ? "h-[1.5px] w-full origin-center rounded-full bg-cream transition-transform duration-[240ms]"
                    : "h-[1.5px] w-full origin-center rounded-full bg-ink transition-transform duration-[240ms]"
                }
                style={
                  menuOpen
                    ? { transform: "translateY(6.5px) rotate(45deg)" }
                    : undefined
                }
              />
              <span
                className={
                  isDark
                    ? "h-[1.5px] w-full rounded-full bg-cream transition-opacity duration-[240ms]"
                    : "h-[1.5px] w-full rounded-full bg-ink transition-opacity duration-[240ms]"
                }
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className={
                  isDark
                    ? "h-[1.5px] w-full origin-center rounded-full bg-cream transition-transform duration-[240ms]"
                    : "h-[1.5px] w-full origin-center rounded-full bg-ink transition-transform duration-[240ms]"
                }
                style={
                  menuOpen
                    ? { transform: "translateY(-6.5px) rotate(-45deg)" }
                    : undefined
                }
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="nav-mobile-panel"
          className={
            isDark
              ? "border-t border-white/10 bg-night/95 md:hidden"
              : "border-t border-line bg-paper/95 md:hidden"
          }
        >
          <nav
            className="flex flex-col gap-1 px-6 py-4"
            aria-label="Navegação principal, mobile"
          >
            {ANCHORS.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isDark
                    ? "rounded-button px-3 py-2.5 font-sans text-sm font-medium text-mist transition-colors duration-[240ms] hover:bg-white/5 hover:text-cream"
                    : "rounded-button px-3 py-2.5 font-sans text-sm font-medium text-ink-soft transition-colors duration-[240ms] hover:bg-paper-alt hover:text-ink"
                }
              >
                {anchor.label}
              </a>
            ))}
            <a
              href="#contato"
              data-cta="nav_mobile_agendar"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-button bg-brasa-500 px-5 py-2.5 font-sans text-sm font-semibold text-ink shadow-cta"
            >
              Agendar conversa
            </a>
            <a
              href="/login"
              data-cta="nav_mobile_acessar"
              onClick={() => setMenuOpen(false)}
              className={
                isDark
                  ? "mt-2 inline-flex justify-center rounded-button border border-white/25 px-5 py-2.5 font-sans text-sm font-medium text-cream"
                  : "mt-2 inline-flex justify-center rounded-button border border-line px-5 py-2.5 font-sans text-sm font-medium text-ink"
              }
            >
              Acessar minha academia
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
