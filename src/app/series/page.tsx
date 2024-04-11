import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jordflix - Stream HD TV Series for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default function SeriesPage() {
  return (
    <div className="h-full max-w-[400px] mx-auto overflow-scroll">
      <p>Series Page</p>
    </div>
  );
}
