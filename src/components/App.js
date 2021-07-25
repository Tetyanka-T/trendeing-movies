import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Container from './Container/Container';
import Header from './Header/Header';
import { Spinner } from './Loader/Loader';
// import PageNotFound from 'pages/NotFound/PageNotFound';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviePage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

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

const PageNotFound = lazy(() =>
  import(
    'pages/NotFound/PageNotFound' /* webpackChankName: "page-not-found" */
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

          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
