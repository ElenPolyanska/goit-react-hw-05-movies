import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = ({ list }) => {
  console.log(list);
  return (
    <div>
      <Container>
        {list.map(
          ({ id, title, name, backdrop_path, media_type = 'movie' }) => (
            <CardWrapper key={id}>
              {
                <LinkStyled to={`/${media_type}/${id}`}>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt=""
                  />
                  <TitleName>{title || name}</TitleName>
                </LinkStyled>
              }
            </CardWrapper>
          )
        )}
      </Container>
    </div>
  );
};

const Img = styled.img`
  width: 100%;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  margin-bottom: 28px;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-items: stretch;
  text-align: center;
`;

const TitleName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: medium;
`;
