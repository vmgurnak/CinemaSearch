import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { requestMovieByReviews } from '../../services/api';

import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [isError, setIsError] = useState(false);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    if (!movieId) return;
    async function fetchDataReviews() {
      try {
        setIsError(false);
        const data = await requestMovieByReviews(movieId, lang);
        setMovieReviews(data.results);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    }
    fetchDataReviews();
  }, [movieId, lang]);

  return (
    <div className={css.MovieReviewsWrap}>
      {isError && <ErrorMessage />}
      {movieReviews !== null && (
        <ul className={css.MovieReviewsList}>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li className={css.MovieReviewsItem} key={id}>
                <p className={css.MovieReviewsAuthor}>
                  {t('author')}: {author}
                </p>
                <p className={css.MovieReviewsCont}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {movieReviews !== null && movieReviews.length === 0 && (
        <p className={css.MovieReviewsNotif}>{t('noReviews')}</p>
      )}
    </div>
  );
};

export default MovieReviews;
