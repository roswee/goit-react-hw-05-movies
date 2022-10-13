import React, { useEffect, useState } from 'react';
import api from 'services/API';
import { MovieMiniImg, TrendsList, TrendsElement, TrendLink, HomepageSection } from './HomepageStyled';

const Homepage = () => {
  const [trending, setTrending] = useState([]);

  const getMovies = async () => {
    try {
      const result = await api.fetchTrending();
      setTrending(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <HomepageSection>
      <h2>Trending today</h2>
      <TrendsList>
        {trending.map(({ title, name, id, poster_path }) => (
          <TrendsElement key={id}>
            <MovieMiniImg
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
            <TrendLink to={`/movies/${id}`}>{title ? title : name}</TrendLink>
          </TrendsElement>
        ))}
      </TrendsList>
    </HomepageSection>
  );
};

export default Homepage;
