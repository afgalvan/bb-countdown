import { cn } from "@/lib/utils";

type CloudMascotProps = {
  awake?: boolean;
  className?: string;
};

export function CloudMascot({ awake = false, className }: CloudMascotProps) {
  return (
    <div className={cn("relative w-32 sm:w-40", className)}>
      <div className="absolute inset-x-4 bottom-2 top-6 -z-10 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="float-soft">
        <svg
          viewBox="0 0 220 150"
          fill="none"
          role="img"
          aria-label={
            awake
              ? "Una nube mascota bebé azul y feliz con los ojos abiertos"
              : "Una nube mascota bebé azul dormilona"
          }
          className="h-auto w-full drop-shadow-[0_18px_35px_rgba(14,116,144,0.35)]"
        >
          <defs>
            <linearGradient
              id="mascot-body"
              x1="62"
              y1="32"
              x2="150"
              y2="132"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f8fdff" />
              <stop offset="0.45" stopColor="#c9edff" />
              <stop offset="1" stopColor="#7dd3fc" />
            </linearGradient>
            <radialGradient id="mascot-cheek" cx="0" cy="0" r="1">
              <stop stopColor="#fda4af" stopOpacity="0.7" />
              <stop offset="1" stopColor="#fda4af" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Body */}
          <path
            d="M56 114c-16.5 0-29-11.2-29-25.4 0-13.2 10.5-24 25.2-25.1C55.4 46 69.4 33 87.4 33c19.3 0 35 14.2 37.1 32.3 15.1 1.1 26.5 11.9 26.5 25.3 0 12.5-10.1 23.4-23.4 23.4H56Z"
            fill="url(#mascot-body)"
            stroke="#e0f2fe"
            strokeOpacity="0.7"
            strokeWidth="2.5"
          />

          {/* Highlight */}
          <ellipse
            cx="83"
            cy="55"
            rx="28"
            ry="12"
            fill="#ffffff"
            opacity="0.35"
            transform="rotate(-12 83 55)"
          />

          {/* Little curl */}
          <path
            d="M101 34c-3.4-8.8 3.8-15.4 11.4-12.6"
            stroke="#7dd3fc"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {awake ? (
            <>
              {/* Open, sparkly eyes */}
              <circle cx="87" cy="74" r="4.2" fill="#0c4a6e" />
              <circle cx="85.6" cy="72.6" r="1.3" fill="#ffffff" />
              <circle cx="121" cy="74" r="4.2" fill="#0c4a6e" />
              <circle cx="119.6" cy="72.6" r="1.3" fill="#ffffff" />
              {/* Happy open smile */}
              <path
                d="M98 87c4.2 5.2 10.8 5.2 15 0"
                stroke="#0c4a6e"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            </>
          ) : (
            <>
              {/* Sleeping eyes */}
              <path
                d="M82 74c2.8 3.6 6.9 3.6 9.7 0M116 74c2.8 3.6 6.9 3.6 9.7 0"
                stroke="#0c4a6e"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
              {/* Tiny smile */}
              <path
                d="M99 87c3.7 3.4 8.3 3.4 12 0"
                stroke="#0c4a6e"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </>
          )}

          {/* Blush */}
          <ellipse cx="70" cy="87" rx="10" ry="5.5" fill="url(#mascot-cheek)" />
          <ellipse cx="139" cy="87" rx="10" ry="5.5" fill="url(#mascot-cheek)" />
        </svg>
      </div>

      {/* Orbiting twinkles */}
      <svg
        className="absolute -left-2 top-4 size-3 text-sky-200/80 star-twinkle"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDuration: "4.5s" }}
      >
        <path d="M12 0c.55 6.42 5.03 10.9 11.45 11.45C17.03 12 12.55 16.48 12 22.9 11.45 16.48 6.97 12 .55 11.45 6.97 10.9 11.45 6.42 12 0Z" />
      </svg>
      <svg
        className="absolute -right-1 top-10 size-2 text-sky-100/70 star-twinkle"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDuration: "5.5s", animationDelay: "-1.8s" }}
      >
        <path d="M12 0c.55 6.42 5.03 10.9 11.45 11.45C17.03 12 12.55 16.48 12 22.9 11.45 16.48 6.97 12 .55 11.45 6.97 10.9 11.45 6.42 12 0Z" />
      </svg>
    </div>
  );
}
