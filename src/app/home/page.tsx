import type { Metadata } from "next";
import Spinner from "../component/Spinner";
import { getTrending } from "../lib/streamingAPI";
import Card from "../component/Card";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Jordflix - Watch HD Movies and TV Series for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default async function HomePage() {
  const mediaData: Promise<{ movies: any; series: any }> = getTrending();
  const media = await mediaData;
  const { movies, series } = media;

  return (
    <main className="h-full max-w-[400px] flex flex-col gap-4 mx-auto overflow-scroll">
      <h1 className="text-lg">Home</h1>
      <h1 className="text-lg font-semibold">Trending movies</h1>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-2 gap-4">
          {movies.results.map((movie: any) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
      <h1 className="text-lg font-semibold">Trending tv series</h1>
    </main>
  );
}
