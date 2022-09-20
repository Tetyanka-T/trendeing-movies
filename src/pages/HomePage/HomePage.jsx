import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from 'apiService/apiService';
import Container from 'components/Container/Container';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <h1 className={s.title}>Trending today</h1>
      {movies && (
        <ul className={s.gallery}>
          {movies.map(movie => (
            <li key={movie.id} className={s.card__item}>
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
