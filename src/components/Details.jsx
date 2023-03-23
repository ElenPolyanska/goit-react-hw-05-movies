import { Link, Outlet } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { ImFilm } from 'react-icons/im';
import styled from 'styled-components';

export const Details = ({ card }) => {
  return (
    <main>
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
      <Container>
        <CardWrapper>
          <Img
            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
            alt="poster"
          />
        </CardWrapper>
        <CardWrapper>
          <TitleName>{card.name}</TitleName>
          <TitleName>{card.title}</TitleName>
          <h3>{card.tagline}</h3>
          <p>{card.overview}</p>
          <ul>
            <Li>
              <GiFilmProjector />
              <LinkSt to="cast">Cast</LinkSt>
            </Li>
            <Li>
              <ImFilm />

              <LinkSt to="reviews">Reviews</LinkSt>
            </Li>
          </ul>
        </CardWrapper>
      </Container>

      <Outlet />
    </main>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #909696;
  border-radius: 6px;
  padding: 6px;
  :hover,
  :focus {
    background-color: #00ffdd;
  }
`;

const LinkSt = styled(Link)`
  margin: 4px 8px;

  font-size: medium;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
  padding: 24px;
  justify-content: space-around;
`;

const CardWrapper = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-items: stretch;
`;

const TitleName = styled.h1`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  /* font-size: large; */
`;
