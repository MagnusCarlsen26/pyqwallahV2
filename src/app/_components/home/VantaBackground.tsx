"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      if (!containerRef.current || effectRef.current) {
        return;
      }

      const { default: VANTA_NET } = await import("~/lib/vanta-net");
      const threeModule = await import("three");
      const THREE = "default" in threeModule ? threeModule.default : threeModule;

      if (cancelled || !containerRef.current) {
        return;
      }

      effectRef.current = VANTA_NET({
        el: containerRef.current,
        THREE,
        backgroundAlpha: 1,
        backgroundColor: "#0e172a",
        color: 982784,
        dotSize: 0.40,
        gyroControls: false,
        maxDistance: 16,
        minHeight: 200,
        minWidth: 200,
        mouseControls: false,
        points: 40,
        scale: 1,
        scaleMobile: 1,
        showDots: true,
        spacing: 20,
        touchControls: false,
      });
    };

    void init();

    return () => {
      cancelled = true;
      effectRef.current?.destroy?.();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
