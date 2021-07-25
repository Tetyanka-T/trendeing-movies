import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';

import { toast } from 'react-hot-toast';
import * as movieApi from 'apiService/apiService';
import { Spinner } from 'components/Loader/Loader';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';
import MovieNavigation from 'components/MovieNavigation/MovieNavigation';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('components/Cast/Cast.jsx' /* webpackChankName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChankName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  const { path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    async function onFetchMovie() {
      try {
        setReqStatus('pending');
        const movie = await movieApi.fetchMovieId(movieId);

        if (!movie) {
          throw new Error();
        }
        setMovie(movie);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
        toast.error('Not found');
      }
    }
    onFetchMovie();
  }, [movieId]);

  const onGoback = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {reqStatus === 'pending' && <Spinner />}
      <button type="button" onClick={onGoback} className={s.button}>
        Back
      </button>
      {movie && <MovieDetailsInfo movie={movie} />}

      {movie && <MovieNavigation />}

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
