"use client";

import { useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";

// Logical canvas size in CSS px. Every block size below divides it evenly.
const SIZE = 240;
const CELL = 10; // resting block size: a 24 x 24 portrait
const INTRO = [40, 20]; // coarser passes shown once on load
const LENS = [
  { r: 0.45, block: 1 },
  { r: 0.75, block: 2 },
  { r: 1, block: 5 },
];
const RADIUS = 64;

type Props = { src: StaticImageData; alt: string };

export default function PixelPortrait({ src, alt }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const levels = new Map<number, HTMLCanvasElement>();
    const pointer = { x: SIZE / 2, y: SIZE / 2, inside: false };
    let strength = 0; // 0..1, eases the lens in and out
    let frame = 0;
    let cancelled = false;

    // One downsampled copy per block size; drawing a region of it back up
    // with smoothing off gives the pixelated look.
    const buildLevels = (img: HTMLImageElement) => {
      const blocks = [1, 2, 5, CELL, ...INTRO];
      for (const b of blocks) {
        const c = document.createElement("canvas");
        const n = b === 1 ? SIZE * dpr : SIZE / b;
        c.width = n;
        c.height = n;
        const cx = c.getContext("2d")!;
        cx.imageSmoothingQuality = "high";
        cx.filter = "saturate(0.8) contrast(1.04)";
        cx.drawImage(img, 0, 0, n, n);
        levels.set(b, c);
      }
    };

    const drawWhole = (block: number) => {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(levels.get(block)!, 0, 0, canvas.width, canvas.height);
    };

    const blockAt = (cx: number, cy: number) => {
      if (strength <= 0) return CELL;
      const d = Math.hypot(cx - pointer.x, cy - pointer.y) / (RADIUS * strength);
      for (const ring of LENS) if (d < ring.r) return ring.block;
      return CELL;
    };

    const draw = () => {
      ctx.imageSmoothingEnabled = false;
      const out = CELL * dpr;
      for (let j = 0; j < SIZE / CELL; j++) {
        for (let i = 0; i < SIZE / CELL; i++) {
          const b = blockAt(i * CELL + CELL / 2, j * CELL + CELL / 2);
          const scale = b === 1 ? dpr : 1 / b;
          const s = CELL * scale;
          ctx.drawImage(levels.get(b)!, i * CELL * scale, j * CELL * scale, s, s, i * out, j * out, out, out);
        }
      }
    };

    const tick = () => {
      const target = pointer.inside ? 1 : 0;
      strength += (target - strength) * 0.18;
      if (Math.abs(target - strength) < 0.01) strength = target;
      draw();
      frame = strength === target ? 0 : requestAnimationFrame(tick);
    };

    const wake = () => {
      if (reduceMotion) {
        strength = pointer.inside ? 1 : 0;
        draw();
      } else if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * SIZE;
      pointer.y = ((e.clientY - rect.top) / rect.height) * SIZE;
      pointer.inside = true;
      if (strength === 1) draw();
      else wake();
    };
    const onLeave = () => {
      pointer.inside = false;
      wake();
    };

    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      buildLevels(img);
      if (reduceMotion) return draw();
      INTRO.forEach((b, k) => setTimeout(() => !cancelled && drawWhole(b), k * 140));
      setTimeout(() => !cancelled && draw(), INTRO.length * 140);
    };
    img.src = src.src;

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointercancel", onLeave);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointercancel", onLeave);
    };
  }, [src]);

  return (
    <figure className="w-[180px] sm:w-[220px]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={alt}
        className="block aspect-square w-full bg-line [image-rendering:pixelated]"
      />
    </figure>
  );
}
