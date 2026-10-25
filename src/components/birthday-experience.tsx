"use client";

import {
  CalendarHeart,
  Heart,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CloudMascot } from "@/components/cloud-mascot";
import { Confetti } from "@/components/confetti";
import { ShareButton } from "@/components/share-button";
import { useNow } from "@/hooks/use-now";
import { BABY_NAME, BIRTH_DATE, formatBirthDate } from "@/lib/baby";
import { getTimeParts, pad } from "@/lib/countdown";

const BIRTH_TIMESTAMP = BIRTH_DATE.getTime();

export function BirthdayExperience() {
  const now = useNow();
  const born = now !== null && now >= BIRTH_TIMESTAMP;

  const distance =
    now === null ? null : born ? now - BIRTH_TIMESTAMP : BIRTH_TIMESTAMP - now;
  const parts = distance === null ? null : getTimeParts(distance);

  const nearlyHere = !born && parts !== null && parts.days <= 14;

  const badgeLabel = born
    ? "Bienvenido al mundo"
    : nearlyHere
      ? "Ya casi llega"
      : "Una estrellita está en camino";

  const subtitle = born
    ? `Nació el ${formatBirthDate()}. Ya lo queremos más que a todas las estrellas del cielo.`
    : "Contamos cada segundito hasta que por fin podamos conocerte.";

  const units = [
    { key: "days", label: born ? "días de vida" : "días" },
    { key: "hours", label: "horas" },
    { key: "minutes", label: "minutos" },
    { key: "seconds", label: "segundos" },
  ] as const;

  const ariaLabel = parts
    ? `${parts.days} días, ${parts.hours} horas, ${parts.minutes} minutos y ${parts.seconds} segundos ${
        born ? `desde que llegó ${BABY_NAME}` : `para que llegue ${BABY_NAME}`
      }`
    : `Cargando la cuenta regresiva de ${BABY_NAME}`;

  return (
    <div className="relative z-10 flex min-h-svh flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
      {born ? <Confetti /> : null}

      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Badge
          variant="outline"
          className="h-7 gap-1.5 rounded-full border-sky-200/20 bg-sky-200/[0.07] px-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-sky-100/80 backdrop-blur-sm sm:h-8 sm:text-[11px]"
        >
          {born ? (
            <PartyPopper className="text-sky-300" />
          ) : (
            <Sparkles className="text-sky-300" />
          )}
          {badgeLabel}
        </Badge>

        <div className="relative mt-6 sm:mt-7">
          <CloudMascot awake={born} />
        </div>

        <div className="relative mt-1">
          <h1 className="flex flex-wrap items-center justify-center gap-x-2 font-display text-[4.15rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:gap-x-3 sm:text-8xl md:text-[7.2rem]">
            <span className="hero-title inline-block">{BABY_NAME}</span>
            <span
              aria-hidden="true"
              className="inline-block text-[3rem] leading-none sm:text-7xl md:text-[5.4rem]"
            >
              🐣
            </span>
          </h1>
        </div>

        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-sky-100/65 sm:mt-5 sm:max-w-xl sm:text-base">
          {subtitle}
        </p>

        <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.38em] text-sky-200/45 sm:mt-10 sm:text-[11px]">
          {born
            ? `${BABY_NAME} está aquí desde hace`
            : `hasta que conozcamos a ${BABY_NAME}`}
        </p>

        <div
          role="timer"
          aria-label={ariaLabel}
          className="mt-3 grid w-full max-w-2xl grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-4 sm:gap-4"
        >
          {units.map((unit) => {
            const value = parts ? pad(parts[unit.key]) : "--";

            return (
              <Card
                key={unit.key}
                className="relative gap-0 overflow-hidden rounded-[1.45rem] border-0 bg-white/[0.045] py-0 shadow-[0_24px_80px_-45px_rgba(56,189,248,0.65)] ring-1 ring-sky-200/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065] hover:ring-sky-200/30 sm:rounded-[1.7rem]"
                aria-hidden="true"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/60 to-transparent" />
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-24 -translate-x-1/2 rounded-full bg-sky-400/20 blur-2xl" />

                <CardContent className="flex min-h-[6.4rem] flex-col items-center justify-center gap-1.5 px-2 py-5 sm:min-h-[8.2rem] sm:gap-2 sm:py-6">
                  <span
                    key={value}
                    className="tick-in bg-gradient-to-b from-white via-sky-100 to-sky-300 bg-clip-text font-display text-[2.6rem] font-semibold leading-none tabular-nums tracking-tight text-transparent sm:text-5xl md:text-[3.4rem]"
                  >
                    {value}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-sky-100/50 sm:text-[10px] sm:tracking-[0.28em]">
                    {unit.label}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-7 flex w-full max-w-2xl flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
          <div className="inline-flex h-10 max-w-full items-center gap-2 rounded-full border border-sky-200/15 bg-white/[0.04] px-4 text-xs text-sky-100/70 backdrop-blur-md sm:text-sm">
            {born ? (
              <PartyPopper className="size-3.5 shrink-0 text-sky-300" />
            ) : (
              <CalendarHeart className="size-3.5 shrink-0 text-sky-300" />
            )}
            <span className="truncate">
              {born ? (
                <>
                  <span className="text-sky-200/45">Nació el</span>{" "}
                  {formatBirthDate()}
                </>
              ) : (
                <>
                  <span className="text-sky-200/45">Llegada esperada</span> ·{" "}
                  {formatBirthDate()}
                </>
              )}
            </span>
          </div>

          <ShareButton born={born} />
        </div>

        <Separator className="mt-9 max-w-[15rem] bg-gradient-to-r from-transparent via-sky-200/25 to-transparent" />

        <footer className="mt-5 flex flex-col items-center gap-1.5 text-center">
          <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-sky-200/40">
            Hecho con
            <Heart className="size-3 fill-rose-300/70 text-rose-300/70" />
            para {BABY_NAME}
          </span>
          <span className="text-[11px] text-sky-100/30">
            {born
              ? "Cada segundo contigo es un milagrito."
              : "Cada segundo nos acerca un poquito más a ti."}
          </span>
        </footer>
      </div>
    </div>
  );
}
