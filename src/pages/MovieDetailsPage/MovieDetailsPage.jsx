import { format } from 'date-fns';

import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';

import { FaArrowLeftLong } from 'react-icons/fa6';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button.jsx';

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../../components/MovieReviews/MovieReviews')
);

import { requestMovieById } from '../../services/api';
import { timeConversion } from '../../services/timeConversion';

import css from './MovieDetailsPage.module.css';
import Modal from '../../components/Modal/Modal.jsx';

const MovieDetailsPage = () => {
  // Get the movie ID from the URL parameter.
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!movieId) return;
    async function fetchDataId() {
      try {
        setIsError(false);
        const data = await requestMovieById(movieId);
        console.log(data);
        setMovieData(data);
      } catch (err) {
        setIsError(true);
        setMovieData({});
      }
    }
    fetchDataId();
  }, [movieId]);

  return (
    <div className={css.pageWrap}>
      <section className={css.MovieInfoSection}>
        {isError && <ErrorMessage />}
        {movieData !== null && (
          <div>
            <div className={css.GoBackWrap}>
              <Link className={css.GoBackLink} to={backLinkRef.current}>
                Go back
              </Link>
              <FaArrowLeftLong className={css.GoBackIcon} size="16" />
            </div>
            <div className={css.MovieInfoWrap}>
              <div className={css.MovieImgWrap}>
                <img
                  className={css.MovieImg}
                  src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                  alt=""
                />
              </div>
              <div className={css.MovieContWrap}>
                <h2 className={css.MovieTitle}>{movieData.title}</h2>
                <p className={css.MovieCont}>
                  <span className={css.MovieContTitle}>Release Date: </span>
                  {format(new Date(movieData.release_date), 'dd MMMM yyyy')}
                </p>
                {movieData.revenue !== 0 && (
                  <p className={css.MovieCont}>
                    <span className={css.MovieContTitle}>Revenue: </span>
                    {new Intl.NumberFormat('en-US').format(movieData.revenue)} $
                  </p>
                )}
                <p className={css.MovieCont}>
                  <span className={css.MovieContTitle}>User Score: </span>
                  {movieData.vote_average.toFixed(1)}
                </p>
                <p className={css.MovieCont}>
                  <span className={css.MovieContTitle}>Genres: </span>
                  {movieData.genres.map(({ name }) => name).join(' ')}
                </p>
                <p className={css.MovieCont}>
                  <span className={css.MovieContTitle}>Duration: </span>
                  {timeConversion(movieData.runtime)}
                </p>

                <h3 className={css.OverviewTitle}>Overview</h3>
                <p className={css.OverviewCont}>{movieData.overview}</p>
                <Button handleClick={handleOpenModal} title="Watch Trailer" />
              </div>
            </div>
          </div>
        )}
      </section>
      <section className={css.AddInfoSection}>
        <div className={css.AddInfoWrap}>
          <h4 className={css.AddInfoTitle}>Additional information</h4>
          <ul className={css.AddInfoList}>
            <li className={css.AddInfoItem}>
              <Link to="cast" className={css.AddInfoLink}>
                Cast
              </Link>
            </li>
            <li className={css.AddInfoItem}>
              <Link to="reviews" className={css.AddInfoLink}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </Suspense>
      </section>
      {isModalOpen && <Modal onClose={handleCloseModal} movieId={movieId} />}
    </div>
  );
};

export default MovieDetailsPage;
