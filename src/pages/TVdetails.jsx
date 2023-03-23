import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTVbyId } from 'fetch';
import { Details } from 'components/Details';

export const TVdetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    getTVbyId(id).then(res => setCard(res));
  }, [id]);

  return <Details card={card} />;
};
