import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'fetch';
import { Details } from 'components/Details';

export const MovieDetails = () => {
  const { id } = useParams();

  const [card, setCard] = useState({});

  useEffect(() => {
    getMovieById(id).then(res => setCard(res));
  }, [id]);
  return <Details card={card} />;
};
