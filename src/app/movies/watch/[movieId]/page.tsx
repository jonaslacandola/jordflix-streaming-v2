import BackButton from "@/app/component/BackButton";
import { getMovie } from "@/app/lib/streamingAPI";
import { Metadata } from "next";
import Image from "next/image";

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
      title: `Watch ${movie?.title} - Available now on Jordflix`,
      description: movie?.overview,
      images: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
    },
    twitter: {
      title: `Watch ${movie?.title} - Available now on Jordflix`,
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
      <div className="w-full h-screen backdrop-blur-[8px] overflow-y-scroll m-auto pb-10 md:w-[90%]">
        <div className="p-4">
          <BackButton text="Back to Previous" />
        </div>
        <h1 className="text-center mb-6 md:text-lg lg:text-xl lg:mb-8">
          Now watching,{" "}
          <span className="text-blue-600 font-semibold">{movie?.title}</span>
        </h1>
        <section className="h-[340px] md:h-[440px] lg:h-[540px] xl:h-[640px]">
          <iframe
            src={`https://vidsrc.xyz/embed/movie/${movie.id}`}
            className="h-full w-full"
            allowFullScreen={true}
          ></iframe>
        </section>

        <div className="my-10 p-4 gap-8 mx-auto flex justify-center items-center w-[90%] md:w-[80%] xl:w-[70%]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            width={500}
            height={500}
            className="hidden md:block max-h-auto w-1/4 rounded-md"
          />
          <div className="text-sm flex flex-col gap-2 xl:gap-4">
            <h1 className="text-2xl font-medium tracking-wide xl:text-4xl">
              {movie?.title}
            </h1>
            <p className="flex gap-2 text-sm text-blue-600 font-medium xl:text-base">
              <span>{movie?.release_date}</span>
              <span>&bull;</span>
              <span>{movie?.runtime} minutes</span>
            </p>

            <p className="leading-normal font-light mb-2 xl:text-base">
              {movie?.overview}
            </p>

            <div className="flex flex-wrap gap-2">
              {movie?.genres.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="text-blue-600 text-[13px] bg-blue-950 bg-opacity-20 rounded-full border px-[10px] py-[2px] border-blue-600 font-medium xl:text-sm xl:px-3 xl:py-1"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-slate-950 to-[rgba(0, 0, 0, 0)] z-[-1]"></div>
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
