import Image from "next/image";
import Link from "next/link";
import { HiThumbUp } from "react-icons/hi";

export default function Card({ media }: Readonly<{ media: any }>) {
  const path = media?.media_type === "movie" ? "movies" : "series";
  const release_year = media?.release_date
    ? media?.release_date?.split("-").at(0)
    : media?.first_air_date?.split("-").at(0);

  if (!media?.poster_path) return;

  return (
    <div className="max-w-[180px]">
      <Link href={`/${decodeURIComponent(path)}/${media?.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${media?.poster_path}`}
          alt={media?.title && media?.name}
          width={500}
          height={500}
          className="max-h-[300px] max-w-auto rounded-md"
        />
      </Link>
      <h1 className="my-2 truncate text-sm lg:text-base">
        {media?.title ? media?.title : media?.name}
      </h1>
      <div className="flex justify-between items-center text-[13px] text-blue-600">
        <div className="flex items-center gap-2">
          <span className="uppercase rounded border border-blue-600 px-1 py-[2px] text-[10px] lg:text-[12px]">
            {media?.media_type === "tv" ? "series" : media?.media_type}
          </span>
          <span>{release_year}</span>
        </div>
        <p className="flex items-center gap-1">
          <span>
            <HiThumbUp className="text-[13px]" />
          </span>
          <span>{Math.floor(media?.vote_average)}%</span>
        </p>
      </div>
    </div>
  );
}
