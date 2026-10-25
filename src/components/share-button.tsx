"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BABY_NAME } from "@/lib/baby";

type ShareStatus = "idle" | "copied" | "error";

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path (e.g. non-secure origins).
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

export function ShareButton({ born }: { born: boolean }) {
  const [status, setStatus] = useState<ShareStatus>("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  const flash = (next: ShareStatus) => {
    setStatus(next);
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 2_200);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const text = born
      ? `¡${BABY_NAME} ya está aquí! Cada segundo con él es un milagrito.`
      : `Una cuenta regresiva para la llegada de ${BABY_NAME} — ¡ya casi está aquí!`;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: `${BABY_NAME} · Una estrellita`,
          text,
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    const copied = await copyToClipboard(url);
    flash(copied ? "copied" : "error");
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={handleShare}
        className="h-10 min-w-[10.5rem] gap-2 rounded-full border-sky-200/15 bg-white/[0.04] px-4 text-xs text-sky-100/80 backdrop-blur-md transition-all hover:border-sky-200/30 hover:bg-sky-200/10 hover:text-white sm:text-sm"
      >
        {status === "copied" ? (
          <Check className="size-3.5 text-emerald-300" />
        ) : (
          <Share2 className="size-3.5 text-sky-300" />
        )}
        {status === "copied"
          ? "¡Enlace copiado!"
          : status === "error"
            ? "No se pudo copiar"
            : "Comparte el amor"}
      </Button>
      <span aria-live="polite" role="status" className="sr-only">
        {status === "copied" ? "Enlace copiado al portapapeles" : ""}
      </span>
    </>
  );
}
