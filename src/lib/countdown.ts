export const COUNTDOWN_UNITS = [
  "days",
  "hours",
  "minutes",
  "seconds",
] as const;

export type CountdownUnit = (typeof COUNTDOWN_UNITS)[number];

export type TimeParts = Record<CountdownUnit, number>;

/**
 * Turns a distance in milliseconds into whole days / hours / minutes /
 * seconds. Works for both a countdown and a count-up.
 */
export function getTimeParts(distanceMs: number): TimeParts {
  const totalSeconds = Math.max(0, Math.floor(distanceMs / 1000));

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function pad(value: number) {
  return String(value).padStart(2, "0");
}
