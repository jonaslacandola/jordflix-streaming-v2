import type { Metadata } from "next";
import { Suspense } from "react";

import { getMovies } from "../lib/streamingAPI";
import Spinner from "../component/Spinner";
import CardMovie from "../component/CardMovie";

export const metadata: Metadata = {
  title: "Jordflix - Watch HD Movies for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default async function MoviesPage() {
  const moviesData: Promise<any> = getMovies();
  const movies = await moviesData;

  return (
    <div className="h-full w-[95%] py-5 flex flex-col gap-2 md:gap-4 mx-auto overflow-y-scroll md:w-[80%] xl:gap-8">
      <h1 className="text-xl xl:text-2xl">Movies</h1>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies?.results?.map((movie: any) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
