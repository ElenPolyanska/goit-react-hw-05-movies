import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 56px;
`;
