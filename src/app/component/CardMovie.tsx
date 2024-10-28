import Image from "next/image";
import Link from "next/link";
import { HiThumbUp } from "react-icons/hi";

export default function CardMovie({ movie }: Readonly<{ movie: any }>) {
  const release_year = movie?.release_date.split("-").at(0);

  return (
    <div className="max-w-[180px]">
      <Link href={`/movies/${movie?.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          width={500}
          height={500}
          className="max-h-[300px] max-w-auto rounded-md"
        />
      </Link>
      <h1 className="my-2 truncate text-sm lg:text-base">{movie?.title}</h1>
      <div className="flex justify-between items-center text-[13px] text-blue-600">
        <div className="flex items-center gap-2">
          <span className="uppercase rounded border border-blue-600 px-1 py-[2px] text-[10px] lg:text-[12px]">
            MOVIE
          </span>
          <span>{release_year}</span>
        </div>
        <p className="flex items-center">
          <span>
            <HiThumbUp className="text-[13px]" />
          </span>
          <span>{Math.floor(movie?.vote_average)}%</span>
        </p>
      </div>
    </div>
  );
}
