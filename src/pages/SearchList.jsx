import { List } from 'components/List';
import { useState, useEffect } from 'react';

import { getMovieByName } from 'fetch';
import { useSearchParams } from 'react-router-dom';
import { MediaList } from '../components/MediaList';
import styled from 'styled-components';

export const SearchList = () => {
  const [search, setSearch] = useState([]);
  const [searchParams] = useSearchParams('');
  const query = searchParams.get('query');

  // const handleSubmit = value => {
  //   setSearchParams(value !== '' ? { query: value } : {});
  // };

  useEffect(() => {
    if (query) {
      getMovieByName(query).then(res => setSearch(res.results));
    }
  }, [query]);

  return (
    <div>
      {search.length === 0 ? <MediaList /> : <List list={search} />}
      {search.length === 0 && query !== null && (
        <FailureText>Nothing found on your request</FailureText>
      )}
    </div>
  );
};

const FailureText = styled.h2`
  text-align: center;
`;
