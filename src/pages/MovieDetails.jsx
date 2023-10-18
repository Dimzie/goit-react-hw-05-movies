import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useFetchMoviesDetails } from 'hooks';
import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMoviesDetails();
  //   console.log(movie);
  const location = useLocation();
    console.log(location);
  const backLink = useRef(location?.state?.from ?? '/');

  return (
    <div>
      <Link to={backLink.current}>
        <button type="button">Go back</button>
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movie && <MovieInfo movie={movie} />}
      <p>Additional Inforamtion</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
