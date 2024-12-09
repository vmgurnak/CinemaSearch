import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestMovieByTrailer } from '../../services/api.js';

import css from './ModalTrailer.module.css';

const ModalTrailer = ({ poster }) => {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState(null);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await requestMovieByTrailer(movieId, lang);
        if (results && results.length === 0) {
          return;
        }
        const trailerVideo = results.filter(
          (video) => video.type === 'Trailer'
        );
        setTrailers(trailerVideo);
      } catch (error) {
        console.error('ERROR', error);
      }
    };
    fetchData();
  }, [movieId, lang]);

  return (
    <div className={css.modalTrailerWrap}>
      {trailers && trailers.length !== 0 ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${
            trailers && trailers.length > 0 ? trailers[0].key : ''
          }`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <>
          <p className={css.errorMessageText}>{t('noTrailer')}</p>
          <img
            className={css.MovieImg}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt="poster"
          />
        </>
      )}
    </div>
  );
};

export default ModalTrailer;
