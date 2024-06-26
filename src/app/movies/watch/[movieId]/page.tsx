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
    title: `Now watching, ${movie?.title}`,
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

export default async function WatchMoviePage({
  params: { movieId },
}: Readonly<{ params: { movieId: number } }>) {
  const movieData: Promise<any> = getMovie(movieId);
  const movie = await movieData;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-screen backdrop-blur-[4px] overflow-y-scroll m-auto md:w-[80%] xl:w-[70%]">
        <h1 className="text-center my-6 text-medium font-semibold md:text-lg lg:text-xl lg:my-8">
          Now watching, <span className="text-blue-600">{movie?.title}</span>
        </h1>
        <section className="h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px]">
          <iframe
            src={`https://vidsrc.xyz/embed/movie?tmdb=${movie.id}`}
            className="h-full w-full"
          ></iframe>
        </section>

        <div className="my-10 p-4 gap-8 flex justify-center items-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            width={500}
            height={500}
            className="hidden lg:block max-h-auto max-w-[250px] rounded-md"
          />
          <div className="text-sm flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-wide">
              {movie?.title}
            </h1>
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
      </div>

      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-slate-950 to-[rgba(0, 0, 0, 0)] opacity-85 z-[-1]"></div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
        width={500}
        height={500}
        className="absolute top-0 w-full h-full opacity-20 z-[-2] object-cover"
      />
    </div>
  );
}
