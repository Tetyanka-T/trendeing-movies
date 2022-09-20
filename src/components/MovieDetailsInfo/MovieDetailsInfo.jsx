import PropTypes from 'prop-types';
import * as movieApi from 'apiService/apiService';
import s from './MovieDetailsInfo.module.css';

export default function MovieDetailsInfo({ movie }) {
  const releaseYear = movie.release_date.slice(0, 4);
  return (
    <div className={s.card}>
      <img
        src={movieApi.poster + movie.poster_path}
        alt={movie.title}
        width="290"
        height="402"
      />
      <div className={s.discr}>
        <h1>
          {movie.title} ({releaseYear})
        </h1>
        <p>
          <span className={s.text}> User score:</span> {movie.vote_average}
        </p>
        <p>
          <span className={s.text}> Overview:</span> {movie.overview}
        </p>
        <ul className={s.genre_list}>
          <span className={s.text}>Genres:</span>
          {movie.genres.map(genre => (
            <li className={s.genre_item} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetailsInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
