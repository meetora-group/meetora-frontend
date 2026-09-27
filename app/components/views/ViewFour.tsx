"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  FALLBACK_CAT_GIF_URL,
  fetchRandomCatGifUrl,
} from "@/app/constants/externalApis";
import type { SubmittedInvitation } from "@/app/hooks/useMeetoraFlow";

type ViewFourProps = {
  submittedInvitation: SubmittedInvitation | null;
  onRestart: () => void;
};

const formatTime = (value: string) => {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
      });
};

export function ViewFour({ submittedInvitation, onRestart }: ViewFourProps) {
  const [catGifUrl, setCatGifUrl] = useState<string>(FALLBACK_CAT_GIF_URL);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchRandomCatGifUrl().then(setCatGifUrl);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!submittedInvitation) {
    return null;
  }

  const timeText = formatTime(submittedInvitation.scheduledTime);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf7] px-6 py-10">
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="overflow-hidden rounded-3xl shadow-lg shadow-rose-100">
          <Image
            src={catGifUrl}
            alt="Cute cat confirmation"
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
            Fico feliz por não dizeres que não.
          </h2>
          <p className="text-lg leading-8 text-zinc-700">
            Fica pronta às {timeText}. O plano: {submittedInvitation.label}. Eu vou-te buscar.
          </p>
        </div>

        <button
          type="button"
          onClick={onRestart}
          className="rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
        >
          Outro date?
        </button>
      </div>
    </div>
  );
}
