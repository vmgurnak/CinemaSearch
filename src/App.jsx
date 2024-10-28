import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const PopularMoviesPage = lazy(() =>
  import('./pages/PopularMoviesPage/PopularMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);

import TopMoviesPage from './pages/TopMoviesPage/TopMoviesPage';
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topmovies" element={<TopMoviesPage />} />
        <Route path="/popularmovies" element={<PopularMoviesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
