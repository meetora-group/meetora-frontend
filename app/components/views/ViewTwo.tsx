"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FALLBACK_CAT_GIF_URL,
  fetchRandomCatGifUrl,
} from "@/app/constants/externalApis";

type ViewTwoProps = {
  onContinue: () => void;
};

export function ViewTwo({ onContinue }: ViewTwoProps) {
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
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-6 py-10">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <div className="overflow-hidden rounded-3xl shadow-lg shadow-amber-100">
          <Image
            src={catGifUrl}
            alt="Cute cat reaction"
            width={260}
            height={220}
            priority
            unoptimized
            className="rounded-3xl object-cover"
            style={{ width: "auto", height: "220px" }}
            onError={() => {
              void fetchRandomCatGifUrl().then(setCatGifUrl);
            }}
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800">
            Espera, disseste sim?
          </h2>
          <p className="text-lg text-zinc-600">
            estava à espera que dissesses não por acaso...
          </p>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-600"
        >
          okay okay!
        </button>
      </div>
    </div>
  );
}
