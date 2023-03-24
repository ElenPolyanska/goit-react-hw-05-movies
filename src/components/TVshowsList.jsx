import { useState, useEffect } from 'react';
import { getTVshows } from 'fetch';
import { List } from './List';

export const TVshowsList = () => {
  const [tvshowsList, setTVshowsList] = useState([]);

  useEffect(() => {
    getTVshows().then(res => setTVshowsList(res));
    console.log(getTVshows());
  }, []);

  return <List list={tvshowsList} />;
};
