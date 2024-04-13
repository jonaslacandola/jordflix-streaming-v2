import { getTv } from "@/app/lib/streamingAPI";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params: { tvId },
}: Readonly<{ params: { tvId: number } }>): Promise<Metadata> {
  const tvData: Promise<any> = getTv(tvId);
  const tv = await tvData;
  const keywords = tv?.genres.map(
    (genre: { id: number; name: string }) => genre.name
  );
  return {
    title: tv?.title,
    description: tv?.overview,
    keywords,
    openGraph: {
      title: tv?.title,
      description: tv?.overview,
      images: `https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`,
    },
    twitter: {
      title: tv?.title,
      description: tv?.overview,
      images: `https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`,
    },
  };
}

export default async function TvPage({
  params: { tvId },
}: Readonly<{ params: { tvId: number } }>) {
  const tvData: Promise<any> = getTv(tvId);
  const tv = await tvData;

  return (
    <main>
      <section className="relative h-[500px] w-full">
        <div className="backdrop-blur-[2px] h-full p-4 flex justify-center items-center">
          <div className="text-sm flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-wide">{tv?.name}</h1>
            <div className="flex flex-wrap items-center">
              <p className="flex gap-2 text-sm text-blue-600 font-medium">
                <span>{tv?.first_air_date}</span>
                <span>&bull;</span>
                <span>{tv?.number_of_seasons} Season</span>
                <span>&bull;</span>
                <span>{tv?.number_of_episodes} Episode</span>
              </p>
              <Link
                href={`/series/watch/${tv?.id}`}
                className="text-blue-600 rounded-full border mt-2 px-3 py-1 animate-pulse hover:animate-none bg-blue-800 bg-opacity-50 border-blue-600 font-medium"
              >
                Watch Now
              </Link>
            </div>
            <p className="leading-normal font-light mb-2">{tv?.overview}</p>
            <div className="flex flex-wrap gap-2">
              {tv?.genres.map((genre: { id: number; name: string }) => (
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
          src={`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`}
          alt={tv.title}
          width={500}
          height={500}
          className="absolute top-0 object-cover w-full h-full z-[-2]"
        />
      </section>
    </main>
  );
}
