"use client";

import type { CSSProperties } from "react";

const COLORS = ["#7dd3fc", "#bae6fd", "#e0f2fe", "#f0abfc", "#a5b4fc"];

const PIECES = Array.from({ length: 36 }, (_, index) => ({
  left: (index * 37 + 11) % 100,
  delay: (index % 12) * 0.16,
  duration: 5 + (index % 5) * 0.75,
  color: COLORS[index % COLORS.length],
  width: 4 + (index % 3) * 2,
  height: 8 + (index % 4) * 3,
  radius: index % 3 === 0 ? "9999px" : "2px",
  drift: (index % 2 === 0 ? 1 : -1) * (18 + (index % 6) * 14),
  spin: 360 + (index % 5) * 180,
}));

/**
 * A one-shot confetti burst shown once Santi Jr. has arrived.
 */
export function Confetti() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {PIECES.map((piece, index) => (
        <span
          key={index}
          className="confetti-piece absolute top-0 block"
          style={
            {
              left: `${piece.left}%`,
              width: piece.width,
              height: piece.height,
              borderRadius: piece.radius,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              "--drift": `${piece.drift}px`,
              "--spin": `${piece.spin}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
