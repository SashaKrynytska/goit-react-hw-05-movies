import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../routes';
import { Layout } from './Layout/Layout';
import MovieCast from './Cast/Cast';
import MovieReviews from './Reviews/Reviews';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<MovieCast />} />
          <Route path={routes.REVIEWS} element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
