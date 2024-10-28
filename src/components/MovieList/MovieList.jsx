import { Link, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul className={css.MovieList}>
      {movieList
        .toSorted((a, b) => {
          return b.vote_average - a.vote_average;
        })
        // .toSorted((a, b) => {
        //   return b.release_date.localeCompare(a.release_date);
        // })
        .map(({ id, title, vote_average, release_date }) => {
          return (
            <li className={css.MovieListItem} key={id}>
              <Link
                className={css.MovieListLink}
                to={`/movies/${id}`}
                state={location}
              >
                {title}
              </Link>
              <div>{vote_average.toFixed(1)}</div>
              <div>{release_date}</div>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
