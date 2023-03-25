import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { MoviesData } from "@/context/movies.js";

export default function MovieDetails() {
  const { isLoading, hasError, movies } = useContext(MoviesData);
  const router = useRouter();

  if (isLoading) return <main>Loading...</main>;
  if (!isLoading && hasError) return <main>An error occurred.</main>;

  const name = router.query.name;
  const movie = movies.find((movie) => movie.name == name);
  if (!movie) return <main>Movie not found.</main>;

  const parsedSynopsis = movie.synopsis.replaceAll("<br />", "\n");

  return (
    <main className="p-6">
      <Link href={`..`}>
        <div className="mb-3">
          <button className="px-4 py-2 rounded border border-gray-200 shadow hover:hover:bg-gray-100">
            back
          </button>
        </div>
      </Link>
      <div className="mb-3">
        <h1 className="font-bold text-2xl">{movie.name}</h1>
        <p>{movie.genre}</p>
        <p className="text-gray-400">{movie.productionYear}</p>
      </div>
      <p className="whitespace-pre-wrap">{parsedSynopsis}</p>
    </main>
  );
}
