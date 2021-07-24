import { useEffect, useState } from 'react';
// import {, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
// import slugify from 'slugify';
import * as movieApi from 'apiService/apiService';
import Container from 'components/Container/Container';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './HomePage.module.css';

export default function HomePage() {
  // const { movieId } = useParams();

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
              <Link className={s.link} to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

// const makeSlug = string => slugify(string, { lower: true });

// export default function HomePage() {
//   const location = useLocation();
//   // const { movieId } = useParams();
//   // const { url } = useRouteMatch();
//   const [movies, setMovies] = useState(null);

//   useEffect(() => {
//     movieApi.fetchTrendingMovies().then(setMovies);
//   }, []);

//   return (
//     <Container>
//       <h1 className={s.title}>Trending today</h1>
//       {movies && (
//         <ul className={s.gallery}>
//           {movies.map(movie => (
//             <li key={movie.id} className={s.card__item}>
//               <Link
//                 className={s.link}
//                 to={{
//                   pathname: `/movies/${movie.id}`,
//                   state: { from: location },
//                 }}
//               >
//                 <MovieCard movie={movie} />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Container>
//   );
// }
