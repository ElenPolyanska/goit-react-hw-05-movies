import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMediaById } from 'fetch';
import { Details } from 'components/Details';

export const MediaDetails = () => {
  const { id } = useParams();

  const [card, setCard] = useState({});

  useEffect(() => {
    getMediaById(id).then(res => setCard(res));
  }, [id]);

  return <Details card={card} />;
};
