import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchDetails } from 'services/API';
import { Description, Details, MovieInfo, StyledLink, MovieDetails } from './MovieDetailsPg.styled';

export const MovieDetailsPg = () => {
  const { id } = useParams();
  const [movieById, setMovieById] = useState({});
  const location = useLocation();
  const bckBtn = location.state ? '/movies' : '/';
 
  useEffect(() => {
    renderDetails(id);
  }, []);

  const renderDetails = async id => {
    try {
      const result = await fetchDetails(id);
      setMovieById(result);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    release_date,
    vote_average,
    poster_path,
    original_title,
    overview,
    genres,
  } = movieById;

  const score = `${(vote_average * 10).toFixed(0)}%`;
  const year = new Date(release_date).getFullYear();

  return (
    <MovieDetails>
      <StyledLink to={bckBtn}>Go back</StyledLink>
      <Details>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300px"
        ></img>
        <Description>
          <h2>
            {original_title} ({year})
          </h2>
          <p>User Score: {score}</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h4>Genres</h4>
          <p>{genres?.map(g => g.name).join(', ')}</p>
        </Description>
      </Details>
      <MovieInfo>
          Additional Information
          <li>
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
          </li>
      </MovieInfo>
      <Suspense fallback={<div>Please wait</div>}>
        <Outlet />
      </Suspense>
    </MovieDetails>
  );
};
