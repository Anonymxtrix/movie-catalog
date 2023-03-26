import { useRouter } from "next/router";
import Image from "next/image";
import { useContext } from "react";
import { MoviesData } from "@/context/movies.js";
import Page from "@/components/Page.js";
import FullPageLoading from "@/components/FullPageLoading.js";
import FullPageError from "@/components/FullPageError.js";

export default function MovieDetails() {
  const { isLoading, hasError, movies } = useContext(MoviesData);
  const router = useRouter();

  if (isLoading) return <FullPageLoading />;
  if (hasError) return <FullPageError />;

  const name = router.query.name;
  const movie = movies.find((movie) => movie.name == name);
  if (!movie)
    return (
      <Page title="Not Foud">
        <div className="mt-32 flex flex-col items-center justify-center">
          <Image
            src="/undraw_page_not_found_re_e9o6.svg"
            alt="No Movies"
            width={300}
            height={200}
          />
          <h1 className="mt-6 text-bold text-2xl text-gray-400">
            Oops, movie was not found...
          </h1>
        </div>
      </Page>
    );

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
