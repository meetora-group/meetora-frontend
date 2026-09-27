"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FALLBACK_CAT_GIF_URL,
  fetchRandomCatGifUrl,
} from "@/app/constants/externalApis";

type ViewOneProps = {
  onAccept: () => void;
  onRejectMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isEscaping: boolean;
  noButtonPosition: { x: number; y: number };
};

export function ViewOne({
  onAccept,
  onRejectMouseEnter,
  isEscaping,
  noButtonPosition,
}: ViewOneProps) {
  const [catGifUrl, setCatGifUrl] = useState<string>(FALLBACK_CAT_GIF_URL);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchRandomCatGifUrl().then(setCatGifUrl);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#fefaf7] px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,210,220,0.32),transparent_45%)]" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 text-center">
        <div className="overflow-hidden rounded-3xl shadow-lg shadow-rose-100">
          <Image
            src={catGifUrl}
            alt="Cute cat gif"
            width={320}
            height={240}
            unoptimized
            priority
            className="rounded-3xl object-cover"
            style={{ width: "100%", height: "auto" }}
            onError={() => {
              void fetchRandomCatGifUrl().then(setCatGifUrl);
            }}
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          Queres sair comigo num date?
        </h1>

        <div className="flex flex-row-reverse items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onAccept}
            className="rounded-full bg-rose-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
          >
            Sim
          </button>

          <button
            type="button"
            onMouseEnter={onRejectMouseEnter}
            // Removed onMouseOver as onMouseEnter is sufficient for this heuristic
            className={[
              "z-20 rounded-full border border-rose-200 bg-white px-6 py-3 text-base font-semibold text-zinc-700 shadow-md hover:bg-rose-50",
              // We keep the transition classes here so it animates every time the state changes
              "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isEscaping ? "fixed" : "relative",
            ].join(" ")}
            style={
              isEscaping
                ? {
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                  }
                : undefined
            }
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
