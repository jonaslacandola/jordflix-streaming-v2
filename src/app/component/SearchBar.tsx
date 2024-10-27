"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  function handleSearch(event: any) {
    const { key } = event;

    if (key === "Enter" && query === "") return;

    if (key === "Enter" && query != "") router.push(`/search/${query}`);
  }

  return (
    <input
      type="text"
      placeholder="Search movies and series"
      className="text-sm py-1 px-2 rounded-md text-slate-950 outline-offset-2 outline-blue-600 focus:outline xl:text-base xl:px-4 xl:py-2 placeholder:text-sm"
      onChange={(event: any) => setQuery(event.target.value)}
      value={query}
      onKeyDown={handleSearch}
    />
  );
}
