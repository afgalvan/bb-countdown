# Santi Jr. 🐣 · Una estrellita está en camino

Una cuenta regresiva llena de nubes para la llegada de **Santi Jr.**

- Tema nocturno oscuro con acentos azul bebé
- Nubes que se desplazan, estrellas titilantes, una luna suave y una nube mascota
- Cuenta regresiva en vivo (días / horas / minutos / segundos)
- Cambia automáticamente a celebración y cuenta ascendente cuando llega el gran día
- Construido con Next.js (App Router), TypeScript, Tailwind CSS v4 y shadcn/ui
- Listo para desplegar en Vercel

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

Everything is driven by a single date in `src/lib/baby.ts`. You can either edit
the fallback there or use environment variables (recommended).

Copy the example file:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_BIRTH_DATE` | No | The big day as ISO 8601 with an explicit offset, e.g. `2027-01-18T23:59:00-05:00`. Defaults to Jan 18, 2027. |
| `NEXT_PUBLIC_BABY_NAME` | No | Displayed name. Defaults to `Santi Jr.` |
| `NEXT_PUBLIC_BIRTH_TIME_ZONE` | No | Used to display the date. Defaults to `America/Bogota`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for social metadata, e.g. `https://santi-jr.vercel.app`. |

Restart the dev server after changing env values.

### How the page behaves

- **Before the date:** a countdown to the arrival. If there are 14 days or less
  left, the badge changes to “Any day now.”
- **After the date:** the badge changes to “Welcome to the world,” confetti
  falls once, the mascot opens its eyes, and the timer counts **up** since
  Santi Jr. arrived (days old / hours / minutes / seconds).

All decorative motion is disabled for visitors who prefer reduced motion.

## Deploy to Vercel

### Option A — Dashboard

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In [Vercel](https://vercel.com/new), import the repository.
3. Framework preset: **Next.js** (auto-detected). No build settings needed.
4. Add the environment variables from the table above (at minimum
   `NEXT_PUBLIC_BIRTH_DATE`).
5. Deploy.

### Option B — CLI

```bash
npx vercel
npx vercel --prod
```

Then add the env vars in **Project → Settings → Environment Variables** and
redeploy. `NEXT_PUBLIC_*` values are inlined at build time, so **changing the
date requires a new deployment**.

## Project structure

```text
src/
├─ app/
│  ├─ globals.css             # dark baby-blue theme + animations
│  ├─ icon.svg                # cloud favicon
│  ├─ layout.tsx              # fonts, metadata, theme color
│  ├─ opengraph-image.tsx     # social share card
│  └─ page.tsx
├─ components/
│  ├─ birthday-experience.tsx # countdown UI + mode switch
│  ├─ cloud-mascot.tsx        # sleepy / awake cloud
│  ├─ confetti.tsx            # one-shot celebration
│  ├─ share-button.tsx        # native share or copy link
│  ├─ sky-background.tsx      # clouds, stars, moon, sparkles
│  └─ ui/                     # shadcn/ui components
├─ hooks/use-now.ts
└─ lib/
   ├─ baby.ts                 # date, name, time zone
   └─ countdown.ts            # pure time helpers
```

## Scripts

```bash
npm run dev    # start development
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
```
