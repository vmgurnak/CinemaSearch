import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestMovieByTrailer } from '../../services/api.js';

import css from './ModalTrailer.module.css';

const ModalTrailer = ({ poster }) => {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await requestMovieByTrailer(movieId);
        console.log(results);

        if (results && results.length === 0) {
          return;
        }
        const trailerVideo = results.filter(
          (video) => video.type === 'Trailer'
        );
        setTrailers(trailerVideo);
        console.log(trailerVideo);
      } catch (error) {
        console.error('ERROR', error);
      }
    };
    fetchData();
  }, [movieId]);

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
          <p className={css.errorMessageText}>
            There is no trailer for this movie
          </p>
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
