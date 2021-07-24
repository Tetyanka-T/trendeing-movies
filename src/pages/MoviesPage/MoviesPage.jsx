import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as movieApi from 'apiService/apiService';
import Spinner from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import SearchForm from 'components/SearchForm/SearchForm';
// import Button from 'components/Button/Button';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './MoviesPage.module.css';

// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

export default function MoviePage() {
  // const { url } = useRouteMatch;
  // const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  const [searchMovie, setSearchMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    async function onFetchMovie() {
      try {
        setReqStatus('pending');

        const movies = await movieApi.fetchSearchMovie(searchMovie, page);

        if (!movies.length) {
          throw new Error();
        }

        setMovies(prevState => [...prevState, ...movies]);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
        // toast.error('Not found');
      }
    }
    onFetchMovie();

    page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }, [page, searchMovie]);

  const handleSearchChange = searchMovie => {
    reset();
    setSearchMovie(searchMovie);
    history.push({
      ...location,
      search: `query=${searchMovie}`,
    });
  };

  const reset = () => {
    setSearchMovie(null);
    setMovies([]);
    setPage(1);
    setReqStatus('idle');
  };
  // const onLoadMore = () => {
  //   setPage(prevState => prevState + 1);
  // };

  return (
    <Container>
      <SearchForm onSearch={handleSearchChange} />
      {reqStatus === 'pending' && <Spinner />}

      {movies && (
        <ul className={s.gallery}>
          {movies.map(movie => (
            <li key={movie.id} className={s.card__item}>
              <Link
                className={s.link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <MovieCard movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* {movies.length > 0 && <Button onClick={onLoadMore} />} */}
    </Container>
  );
}
