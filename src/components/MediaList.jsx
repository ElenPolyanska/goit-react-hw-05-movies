import { useState, useEffect } from 'react';
import { getMedia } from 'fetch';
import { List } from './List';

export const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    getMedia().then(res => setMediaList(res));
  }, []);

  return <List list={mediaList} type="movie" />;
};
