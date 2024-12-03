import { format } from 'date-fns';
import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import css from './MovieList.module.css';

const MovieList = ({ movieList, genres, currentPage, addClass }) => {
  const location = useLocation();
  const scrollRef = useRef();
  const heightItem =
    scrollRef.current && scrollRef.current.getBoundingClientRect().height;

  useEffect(() => {
    setTimeout(() => {
      window.scrollBy({
        top: currentPage > 1 ? (heightItem + 20) * 2 : 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  }, [currentPage, heightItem]);

  return (
    <ul className={clsx(css.MovieList, addClass)}>
      {movieList
        // .toSorted((a, b) => {
        //   return b.vote_average - a.vote_average;
        // })
        // .toSorted((a, b) => {
        //   return b.release_date.localeCompare(a.release_date);
        // })
        .map(
          ({
            id,
            title,
            vote_average,
            release_date,
            poster_path,
            name,
            genre_ids,
          }) => {
            return (
              <div key={id}>
                {poster_path && (
                  <li className={css.MovieItem} ref={scrollRef}>
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
                            {genres
                              .filter((genre) => genre_ids.includes(genre.id))
                              .map((genre) => genre.name)
                              .join(', ')}
                          </span>
                          <span className={css.MovieRating}>
                            {vote_average.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
              </div>
            );
          }
        )}
    </ul>
  );
};

export default MovieList;
