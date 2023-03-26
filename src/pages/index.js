import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { MoviesData } from "@/context/movies.js";
import Page from "@/components/Page.js";
import Multiselect from "@/components/Multiselect.js";

export default function Home() {
  const { isLoading, hasError, movies } = useContext(MoviesData);
  const [selectedGenres, setSelectedGenres] = useState(null);
  const [selectedYears, setSelectedYears] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>An error occurred.</p>;

  const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
  const years = [...new Set(movies.map((movie) => movie.productionYear))].sort(
    (a, b) => b - a
  );
  const filteredMoves = movies
    .filter((movie) => {
      if (!selectedGenres) return true;
      return selectedGenres.has(movie.genre);
    })
    .filter((movie) => {
      if (!selectedYears) return true;
      return selectedYears.has(movie.productionYear);
    })
    .sort((a, b) => b.productionYear - a.productionYear);
  const hasMovies = filteredMoves.length > 0;

  const handleGenreFilterChange = (selectedGenres) => {
    setSelectedGenres(new Set(selectedGenres));
  };

  const handleYearFilterChange = (selectedYears) => {
    setSelectedYears(new Set(selectedYears));
  };

  return (
    <Page title="Home">
      <div className="mb-3 flex">
        <Multiselect
          buttonLabel="Genre"
          options={genres}
          onChange={handleGenreFilterChange}
        />
        <Multiselect
          className="ml-3"
          buttonLabel="Production Year"
          options={years}
          onChange={handleYearFilterChange}
        />
      </div>
      {!hasMovies && (
        <div className="mt-40 flex flex-col items-center justify-center">
          <Image
            src="/undraw_movie_night_re_9umk.svg"
            alt="No Movies"
            width={800}
            height={315}
          />
          <h1 className="mt-6 text-bold text-2xl text-gray-400">
            Oops, no movie was found...
          </h1>
        </div>
      )}
      {hasMovies && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMoves.map((movie, index) => {
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
    </Page>
  );
}
