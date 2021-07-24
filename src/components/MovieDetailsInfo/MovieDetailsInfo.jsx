import * as movieApi from 'apiService/apiService';
import s from './MovieDetailsInfo.module.css';

export default function MovieDetailsInfo({ movie }) {
  const releaseYear = movie.release_date.slice(0, 4);
  return (
    <div className={s.card}>
      <img
        src={movieApi.poster + movie.poster_path}
        alt={movie.title}
        width="280"
        height="402"
      />
      <div className={s.discr}>
        <h1>
          {movie.title} ({releaseYear})
        </h1>
        <p>User score: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
        <ul>
          Genres:
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
