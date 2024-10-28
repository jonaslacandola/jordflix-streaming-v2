import type { Metadata } from "next";
import {Suspense} from "react";

import { getSeries } from "../lib/streamingAPI";
import Spinner from "../component/Spinner";
import CardSeries from "@/app/component/CardSeries";

export const metadata: Metadata = {
  title: "Jordflix - Stream HD TV Series for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default async function SeriesPage() {
    const seriesData: Promise<any> = getSeries();
    const series = await seriesData

    return (
      <div className="h-full py-5 max-w-[400px] flex flex-col gap-4 mx-auto overflow-y-scroll md:max-w-[80%] lg:max-w-full xl:gap-8">
          <h1 className="text-xl xl:text-2xl">Series</h1>
          <Suspense fallback={<Spinner/>}>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {series.results?.map((series: any) => (
                      <CardSeries series={series} />
                  ))}
              </div>
          </Suspense>
      </div>
);
}
