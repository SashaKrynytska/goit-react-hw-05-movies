import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/api-service';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieAdditionalInfoItem from '../components/MovieAdditionalInfoItem';

import css from './Views.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <button type="button" className={css.button} onClick={() => navigate(-1)}>
        Go Back
      </button>
      <MovieCard movie={movie} />
      <MovieAdditionalInfoItem />
      <Outlet />
    </>
  );
};

export default MovieDetails;
