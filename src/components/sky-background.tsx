import { cn } from "@/lib/utils";

type CloudConfig = {
  top: string;
  width: number;
  opacity: number;
  duration: number;
  delay: number;
  blur: number;
  reverse?: boolean;
  bob?: number;
};

const CLOUDS: CloudConfig[] = [
  { top: "7%", width: 280, opacity: 0.16, duration: 132, delay: 18, blur: 3, bob: 13 },
  { top: "15%", width: 430, opacity: 0.1, duration: 178, delay: 96, blur: 8, reverse: true, bob: 17 },
  { top: "33%", width: 210, opacity: 0.13, duration: 112, delay: 52, blur: 2, bob: 11 },
  { top: "47%", width: 300, opacity: 0.08, duration: 150, delay: 8, blur: 5, reverse: true, bob: 19 },
  { top: "58%", width: 520, opacity: 0.1, duration: 196, delay: 138, blur: 10, bob: 22 },
  { top: "70%", width: 360, opacity: 0.16, duration: 144, delay: 74, blur: 6, reverse: true, bob: 15 },
  { top: "83%", width: 660, opacity: 0.22, duration: 168, delay: 122, blur: 13, bob: 24 },
  { top: "39%", width: 240, opacity: 0.07, duration: 102, delay: 30, blur: 2, bob: 12 },
];

const STARS = Array.from({ length: 56 }, (_, index) => ({
  left: ((index * 61 + 13) % 97) + 1.5,
  top: ((index * 37 + 7) % 86) + 2,
  size: index % 11 === 0 ? 3 : index % 4 === 0 ? 2 : 1.5,
  delay: (index * 0.41) % 6,
  duration: 3.4 + (index % 5),
  glow: index % 11 === 0,
}));

const SPARKLES = [
  { left: "8%", top: "31%", size: "1.35rem", delay: "0s" },
  { left: "90%", top: "24%", size: "1rem", delay: "-2.5s" },
  { left: "14%", top: "72%", size: "0.9rem", delay: "-4s" },
  { left: "84%", top: "64%", size: "1.2rem", delay: "-1.5s" },
  { left: "72%", top: "12%", size: "0.75rem", delay: "-3s" },
];

function Cloud({ config }: { config: CloudConfig }) {
  return (
    <div
      className="cloud-drift absolute left-0"
      style={{
        top: config.top,
        opacity: config.opacity,
        animationDuration: `${config.duration}s`,
        animationDelay: `-${config.delay}s`,
        animationDirection: config.reverse ? "reverse" : "normal",
      }}
    >
      <div
        className="cloud-bob"
        style={{ animationDuration: `${config.bob ?? 14}s` }}
      >
        <svg
          width={config.width}
          height={config.width * 0.5}
          viewBox="0 0 240 120"
          fill="none"
          style={{ filter: `blur(${config.blur}px)` }}
        >
          <ellipse cx="62" cy="76" rx="46" ry="31" fill="url(#sky-cloud)" />
          <ellipse cx="112" cy="56" rx="52" ry="41" fill="url(#sky-cloud)" />
          <ellipse cx="168" cy="73" rx="48" ry="33" fill="url(#sky-cloud)" />
          <rect
            x="26"
            y="66"
            width="188"
            height="42"
            rx="21"
            fill="url(#sky-cloud)"
          />
          <ellipse
            cx="105"
            cy="51"
            rx="31"
            ry="15"
            fill="url(#sky-cloud-highlight)"
            opacity="0.55"
          />
        </svg>
      </div>
    </div>
  );
}

export function SkyBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night"
    >
      {/* Base sky + soft aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_-10%,#133961_0%,#0a1c36_44%,#050b18_78%)]" />
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[130px]" />
      <div className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-[130px]" />

      {/* Shared cloud gradients */}
      <svg className="absolute size-0">
        <defs>
          <linearGradient id="sky-cloud" x1="0" y1="0" x2="0.15" y2="1">
            <stop stopColor="#e0f2fe" />
            <stop offset="0.5" stopColor="#bae6fd" />
            <stop offset="1" stopColor="#7dd3fc" />
          </linearGradient>
          <linearGradient id="sky-cloud-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stars */}
      <div className="absolute inset-0">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="star-twinkle absolute rounded-full bg-sky-100"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animationDuration: `${star.duration}s`,
              animationDelay: `-${star.delay}s`,
              boxShadow: star.glow
                ? "0 0 8px 1px rgba(186, 230, 253, 0.8)"
                : undefined,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute right-[4%] top-[9%] size-14 sm:right-[7%] sm:top-[6%] sm:size-24">
        <div className="moon-glow absolute -inset-10 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#f8fdff_0%,#e0f2fe_35%,#bae6fd_68%,#7dd3fc_100%)] shadow-[inset_-12px_-10px_30px_rgba(14,116,144,0.35),0_0_70px_rgba(125,211,252,0.35)]" />
        <span className="absolute left-[27%] top-[28%] size-2 rounded-full bg-sky-500/15 sm:size-2.5" />
        <span className="absolute left-[58%] top-[55%] size-1.5 rounded-full bg-sky-500/15 sm:size-2" />
        <span className="absolute left-[42%] top-[70%] size-1 rounded-full bg-sky-500/20" />
      </div>

      {/* Clouds */}
      <div className="absolute inset-0">
        {CLOUDS.map((cloud, index) => (
          <Cloud key={index} config={cloud} />
        ))}
      </div>

      {/* Four-point sparkles */}
      {SPARKLES.map((sparkle, index) => (
        <svg
          key={index}
          className={cn("float-soft absolute text-sky-200/45")}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c.55 6.42 5.03 10.9 11.45 11.45C17.03 12 12.55 16.48 12 22.9 11.45 16.48 6.97 12 .55 11.45 6.97 10.9 11.45 6.42 12 0Z" />
        </svg>
      ))}

      {/* One shy shooting star */}
      <span className="shooting-star absolute left-[12%] top-[18%] h-px w-24 sm:w-32" />

      {/* Bottom fog */}
      <div className="absolute -bottom-28 left-1/2 h-64 w-[150%] -translate-x-1/2 rounded-[100%] bg-sky-400/10 blur-3xl" />
      <div className="absolute -bottom-20 left-1/2 h-48 w-[110%] -translate-x-1/2 rounded-[100%] bg-cyan-300/[0.07] blur-3xl" />

      {/* Soft halo keeps the countdown crisp while clouds drift behind it */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_52%_at_50%_50%,rgba(5,11,24,0.5)_0%,rgba(5,11,24,0.2)_48%,transparent_78%)]" />

      {/* Readability vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(95%_75%_at_50%_45%,transparent_0%,rgba(5,11,24,0.5)_100%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
