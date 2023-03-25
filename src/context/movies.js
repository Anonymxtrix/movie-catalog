import { createContext, useEffect, useState } from "react";

export const MoviesData = createContext(null);

const MoviesContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_MOVIES_API_URL);
        if (!response.ok) {
          setHasError(true);
          return;
        }
        const moviesData = await response.json();
        setMovies(moviesData);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <MoviesData.Provider value={{ isLoading, hasError, movies }}>
      {children}
    </MoviesData.Provider>
  );
};

export default MoviesContext;
