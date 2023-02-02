import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link className={css.moviesListLink} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
