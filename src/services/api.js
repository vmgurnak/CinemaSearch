import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzcyM2ZiMmM5MTkxNGU3MWEzOGYzNDJjZjBmOGIwNCIsInN1YiI6IjY1M2ZkNzQyNTkwN2RlMDEzOGUyZGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sp8qMawUjEgzw9wcpwA81PeCZQ7W8tu-uYEsM9_rj70';

// Trending
// Get a list of trending movies on TMDB.
//https://api.themoviedb.org/3/trending/movie/{time_window}
export const requestTrendingMovie = async (currentPage, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

  const config = {
    params: {
      language: lang,
      page: currentPage,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

// Top Rated
// Get a list of movies ordered by rating.
export const requestTopMovie = async (currentPage, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated';
  const config = {
    params: {
      language: lang,
      page: currentPage,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

// Popular
// Get a list of movies ordered by popularity.
// https://api.themoviedb.org/3/movie/popular
export const requestPopularMovie = async (currentPage, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
  const config = {
    params: {
      language: lang,
      page: currentPage,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

// Upcoming
// Get a list of movies that are being released soon.
// https://api.themoviedb.org/3/movie/upcoming
export const requestUpcomingMovie = async (currentPage, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/upcoming';
  const config = {
    params: {
      language: lang,
      page: currentPage,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

// Search
// Search for movies by their original, translated and alternative titles.
// https://api.themoviedb.org/3/search/movie
export const requestMovieByQuery = async (currentPage, query, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const config = {
    params: {
      language: lang,
      query,
      page: currentPage,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

// Details;
// Get the top level details of a movie by ID.
// https://api.themoviedb.org/3/movie/{movie_id}
export const requestMovieById = async (id, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const config = {
    params: {
      language: lang,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}${id}`, config);
  return data;
};

// Credits
// Get the cast and crew of a movie by ID.
//https://api.themoviedb.org/3/movie/{movie_id}/credits
export const requestMovieByCast = async (id, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const config = {
    params: {
      language: lang,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}${id}/credits`, config);
  return data;
};

// Reviews;
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// Get the reviews of a movie by ID.
export const requestMovieByReviews = async (id, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const config = {
    params: {
      language: lang,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}${id}/reviews`, config);
  return data;
};

// Trailer
// https://api.themoviedb.org/3/movie/{movie_id}/videos

export const requestMovieByTrailer = async (id, lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const config = {
    params: {
      language: lang,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}${id}/videos`, config);
  return data;
};

// Genres
// https://api.themoviedb.org/3/genre/movie/list
// Get the list of genres.
export const requestGenres = async (lang) => {
  const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
  const config = {
    params: {
      language: lang,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};
