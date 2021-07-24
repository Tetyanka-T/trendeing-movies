import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import * as movieApi from 'apiService/apiService';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function onFetchCast() {
      try {
        const cast = await movieApi.fetchMovieCast(movieId);
        setCast(cast);
      } catch (err) {
        // toast.error('Not found');
      }
    }
    onFetchCast();
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={movieApi.poster + actor.profile_path}
              alt={actor.name}
              width="80px"
              height="90px"
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
