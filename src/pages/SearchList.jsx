import { List } from 'components/List';
import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar';
import { getMovieByName } from 'fetch';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

// let a;
// export const specialFuc = word => {
//   console.log(word);
//   a = word;
//   return a;
// };
// console.log(a);

export const SearchList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  const handleSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (query) {
      getMovieByName(query).then(res => setMovies(res.results));
    }
  }, [query]);

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {movies.length === 0 ? (
        <h1>Your choice</h1>
      ) : (
        <List list={movies} type="movie" />
      )}
      {movies.length === 0 && query !== null && (
        <FailureText>Nothing found on your request</FailureText>
      )}
    </div>
  );
};

const FailureText = styled.h2`
  text-align: center;
`;
