// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import { Header } from './Header';

// export const Layout = () => {
//   return (
//     <Container>
//       <Header />
//       <Outlet />
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 0 56px;
// `;

// ================
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';

export const Layout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header />

      <main>
        <Button onClick={handleClick}>Go back</Button>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
`;

const Button = styled.button`
  position: fixed;
  right: 180px;
  bottom: 60px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 26px;
  font-size: small;
  font-weight: 600;
  padding: 6px;

  :hover {
    background-color: #00ffdd;
  }
`;
