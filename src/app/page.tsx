import Link from "next/link";

export default function Hero() {
  return (
    <main className="h-full w-full flex justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-black text-blue-600">jordflix</h1>
      <div className="text-center text-sm flex flex-col gap-2">
        <p className="font-semibold">Watch hd movies and tv series for free</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          incidunt illo reiciendis vero quisquam commodi dicta eos possimus!
          Eligendi tenetur amet exercitationem magnam esse sapiente accusamus
          facere natus iusto corporis?
        </p>
      </div>
      <Link href="/home" className="text-sm bg-blue-600 px-4 py-2 rounded-full">
        Watch now
      </Link>
    </main>
  );
}
