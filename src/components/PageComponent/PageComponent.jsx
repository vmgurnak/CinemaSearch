import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';
import Button from '../Button/Button.jsx';

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
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    setCurrentPage(1);
    setMovieList([]);
  }, [lang]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        setIsError(false);
        const dataGenres = await requestGenres(lang);
        setGenres(dataGenres.genres);
      } catch (err) {
        setIsError(true);
        setGenres([]);
      }
    }
    fetchGenres();
  }, [lang]);

  useEffect(() => {
    setTimeout(() => {
      if (currentPage !== 1) {
        return;
      }
    }, 100);

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await requestMovie(1, lang);
        setMovieList(data.results);
        setIsLoadMoreBtn(data.total_pages && data.total_pages !== currentPage);
      } catch (err) {
        setIsError(true);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [requestMovie, lang]);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await requestMovie(currentPage, lang);
        console.log(data);
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

  const handleClick = () => {
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
          currentPage={currentPage}
          addClass={css.movieList}
        />
      )}
      {isLoading && <Loader />}
      {isLoadMoreBtn && (
        <Button handleClick={handleClick} title={t('loadMore')} />
      )}
    </div>
  );
};

export default PageComponent;
