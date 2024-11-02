import type { Metadata } from "next";
import Spinner from "../component/Spinner";
import { getTrending } from "../lib/streamingAPI";
import { Suspense } from "react";
import Card from "../component/Card";
import Slideshow from "../component/Slideshow";

export const metadata: Metadata = {
  title: "Jordflix - Watch HD Movies and TV Series for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default async function HomePage() {
  const mediaData: Promise<{ movies: any; series: any }> = getTrending();
  const media = await mediaData;
  const { movies, series } = media;

  const topMoviePoster = movies?.results?.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    image: movie.backdrop_path,
  }));

  return (
    <main className="h-full w-[95%] py-5 flex flex-col gap-2 md:gap-4 mx-auto overflow-y-scroll md:w-[80%] xl:gap-8">
      <Slideshow images={topMoviePoster} />
      <h1 className="text-lg lg:text-xl xl:text-2xl">Home</h1>
      <h1 className="text-lg lg:text-xl xl:text-2xl">Trending Movies</h1>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-2  gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies?.results?.map((movie: any) => (
            <Card key={movie.id} media={movie} />
          ))}
        </div>
      </Suspense>
      <h1 className="text-lg lg:text-xl xl:text-2xl">Trending Series</h1>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {series?.results?.map((tv: any) => (
            <Card key={tv.id} media={tv} />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
