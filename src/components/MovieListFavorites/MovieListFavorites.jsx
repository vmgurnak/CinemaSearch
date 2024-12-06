import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import clsx from 'clsx';

import css from './MovieListFavorites.module.css';

const MovieListFavorites = ({ movieList, items, addClass }) => {
  const location = useLocation();

  const scrollRef = useRef();
  const heightItem =
    scrollRef.current && scrollRef.current.getBoundingClientRect().height;

  useEffect(() => {
    setTimeout(() => {
      window.scrollBy({
        top: items > 1 ? heightItem + 20 : 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  }, [items, heightItem]);

  return (
    <ul className={clsx(css.MovieList, addClass)}>
      {movieList.map(
        ({
          id,
          title,
          vote_average,
          release_date,
          poster_path,
          name,
          genres,
        }) => {
          return (
            <>
              {poster_path && (
                <li className={css.MovieItem} ref={scrollRef} key={id}>
                  <Link
                    className={css.MovieLink}
                    to={`/movies/${id}`}
                    state={location}
                  >
                    <div className={css.MovieImgWrap}>
                      <img
                        className={css.MovieImg}
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={name}
                      />
                    </div>
                    <div className={css.MovieInfo}>
                      <div className={css.MovieTitleWrap}>
                        <span className={css.MovieTitle}>{title}</span>
                        {release_date && (
                          <span className={css.MovieYear}>
                            {format(new Date(release_date), 'yyyy')}
                          </span>
                        )}
                      </div>
                      <div className={css.MovieGenresWrap}>
                        <span className={css.MovieGenres}>
                          {genres.map((genre) => genre.name).join(', ')}
                        </span>
                        <span className={css.MovieRating}>
                          {vote_average.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              )}
            </>
          );
        }
      )}
    </ul>
  );
};

export default MovieListFavorites;
