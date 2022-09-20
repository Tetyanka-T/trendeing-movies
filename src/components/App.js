import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Container from './Container/Container';
import Header from './Header/Header';
import { Spinner } from './Loader/Loader';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage.jsx' /* webpackChankName: "home-page" */),
);
const MoviePage = lazy(() =>
  import(
    'pages/MoviesPage/MoviesPage.jsx' /* webpackChankName: "movie-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChankName: "movie-details-page" */
  ),
);

function App() {
  return (
    <Container>
      <Header />
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
