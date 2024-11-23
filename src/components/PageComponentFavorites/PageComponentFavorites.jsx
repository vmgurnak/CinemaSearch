import { useEffect, useState } from 'react';

import MovieListFavorites from '../../components/MovieListFavorites/MovieListFavorites';
import Button from '../Button/Button.jsx';

import css from './PageComponentFavorites.module.css';

const PageComponentFavorites = ({ titlePage }) => {
  const [items, setItems] = useState(4);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const savedMovies = window.localStorage.getItem('favoriteMovies');
    if (savedMovies) {
      setMovieList(JSON.parse(savedMovies));
    }
  }, []);

  const showMovies = movieList.slice(0, items);
  const quantityMovies = movieList.length;

  const loadMore = () => {
    setItems(items + 4);
  };

  return (
    <div className={css.pageWrap}>
      <h2 className={css.pageTitle}>{titlePage}</h2>
      {movieList.length === 0 && (
        <p className={css.textError}>There are no favorite movies</p>
      )}
      {Array.isArray(movieList) && movieList.length > 0 && (
        <MovieListFavorites movieList={showMovies} addClass={css.movieList} />
      )}
      {quantityMovies > items && (
        <Button handleClick={loadMore} title="Load more" />
      )}
    </div>
  );
};

export default PageComponentFavorites;
