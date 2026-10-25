"use client";

import { useEffect, useState } from "react";

/**
 * Current timestamp, refreshed on every second boundary.
 * Starts as `null` so the server and first client render stay in sync.
 */
export function useNow() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let timer: number;

    const tick = () => {
      setNow(Date.now());
      timer = window.setTimeout(tick, 1_000 - (Date.now() % 1_000) + 10);
    };

    tick();

    return () => window.clearTimeout(timer);
  }, []);

  return now;
}
