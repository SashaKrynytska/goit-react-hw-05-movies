import axios from 'axios';

const API_KEY = '274d1fb611712f401639c05508bbb80d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const defaultFetch = async url => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error('Something wrong... Try again!');
  }
};

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const data = await defaultFetch(url);
  return data.results.map(({ id, title }) => ({
    id,
    title,
  }));
};

export const getSearchMovie = async query => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US`;
  const data = await defaultFetch(url);
  return data.results.map(({ id, title }) => ({
    id,
    title,
  }));
};

export const getMovieDetails = async movieId => {
  const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const data = await defaultFetch(url);
  const {
    id,
    title,
    poster_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = data;
  return {
    id,
    title,
    poster: IMG_PATH + poster_path,
    overview,
    genres: genres?.map(({ name }) => name).join(', '),
    vote_average,
    year: new Date(release_date).getFullYear(),
  };
};

export const getMovieCredits = async movieId => {
  const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const data = await defaultFetch(url);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await defaultFetch(url);
  const results = data.results.map(({ id, author, content, created_at }) => {
    return { id, author, created_date: new Date(created_at), content };
  });
  return {
    hasResults: data.total_results !== 0,
    results,
  };
};
