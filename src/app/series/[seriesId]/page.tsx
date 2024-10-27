import Season from "@/app/component/Season";
import { getTvSeries } from "@/app/lib/streamingAPI";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params: { seriesId },
}: Readonly<{ params: { seriesId: number } }>): Promise<Metadata> {
  const seriesData: Promise<any> = getTvSeries(seriesId);
  const series = await seriesData;
  const keywords = series?.genres?.map(
    (genre: { id: number; name: string }) => genre.name
  );
  return {
    title: `Stream now, ${series?.name}`,
    description: series?.overview,
    keywords,
    openGraph: {
      title: `${series?.title} - ${series?.overview}`,
      description: series?.overview,
      images: `https://image.tmdb.org/t/p/w500${series?.backdrop_path}`,
    },
    twitter: {
      title: `${series?.title} - ${series?.overview}`,
      description: series?.overview,
      images: `https://image.tmdb.org/t/p/w500${series?.backdrop_path}`,
    },
  };
}

export default async function SeriesPage({
  params: { seriesId },
}: Readonly<{ params: { seriesId: number } }>) {
  const seriesData: Promise<any> = getTvSeries(seriesId);
  const series = await seriesData;

  return (
    <main className="overflow-y-scroll">
      <section className="relative h-[500px] w-full">
        <div className="backdrop-blur-[4px] h-full p-4 flex items-center">
          <div className="text-sm flex flex-col gap-4 max-w-[90%] md:max-w-[80%] mx-auto">
            <h1 className="text-3xl font-medium tracking-wide xl:text-5xl">
              {series?.name}
            </h1>
            <p className="flex gap-2 text-sm text-blue-600 font-medium xl:text-base">
              <span>{series?.first_air_date}</span>
              <span>&bull;</span>
              <span>{series?.status}</span>
            </p>
            <p className="leading-relaxed mb-2 xl:text-base md:w-3/4">
              {series?.overview}
            </p>
            <div className="flex flex-wrap gap-2">
              {series?.genres?.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="text-blue-600 text-[13px] bg-blue-950 bg-opacity-20 rounded-full border px-[10px] py-[2px] border-blue-600 font-medium xl:text-sm xl:px-3 xl:py-1"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div></div>
        </div>

        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-slate-950 to-[rgba(0, 0, 0, 0)] opacity-95 z-[-1]"></div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${series?.backdrop_path}`}
          alt={series.title}
          fill
          className="absolute top-0 object-cover w-full h-full z-[-2]"
        />
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-2 py-10 mx-auto max-w-[90%] md:max-w-[80%]">
          {series.seasons.map((season: any) => (
            <Season
              key={season.season_number}
              season={season}
              seriesId={seriesId}
            ></Season>
          ))}
        </div>
      </section>
    </main>
  );
}
