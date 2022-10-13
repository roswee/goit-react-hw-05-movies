import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchDetails } from 'services/API';
import { Description, Details, MovieInfo } from './MovieDetailsPg.styled';

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
      setMovieById({ ...result });
    } catch (error) {
      console.log(error);
    }
  };

  const {
    release_date,
    vote_average,
    poster_path,
    orginal_title,
    overview,
    genres,
  } = movieById;

  const movieYr = new Date(release_date).getFullyYear();
  const score = `${(vote_average * 10).toFixed(0)}%`;

  return (
    <div>
      <button to={bckBtn}>Go back</button>
      <Details>
        <img
          src={poster_path}
          alt={orginal_title}
          width="300px"
        ></img>
        <Description>
          <h2>
            {orginal_title}
            {movieYr}
          </h2>
          <p>User Score: {score}</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h4>Genres</h4>
          <p>{genres?.map(g => g.name).join(', ')}</p>
        </Description>
      </Details>
      <MovieInfo>
        <ul>
          Additional Information
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </MovieInfo>
      <Suspense fallback={<div>Please wait</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
