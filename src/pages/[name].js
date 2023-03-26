import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { MoviesData } from "@/context/movies.js";
import Page from "@/components/Page.js";

export default function MovieDetails() {
  const { isLoading, hasError, movies } = useContext(MoviesData);
  const router = useRouter();

  if (isLoading) return <main>Loading...</main>;
  if (hasError) return <main>An error occurred.</main>;

  const name = router.query.name;
  const movie = movies.find((movie) => movie.name == name);
  if (!movie) return <main>Movie not found.</main>;

  const parsedSynopsis = movie.synopsis.replaceAll("<br />", "\n");

  return (
    <Page title={name}>
      <div className="mb-3">
        <h1 className="font-bold text-2xl">{movie.name}</h1>
        <p>{movie.genre}</p>
        <p className="text-gray-400">{movie.productionYear}</p>
      </div>
      <p className="whitespace-pre-wrap">{parsedSynopsis}</p>
    </Page>
  );
}
