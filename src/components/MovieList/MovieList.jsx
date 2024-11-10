import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import css from './MovieList.module.css';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul className={css.MovieList}>
      {movieList
        // .toSorted((a, b) => {
        //   return b.vote_average - a.vote_average;
        // })
        // .toSorted((a, b) => {
        //   return b.release_date.localeCompare(a.release_date);
        // })
        .map(({ id, title, vote_average, release_date, poster_path, name }) => {
          return (
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
                  <div className={css.MovieTitle}>{title}</div>
                  <div className={css.MovieRating}>
                    {vote_average.toFixed(1)}
                  </div>
                  <div className={css.MovieYear}>
                    {format(new Date(release_date), 'yyyy')}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
