import { useState, useEffect } from 'react';

import { getMovie } from 'fetch';
import { List } from './List';

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovie().then(res => setMovieList(res));
    console.log(getMovie());
  }, []);

  return <List list={movieList} type="movie" />;
};
