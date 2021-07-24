import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const autKey = 'e46b87edbe0418b9678f5579382a8e13';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${autKey}`);
  const movies = response.data.results;

  return movies;
};

export const fetchSearchMovie = async (searchMovie, page) => {
  const response = await axios.get(
    `/search/movie?api_key=${autKey}&query=${searchMovie}&page=${page}&language=en-US`,
  );
  const movies = response.data.results;
  return movies;
};

export const fetchMovieId = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${autKey}&language=en-US`,
  );
  const fullInfo = response.data;

  return fullInfo;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${autKey}&language=en-US`,
  );
  const reviews = response.data.results;
  console.log(reviews);

  return reviews;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${autKey}&language=en-US`,
  );
  const cast = response.data.cast;

  return cast;
};

export const poster = 'https://image.tmdb.org/t/p/w500';
