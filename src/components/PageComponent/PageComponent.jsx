import { useEffect, useState } from 'react';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

import { requestGenres } from '../../services/api';

import css from './PageComponent.module.css';
import Loader from '../Loader/Loader.jsx';

const PageComponent = ({ requestMovie, titlePage }) => {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchGenres() {
      try {
        setIsError(false);
        const dataGenres = await requestGenres();
        console.log(dataGenres);
        setGenres(dataGenres.genres);
      } catch (err) {
        setIsError(true);
        setGenres([]);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await requestMovie(currentPage);
        setMovieList((prevMovies) => [...prevMovies, ...data.results]);
        setIsLoadMoreBtn(data.total_pages && data.total_pages !== currentPage);
      } catch (err) {
        setIsError(true);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage, requestMovie]);

  const onSetPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <div className={css.pageWrap}>
      <h2 className={css.pageTitle}>{titlePage}</h2>
      {isError && <ErrorMessage />}
      {Array.isArray(movieList) && movieList.length > 0 && (
        <MovieList
          movieList={movieList}
          genres={genres}
          addClass={css.movieList}
        />
      )}
      {isLoading && <Loader />}
      {isLoadMoreBtn && <LoadMoreBtn onSetPage={onSetPage} />}
    </div>
  );
};

export default PageComponent;
