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

      const [{ default: VANTA_NET }, threeModule] = await Promise.all([
        import("vanta/dist/vanta.net.min"),
        import("three"),
      ]);

      const THREE = "default" in threeModule ? threeModule.default : threeModule;

      if (cancelled || !containerRef.current) {
        return;
      }

      (globalThis as { THREE?: Record<string, unknown> }).THREE = THREE;

      effectRef.current = VANTA_NET({
        el: containerRef.current,
        THREE,
        backgroundAlpha: 1,
        backgroundColor: 2299196,
        color: 982784,
        gyroControls: false,
        maxDistance: 22,
        minHeight: 200,
        minWidth: 200,
        mouseControls: true,
        points: 20,
        scale: 1,
        scaleMobile: 1,
        showDots: true,
        spacing: 20,
        touchControls: true,
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
