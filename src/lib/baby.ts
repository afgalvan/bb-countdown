const FALLBACK_BIRTH_DATE = "2027-01-18T23:59:00-05:00";
const FALLBACK_TIME_ZONE = "America/Bogota";

function resolveTimeZone(candidate: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: candidate });
    return candidate;
  } catch {
    return FALLBACK_TIME_ZONE;
  }
}

/*
 * ------------------------------------------------------------------
 *  CUSTOMIZE ME
 * ------------------------------------------------------------------
 *  NEXT_PUBLIC_BIRTH_DATE  ISO date with offset, set in `.env.local`
 *                          or in Vercel → Project → Environment Vars.
 *  NEXT_PUBLIC_BABY_NAME   Optional. Defaults to "Santi Jr.".
 *  NEXT_PUBLIC_BIRTH_TIME_ZONE
 *                          Used to display the date. Defaults to
 *                          "America/Bogota".
 * ------------------------------------------------------------------
 */
export const BABY_NAME =
  process.env.NEXT_PUBLIC_BABY_NAME?.trim() || "Santi Jr.";

const birthDateISO =
  process.env.NEXT_PUBLIC_BIRTH_DATE?.trim() || FALLBACK_BIRTH_DATE;

const parsedBirthDate = new Date(birthDateISO);

export const BIRTH_DATE = Number.isNaN(parsedBirthDate.getTime())
  ? new Date(FALLBACK_BIRTH_DATE)
  : parsedBirthDate;

export const BIRTH_TIME_ZONE = resolveTimeZone(
  process.env.NEXT_PUBLIC_BIRTH_TIME_ZONE?.trim() || FALLBACK_TIME_ZONE,
);

const birthDateFormatter = new Intl.DateTimeFormat("es-CO", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: BIRTH_TIME_ZONE,
});

export function formatBirthDate(date: Date = BIRTH_DATE) {
  return birthDateFormatter.format(date);
}
