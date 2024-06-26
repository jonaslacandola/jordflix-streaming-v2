import { getMovie } from "@/app/lib/streamingAPI";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params: { movieId },
}: Readonly<{ params: { movieId: number } }>): Promise<Metadata> {
  const movieData: Promise<any> = getMovie(movieId);
  const movie = await movieData;
  const keywords = movie?.genres.map(
    (genre: { id: number; name: string }) => genre.name
  );
  return {
    title: movie?.title,
    description: movie?.overview,
    keywords,
    openGraph: {
      title: movie?.title,
      description: movie?.overview,
      images: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
    },
    twitter: {
      title: movie?.title,
      description: movie?.overview,
      images: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
    },
  };
}

export default async function MoviePage({
  params: { movieId },
}: Readonly<{ params: { movieId: number } }>) {
  const movieData: Promise<any> = getMovie(movieId);
  const movie = await movieData;

  return (
    <main>
      <section className="relative h-[500px] w-full">
        <div className="backdrop-blur-[2px] h-full p-4 flex justify-center items-center">
          <div className="text-sm flex flex-col gap-2">
            <div className="flex items-center flex-wrap">
              <h1 className="text-3xl font-semibold tracking-wide">
                {movie?.title}
              </h1>
              <Link
                href={`/movies/watch/${movie?.id}`}
                className="text-blue-600 rounded-full border mt-2 px-3 py-1 animate-pulse hover:animate-none bg-blue-800 bg-opacity-50 border-blue-600 font-medium"
              >
                Watch Now
              </Link>
            </div>
            <p className="flex gap-2 text-sm text-blue-600 font-medium">
              <span>{movie?.release_date}</span>
              <span>&bull;</span>
              <span>{movie?.runtime} minutes</span>
            </p>

            <p className="leading-normal font-light mb-2">{movie?.overview}</p>
            <div className="flex flex-wrap gap-2">
              {movie?.genres.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="text-blue-600 text-[13px] bg-blue-950 bg-opacity-20 rounded-full border px-[10px] py-[2px] border-blue-600 font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black from-50% to-[rgba(0, 0, 0, 0)] opacity-85 z-[-1]"></div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie.title}
          width={500}
          height={500}
          className="absolute top-0 object-cover w-full h-full z-[-2]"
        />
      </section>
    </main>
  );
}
