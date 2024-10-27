import SeriesWatch from "@/app/component/SeriesWatch";
import { getTvSeries } from "@/app/lib/streamingAPI";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params: { seriesId },
}: Readonly<{ params: { seriesId: number } }>): Promise<Metadata> {
  const seriesData: Promise<any> = getTvSeries(seriesId);
  const series = await seriesData;
  const keywords = series?.genres.map(
    (genre: { id: number; name: string }) => genre.name
  );

  return {
    title: `Now watching, ${series?.name}`,
    description: series?.overview,
    keywords,
    openGraph: {
      title: series?.name,
      description: series?.overview,
      images: `https://image.tmdb.org/t/p/w500${series?.backdrop_path}`,
    },
    twitter: {
      title: series?.name,
      description: series?.overview,
      images: `https://image.tmdb.org/t/p/w500${series?.backdrop_path}`,
    },
  };
}

export default async function WatchSeriesPage({
  params: { seriesId },
}: Readonly<{
  params: { seriesId: number; season: number; episode: number };
}>) {
  const seriesData: Promise<any> = getTvSeries(seriesId);
  const series = await seriesData;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-screen backdrop-blur-[8px] overflow-y-scroll m-auto pb-10 md:w-[80%] xl:w-[70%]">
        <h1 className="text-center my-6 md:text-xl lg:text-2xl lg:my-8">
          Now watching,{" "}
          <span className="text-blue-600 font-semibold">{series?.name}</span>
        </h1>
        <section className="h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px]">
          <SeriesWatch seriesId={seriesId} />
        </section>

        <div className="my-10 p-4 gap-8 flex justify-center items-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500${series?.poster_path}`}
            alt={series?.name}
            width={500}
            height={500}
            className="hidden lg:block max-h-auto max-w-[250px] rounded-md"
          />
          <div className="text-sm flex flex-col gap-2 xl:gap-4">
            <h1 className="text-2xl font-semibold tracking-wide xl:text-4xl">
              {series?.name}
            </h1>
            <p className="flex gap-2 text-sm text-blue-600 font-medium xl:text-base">
              <span>{series?.first_air_date}</span>
              <span>&bull;</span>
              <span>{series?.status}</span>
            </p>

            <p className="leading-normal font-light mb-2 xl:text-base">
              {series?.overview}
            </p>

            <div className="flex flex-wrap gap-2">
              {series?.genres.map((genre: { id: number; name: string }) => (
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
        src={`https://image.tmdb.org/t/p/w500${series?.backdrop_path}`}
        alt={series?.title}
        width={500}
        height={500}
        className="absolute top-0 w-full h-full opacity-20 z-[-2] object-cover"
      />
    </div>
  );
}