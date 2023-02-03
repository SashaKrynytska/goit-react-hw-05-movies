import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/api-service';
import css from './Cast.module.css';
import noImage from '../../img/anonymous-icon.png';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(cast => {
      setActors(cast);
    });
  }, [movieId]);

  return (
    <div className={css.cast}>
      {actors.length > 0 ? (
        <div>We don't have any cast for this movie!</div>
      ) : (
        <ul className={css.castList}>
          {actors.map(actor => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : noImage
                }
                alt={actor.original_name}
                className={css.castImg}
              />
              <h4 className={css.castName}>{actor.original_name}</h4>
              <p className={css.character}>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
