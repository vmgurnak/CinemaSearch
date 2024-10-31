import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const TrendingPage = lazy(() =>
  import('./pages/TrendingPage/TrendingPage.jsx')
);
const TopMoviesPage = lazy(() => import('./pages/TopMoviesPage/TopMoviesPage'));
const PopularMoviesPage = lazy(() =>
  import('./pages/PopularMoviesPage/PopularMoviesPage')
);
const UpcomingMoviesPage = lazy(() =>
  import('./pages/UpcomingMoviesPage/UpcomingMoviesPage')
);

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);

const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx')
);

import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/toprated" element={<TopMoviesPage />} />
        <Route path="/popular" element={<PopularMoviesPage />} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/search" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<TrendingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
