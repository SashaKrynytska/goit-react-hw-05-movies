import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { poster, title, overview, vote_average, genres, year } = movie;
  return (
    <div className={css.wrapper}>
      <img className={css.wrapperIMG} src={poster} alt={title} />
      <div className={css.wrapperContainer}>
        <h2>
          {title} ({year})
        </h2>
        <div>User score: {Number(vote_average).toFixed(1)} %</div>
        <div>
          <b>Overview</b>
        </div>
        <div>{overview}</div>
        <div>
          <b>Genres</b>
        </div>
        <div>{genres}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.string,
    genres: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};
export default MovieCard;
