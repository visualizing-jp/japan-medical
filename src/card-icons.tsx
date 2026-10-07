/**
 * 目次カードの線画。Lucide（ISC）のパスを、紙の上に一つ置く。
 * 線幅は vector-effect で画面上 1px に固定する。
 * パスは https://github.com/lucide-icons/lucide/tree/main/icons のまま。
 */

import type { ReactNode } from "react";

const LINE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="card-mark h-20 w-20 text-ink" {...LINE}>
      {children}
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  checkup: (
    <Icon>
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </Icon>
  ),
};

export function CardIcon({ slug }: { slug: string }) {
  return ICONS[slug] ?? null;
}
