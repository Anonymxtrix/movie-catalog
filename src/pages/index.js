import Link from "next/link";
import { useContext } from "react";
import { MoviesData } from "@/context/movies.js";
import Page from "@/components/Page.js";

export default function Home() {
  const { isLoading, hasError, movies } = useContext(MoviesData);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>An error occurred.</p>;

  return (
    <Page title="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie, index) => {
          return (
            <Link
              className="cursor-pointer"
              key={index}
              href={`/${movie.name}`}
            >
              <div className="h-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="mb-3">
                  <h1 className="font-bold text-xl">{movie.name}</h1>
                  <h2>{movie.genre}</h2>
                  <h3 className="text-gray-400">{movie.productionYear}</h3>
                </div>
                <p className="">{movie.synopsisShort}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Page>
  );
}
