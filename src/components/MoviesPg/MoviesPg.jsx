import { useState } from 'react';
import { useLocation, Link} from 'react-router-dom';

export const MoviesPg = ({ onSubmit, movies }) => {
  const [value, setValue] = useState('');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');}
  ;

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="searchMovie"
          type="text"
          onChange={handleChange}
          placeholder="Enter movie name"
        ></input>
        <button type="submit"> Search </button>
      </form>

        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <img src=
              {poster_path
                ?( `https://image.tmdb.org/t/p/w500${poster_path}`)
                : (`https://th.bing.com/th/id/OIP.n-GYj4PuriTRbbExR10xsgHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7`)}
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
