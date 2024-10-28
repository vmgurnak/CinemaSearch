import { useEffect, useState } from 'react';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

import { requestMovie } from '../../services/api';

import css from './HomePage.module.css';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        const data = await requestMovie(currentPage);
        console.log(data);
        setMovieList((prevMovies) => [...prevMovies, ...data.results]);
        setIsLoadMoreBtn(data.total_pages && data.total_pages !== currentPage);
      } catch (err) {
        setIsError(true);
        setMovieList([]);
      }
    }

    fetchData();
  }, [currentPage]);

  const onSetPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <div className={css.HomePageWrap}>
      <h2 className={css.HomePageTitle}>Trending today</h2>
      {isError && <ErrorMessage />}
      {Array.isArray(movieList) && movieList.length > 0 && (
        <MovieList movieList={movieList} />
      )}
      {isLoadMoreBtn && <LoadMoreBtn onSetPage={onSetPage} />}
    </div>
  );
};

export default HomePage;
