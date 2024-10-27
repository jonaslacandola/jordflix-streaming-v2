import Link from "next/link";

export default function HeroPage() {
  return (
    <main className="h-full w-full flex justify-center items-center flex-col gap-6 xl:gap-8">
      <h1 className="text-6xl font-black text-blue-600 xl:text-8xl">
        jordflix
      </h1>
      <div className="text-center text-sm flex flex-col gap-2 w-3/4 xl:w-1/2 xl:text-base xl:gap-4">
        <p className="font-semibold uppercase">
          Watch hd movies and tv series for free
        </p>
        <p className="text-[12px] md:text-sm">
          Discover a vast collection of high-definition movies and TV series,
          all available for free. Enjoy seamless streaming with no subscriptions
          or hidden fees. Dive into the world of entertainment with jordflix,
          your ultimate destination for quality content.
        </p>
      </div>
      <Link
        href="/home"
        className="text-sm outline-1 outline-blue-600 outline-offset-2 bg-blue-600 px-4 py-2 rounded-full hover:outline xl:text-base xl:px-6 xl:py-3"
      >
        Watch now
      </Link>
    </main>
  );
}
