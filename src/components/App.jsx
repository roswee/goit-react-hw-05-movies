import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Nav } from './NavStyles';
import { StyledLink } from './StyledLink';
import api from 'services/API';

const { fetchByQ } = api;

const Homepage = lazy(() => import('./Homepage/Homepage'));
const MoviesPg = lazy(() =>
  import('./MoviesPg/MoviesPg').then(module => ({
    default: module.MoviesPg,
  }))
);
const Cast = lazy(() => import('./Cast/Cast').then(module => ({
  default: module.Cast,
})));
const Reviews = lazy(() => import('./Reviews/Reviews').then(module => ({
  default: module.Reviews})));
const MovieDetailsPg = lazy(() =>
  import('./MovieDetailsPg/MovieDetailsPg').then(module => ({
    default: module.MovieDetailsPg,
  }))
);

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchingValue, setSearchingValue] = useState(null);

  useEffect(() => {
    renderMovies(searchingValue);
  }, [searchingValue]);

  const searchHandler = value => {
    setMovies([]);
    setSearchingValue(value);
  };

  const renderMovies = async searchingValue => {
    try {
      if (searchingValue !== '') {
        const result = await fetchByQ(searchingValue);
        setMovies([...result, ...movies]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <Suspense fallback={<div>Please wait...</div>}>
        <Nav>
          <StyledLink to="/"> Home </StyledLink>
          <StyledLink to="/movies"> Movies </StyledLink>
        </Nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/movies"
            element={<MoviesPg onSubmit={searchHandler} movies={movies} />}
          />
          <Route path="/movies/:id" element={<MovieDetailsPg />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
  );
};
