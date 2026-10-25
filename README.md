# Santi Jr. 🐣 · Una estrellita está en camino

Una cuenta regresiva llena de nubes para la llegada de **Santi Jr.**

- Tema nocturno oscuro con acentos azul bebé
- Nubes que se desplazan, estrellas titilantes, una luna suave y una nube mascota
- Cuenta regresiva en vivo (días / horas / minutos / segundos)
- Cambia automáticamente a celebración y cuenta ascendente cuando llega el gran día
- Construido con Next.js (App Router), TypeScript, Tailwind CSS v4 y shadcn/ui
- Listo para desplegar en Vercel

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalízalo

Todo se controla desde una sola fecha en `src/lib/baby.ts`. Puedes editar el
valor por defecto ahí o usar variables de entorno (recomendado).

Copia el archivo de ejemplo:

```bash
cp .env.example .env.local
```

| Variable | Requerida | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_BIRTH_DATE` | No | El gran día en ISO 8601 con zona horaria explícita, por ejemplo `2027-01-18T23:59:00-05:00`. Por defecto: 18 de enero de 2027. |
| `NEXT_PUBLIC_BABY_NAME` | No | Nombre que se muestra. Por defecto: `Santi Jr.` |
| `NEXT_PUBLIC_BIRTH_TIME_ZONE` | No | Zona horaria usada para mostrar la fecha. Por defecto: `America/Bogota`. |
| `NEXT_PUBLIC_SITE_URL` | No | URL canónica para los metadatos sociales, por ejemplo `https://santi-jr.vercel.app`. |

Reinicia el servidor de desarrollo después de cambiar las variables.

### Cómo se comporta la página

- **Antes de la fecha:** cuenta regresiva para la llegada. Si faltan 14 días o
  menos, la etiqueta cambia a “Ya casi llega”.
- **Después de la fecha:** la etiqueta cambia a “Bienvenido al mundo”, cae
  confeti una vez, la nube mascota abre los ojos y el contador empieza a subir
  desde el nacimiento (días de vida / horas / minutos / segundos).

Todo el movimiento decorativo se desactiva para quienes prefieren movimiento
reducido.

## Desplegar en Vercel

### Opción A — Desde el panel

1. Sube este repositorio a GitHub / GitLab / Bitbucket.
2. En [Vercel](https://vercel.com/new), importa el repositorio.
3. Framework: **Next.js** (se detecta automáticamente). No hay que cambiar la
   configuración de build.
4. Agrega las variables de entorno de la tabla (como mínimo
   `NEXT_PUBLIC_BIRTH_DATE`).
5. Despliega.

### Opción B — Con la CLI

```bash
npx vercel
npx vercel --prod
```

Después agrega las variables en **Project → Settings → Environment Variables**
y vuelve a desplegar. Los valores `NEXT_PUBLIC_*` se incrustan en tiempo de
build, así que **cambiar la fecha requiere un nuevo despliegue**.

## Estructura del proyecto

```text
src/
├─ app/
│  ├─ globals.css             # tema oscuro azul bebé + animaciones
│  ├─ icon.svg                # favicon de nube
│  ├─ layout.tsx              # fuentes, metadatos, color del tema
│  ├─ opengraph-image.tsx     # tarjeta para compartir en redes
│  └─ page.tsx
├─ assets/
│  ├─ fredoka.ttf             # fuente de la tarjeta OG (SIL OFL)
│  └─ OFL.txt
├─ components/
│  ├─ birthday-experience.tsx # cuenta regresiva + cambio de modo
│  ├─ cloud-mascot.tsx        # nube dormida / despierta
│  ├─ confetti.tsx            # celebración de una sola vez
│  ├─ share-button.tsx        # compartir nativo o copiar enlace
│  ├─ sky-background.tsx      # nubes, estrellas, luna y destellos
│  └─ ui/                     # componentes de shadcn/ui
├─ hooks/use-now.ts
└─ lib/
   ├─ baby.ts                 # fecha, nombre y zona horaria
   └─ countdown.ts            # utilidades puras de tiempo
```

## Scripts

```bash
npm run dev    # desarrollo
npm run build  # build de producción
npm run start  # servir el build de producción
npm run lint   # eslint
```
