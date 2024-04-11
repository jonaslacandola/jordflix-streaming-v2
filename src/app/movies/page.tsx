import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jordflix - Watch HD Movies for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default function MoviesPage() {
  return (
    <div className="h-full max-w-[400px] mx-auto overflow-scroll">
      <p>Movie Page</p>
    </div>
  );
}
