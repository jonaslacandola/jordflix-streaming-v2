"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function SeriesWatch({
  seriesId,
}: Readonly<{ seriesId: number }>) {
  const searchParams = useSearchParams();
  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  return (
    <iframe
      src={`https://vidsrc.xyz/embed/tv/${seriesId}/${season}/${episode}`}
      className="h-full w-full"
      allowFullScreen={true}
    ></iframe>
  );
}
