import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import Button from '../../components/Button/Button.jsx';
import SearchForm from '../../components/SearchForm/SearchForm';

import { requestGenres, requestMovieByQuery } from '../../services/api';

import css from './SearchMoviesPage.module.css';

const SearchMoviePages = () => {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

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
        console.log(dataGenres);
        setGenres(dataGenres.genres);
      } catch (err) {
        setIsError(true);
        setGenres([]);
      }
    }
    fetchGenres();
  }, [lang]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setTimeout(() => {
      if (currentPage !== 1) {
        return;
      }
    }, 100);
    async function fetchDataByQuery() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await requestMovieByQuery(1, searchQuery, lang);
        console.log(data);
        if (data.results.length === 0) {
          toast(
            'Sorry, there are no movies your search query. Please try again.'
          );
          setMovieList([]);
          return;
        } else {
          setMovieList(data.results);
        }
        setIsLoadMoreBtn(data.total_pages && data.total_pages !== currentPage);
      } catch (err) {
        setIsError(true);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [searchQuery, lang]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    if (currentPage === 1) {
      return;
    }

    async function fetchDataByQuery() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await requestMovieByQuery(currentPage, searchQuery, lang);
        console.log(data);
        if (data.results.length === 0) {
          toast(
            'Sorry, there are no movies your search query. Please try again.'
          );
          setMovieList([]);
          return;
        } else {
          setMovieList((prevMovies) => [...prevMovies, ...data.results]);
        }
        setIsLoadMoreBtn(data.total_pages && data.total_pages !== currentPage);
      } catch (err) {
        setIsError(true);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [searchQuery, currentPage]);

  const handleClick = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const onSetSearchParams = (query) => {
    if (query === searchQuery) {
      return;
    }
    setSearchParams({ query: query });
    setMovieList([]);
  };

  return (
    <div className={css.MoviesPageWrap}>
      <h2 className={css.pageTitle}>{t('findFavoriteMovie')}</h2>
      <SearchForm
        onSetSearchParams={onSetSearchParams}
        searchQuery={searchQuery}
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {Array.isArray(movieList) && movieList.length > 0 && (
        <MovieList
          movieList={movieList}
          genres={genres}
          addClass={css.movieList}
        />
      )}
      {isLoadMoreBtn && (
        <Button handleClick={handleClick} title={t('loadMore')} />
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(157, 222, 255, 0.9)',
            color: '#000',
          },
        }}
      />
    </div>
  );
};

export default SearchMoviePages;
