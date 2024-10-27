"use client";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

export default function Season({
  season,
  seriesId,
}: Readonly<{ season: any; seriesId: number }>) {
  const [open, setOpen] = useState<boolean>(false);
  console.log(season);
  function handleOpen() {
    setOpen((open) => !open);
  }

  return (
    <div className="w-full">
      <p
        className="flex items-center justify-between transition-all duration-300 px-4 py-2 text-sm border-b border-blue-950 hover:rounded-md hover:bg-blue-900 md:px-6 md:py-3 md:text-base"
        onClick={handleOpen}
      >
        <span>{season.name}</span>
        {open ? <HiChevronDown /> : <HiChevronRight />}
      </p>
      {open && (
        <div className="flex gap-2 p-4 flex-wrap">
          {Array.from({ length: season.episode_count }, (_, episode) => (
            <Link
              href={`/series/watch/${seriesId}?season=${
                season.season_number
              }&episode=${episode + 1}`}
              className="bg-blue-950 px-6 py-[6px] text-sm rounded outline-2 outline-blue-800 outline-offset-2 hover:outline"
              key={episode}
            >
              {episode + 1}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
