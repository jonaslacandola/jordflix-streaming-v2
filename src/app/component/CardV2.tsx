import Image from "next/image";
import Link from "next/link";
import { HiThumbUp } from "react-icons/hi";

export default function CardV2({ tv }: Readonly<{ tv: any }>) {
  const release_year = tv?.first_air_date.split("-").at(0);

  return (
    <div className="max-w-[180px]">
      <Link href={`/series/${tv?.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${tv?.poster_path}`}
          alt={tv?.title}
          width={500}
          height={500}
          className="max-h-[300px] max-w-auto rounded-md"
        />
      </Link>
      <h1 className="mt-2 truncate">{tv?.title}</h1>
      <div className="flex justify-between text-[13px] text-blue-600">
        <div className="flex items-center gap-2">
          <span>{tv?.media_type.toUpperCase()}</span>
          <span>{release_year}</span>
        </div>
        <p className="flex items-center">
          <span>
            <HiThumbUp className="text-[13px]" />
          </span>
          <span>{Math.floor(tv?.vote_average)}%</span>
        </p>
      </div>
    </div>
  );
}
