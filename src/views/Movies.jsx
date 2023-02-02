import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../api/api-service';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Views.module.css';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    getSearchMovie(query).then(setSearchMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    console.log(value);
    setSearchParams({ query: value.trim() });
    e.currentTarget.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.formInput} type="text" name="query" />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
