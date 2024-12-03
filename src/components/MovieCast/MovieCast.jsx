import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { requestMovieByCast } from '../../services/api';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isError, setIsError] = useState(false);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    if (!movieId) return;
    async function fetchDataCast() {
      try {
        setIsError(false);
        const data = await requestMovieByCast(movieId, lang);

        setMovieCast(data.cast);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    }

    fetchDataCast();
  }, [movieId, lang]);

  return (
    <div className={css.MovieCastWrap}>
      {isError && <ErrorMessage />}
      {movieCast !== null && (
        <ul className={css.MovieCastList}>
          {movieCast.map(({ id, name, character, profile_path }) => {
            return (
              <>
                {profile_path !== null && (
                  <div key={id}>
                    <li className={css.MovieCastItem}>
                      <img
                        className={css.MovieCastImg}
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}
                      />
                      <p className={css.MovieCastName}>{name}</p>
                      <p className={css.MovieCastChar}>
                        {t('character')}: {character}
                      </p>
                    </li>
                  </div>
                )}
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
