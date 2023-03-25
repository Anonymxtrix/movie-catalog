import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { MoviesData } from "@/context/movies.js";

export default function Home() {
  const { isLoading, hasError, movies } = useContext(MoviesData);

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta
          name="description"
          content="A simple catalog that can be used to browse movies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons8-circled-play-96.png" />
      </Head>
      <main className="p-6">
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>An error occurred.</p>}
        {!isLoading && !hasError && (
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
        )}
      </main>
    </>
  );
}
