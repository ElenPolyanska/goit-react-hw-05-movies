import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImCool } from 'react-icons/im';
import { castById } from 'fetch';
import styled from 'styled-components';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    if (cast.length > 0)
      ref?.current?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }, [cast]);

  useEffect(() => {
    castById(id).then(res => setCast(res));
  }, [id]);

  return (
    <div ref={ref}>
      {cast ? (
        <>
          <h3>Cast</h3>
          <List>
            {cast.map(({ character, credit_id, name, profile_path }) => (
              <Item key={credit_id}>
                <Image
                  src={
                    profile_path ? (
                      `https://image.tmdb.org/t/p/w500${profile_path}`
                    ) : (
                      <ImCool />
                    )
                  }
                  alt={name}
                />
                <p>Character: {character}</p>
                <p>Actor: {name}</p>
              </Item>
            ))}
          </List>
        </>
      ) : (
        <p>There is no info about cast</p>
      )}
    </div>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.li`
  width: calc(100% - 60px) / 4;
`;

const Image = styled.img`
  width: 250px;
  height: 375px;
`;
