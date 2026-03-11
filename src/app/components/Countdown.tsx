"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  const clamped = Math.max(0, diff);

  const totalHours = Math.floor(clamped / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return { diff, days, hours };
}

function Tile({
  label,
  value,
  delayMs,
}: {
  label: string;
  value: number;
  delayMs: number;
}) {
  return (
    <div
      className="animate-fade-up rounded-3xl border border-[#E6E0D6] bg-white/60 px-6 py-5 shadow-[0_10px_30px_rgba(15,15,16,0.06)] backdrop-blur"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="text-[44px] leading-none font-[family-name:var(--font-space)] font-bold tabular-nums tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[#5B5B5B]">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const target = useMemo(() => new Date("2026-03-25T00:00:00+05:00"), []);
  const [t, setT] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.diff <= 0) {
    return (
      <div className="text-center animate-fade-up">
        <div className="font-[family-name:var(--font-space)] text-2xl font-bold">
          We’re live.
        </div>
        <div className="mt-2 text-[#5B5B5B]">Check socials for the latest drop.</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Tile label="Days" value={t.days} delayMs={120} />
      <Tile label="Hours" value={t.hours} delayMs={220} />
    </div>
  );
}