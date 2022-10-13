import { useState, useEffect } from 'react';
import { useLocation, Link,  } from 'react-router-dom';

export const MoviesPg = ({ onSubmit, movies }) => {
  const [value, setValue] = useState([]);
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };
// eslint-disable-next-line
  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="searchMovie"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={value}
          placeholder="Enter movie name"
        ></input>
        <button type="submit"> Search </button>
      </form>

        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width="50px"
                alt={title}
              />
              <Link to={`${id}`} state={location}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
    </>
  );
};
