import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import clsx from 'clsx';

import css from './MovieLisFavorites.module.css';

const MovieListFavorites = ({ movieList, genres, addClass }) => {
  const location = useLocation();

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
          genre_ids,
        }) => {
          return (
            <>
              {poster_path && (
                <li className={css.MovieItem} key={id}>
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
                          {/* {genre_ids.map((genre) => genre).join(', ')} */}
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
