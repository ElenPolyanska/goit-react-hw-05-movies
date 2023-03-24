import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';
// import { useState, useEffect } from 'react';
// import { getMovieByName } from 'fetch';
// import { useSearchParams } from 'react-router-dom';
// import { specialFuc } from 'pages/SearchList';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movie">Movie</Link>
      <Link to="/tv">TV Series</Link>

      <SearchBar />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ff00aa92;
  }
`;
// // =======================
// import { List } from 'components/List';
// import { useState, useEffect } from 'react';
// import { SearchBar } from 'components/SearchBar';
// import { getMovieByName } from 'fetch';
// import { useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

// // let a;
// // export const specialFuc = word => {
// //   console.log(word);
// //   a = word;
// //   return a;
// // };
// // console.log(a);

// export const SearchList = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams('');
//   const query = searchParams.get('query');

//   const handleSubmit = value => {
//     setSearchParams(value !== '' ? { query: value } : {});
//   };

//   useEffect(() => {
//     if (query) {
//       getMovieByName(query).then(res => setMovies(res.results));
//     }
//   }, [query]);

//   return (
//     <div>
//       <SearchBar handleSubmit={handleSubmit} />
//   {movies.length === 0 ? (
//     <h1>Your choice</h1>
//   ) : (
//     <List list={movies} type="movie" />
//   )}
//   {movies.length === 0 && query !== null && (
//     <FailureText>Nothing found on your request</FailureText>
//   )}
// </div>
//   );
// };

// const FailureText = styled.h2`
//   text-align: center;
// `;
