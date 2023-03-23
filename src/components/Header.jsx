import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { SearchBar } from './SearchBar';
// import { useState, useEffect } from 'react';
// import { getMovieByName } from 'fetch';
// import { useSearchParams } from 'react-router-dom';
// import { specialFuc } from 'pages/SearchList';

export const Header = () => {
  // const handleSubmit = value => {
  //   specialFuc(value);
  //   console.log(value);

  return (
    <HeaderStyled>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movie">Movie</Link>
      <Link to="/series">TV Series</Link>
      {/* <SearchBar /> */}
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
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
