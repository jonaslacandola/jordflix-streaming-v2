//Get trending movies and tv series from api
export async function getTrending() {
  const resMovie = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  );
  const resSeries = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API_KEY}`
  );

  const movies = await resMovie.json();
  const series = await resSeries.json();

  return { movies: movies, series: series };
}
//Get latest movies from api
export async function getMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
  );

  return res.json();
}
//Get movie by id
export async function getMovie(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );

  return res.json();
}
//Get latest tv series from api
export async function getSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}`
  );

  return res.json();
}
//Get tv series by id
export async function getTvSeries(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}`
  );

  return res.json();
}
//Get searched media
export async function getSearch(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );

  return res.json();
}
