import "@/styles/globals.css";
import MovieContext from "@/context/movies.js";

export default function App({ Component, pageProps }) {
  return (
    <MovieContext>
      <Component {...pageProps} />
    </MovieContext>
  );
}
