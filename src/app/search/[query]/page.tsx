export default function SearchPage({
  params: { query },
}: Readonly<{ params: { query: string } }>) {
  return (
    <main className="h-full max-w-[400px] mx-auto overflow-scroll">
      <p>Search Page - {query}</p>
    </main>
  );
}
