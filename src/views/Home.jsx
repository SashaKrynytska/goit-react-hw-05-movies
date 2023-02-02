import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/api-service';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Views.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h2 className={css.homeTitle}>Trending today</h2>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
