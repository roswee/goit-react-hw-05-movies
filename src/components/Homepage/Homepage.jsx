import React, { useEffect, useState } from 'react';
import api from 'services/API';
import { Link } from 'react-router-dom';
import { MovieMiniImg, TrendsList } from './HomepageStyled';

const Homepage = () => {
  const [trending, setTrending] = useState([]);

  const getMovies = async () => {
    try {
      const result = await api.fetchTrending();
      setTrending(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <TrendsList>
        {trending.map(({ title, name, id, poster_path }) => (
          <li key={id}>
            <MovieMiniImg
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
            <Link to={`/movies/${id}`}>{title ? title : name}</Link>
          </li>
        ))}
      </TrendsList>
    </section>
  );
};

export default Homepage;
