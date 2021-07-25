import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import * as movieApi from 'apiService/apiService';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function onFetchCast() {
      try {
        const cast = await movieApi.fetchMovieCast(movieId);
        setCast(cast);
      } catch (err) {
        toast.error('Not found');
      }
    }
    onFetchCast();
  }, [movieId]);

  return (
    <>
      <ul className={s.list}>
        {cast.map(actor => (
          <li key={actor.id} className={s.item}>
            <div className={s.thumb}>
              <img
                className={s.photo}
                src={movieApi.poster + actor.profile_path}
                alt={actor.name}
                width="80px"
              />
            </div>

            <h3 className={s.title}>{actor.name}</h3>
            <p>
              <span className={s.text}>Character:</span> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
