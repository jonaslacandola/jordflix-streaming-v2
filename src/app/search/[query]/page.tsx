import CardSearch from "@/app/component/Card";
import Spinner from "@/app/component/Spinner";
import { getSearch } from "@/app/lib/streamingAPI";
import { Suspense } from "react";

export default async function SearchPage({
  params: { query },
}: Readonly<{ params: { query: string } }>) {
  const mediaData: Promise<any> = getSearch(decodeURIComponent(query));
  const medias = await mediaData;

  if (!medias.total_results) {
      return <h1 className="text-center my-10 text-lg md:text-xl xl:text-2xl">No search results for <span className="text-blue-600 font-semibold">{decodeURIComponent(query)}</span></h1>
  }

  return (
    <main className="h-full py-5 max-w-[400px] flex flex-col gap-4 mx-auto overflow-y-scroll md:max-w-[80%] lg:max-w-full xl:gap-8">
      <h1 className="text-lg lg:text-xl xl:text-2xl">
        Results for <span className=" text-blue-600 capitalize font-medium">{decodeURIComponent(query)}</span>
      </h1>
      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {medias?.results?.map((media: any) => (
            <CardSearch key={media.id} media={media} />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
