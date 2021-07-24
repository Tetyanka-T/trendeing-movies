import * as movieApi from 'apiService/apiService';
import s from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const releaseYear = movie.release_date.slice(0, 4);
  return (
    <div key={movie.id}>
      <div className={s.card__thumb}>
        <img
          className={s.card__photo}
          src={movieApi.poster + movie.poster_path}
          alt={movie.title}
          width="280"
          height="402"
        />
      </div>
      <div className={s.card__info}>
        <h2 className={s.card__title}>{movie.title}</h2>
        <p className={s.card__data}>{releaseYear}</p>
      </div>
    </div>
  );
}
