import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../Loader/Loader.jsx';
import { requestMovieByTrailer } from '../../services/api.js';

import css from './ModalTrailer.module.css';

const ModalTrailer = () => {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await requestMovieByTrailer(movieId);
        console.log(results);

        if (results.length === 0) {
          return;
        }
        const trailerVideo = results.filter(
          (video) => video.type === 'Trailer'
        );
        console.log(trailerVideo);
        setTrailers(trailerVideo);
      } catch (error) {
        console.error('ERROR', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={css.modalTrailerWrap}>
      {loading && <Loader />}
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
      )
    </div>
  );
};

export default ModalTrailer;
