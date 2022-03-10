import React from 'react';
import styled from 'styled-components';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  font-size: 2rem;
`;
const Header = styled.h1`
  text-align: center;
  margin: 1rem;
`;
const HeaderStyle = styled.span`
  color: whitesmoke;
`;

const NavBar = () => {
  return (
    <Link to='/'>
      <Container>
        <Icon>
          <FaCoins />
        </Icon>
        <Header>
          {' '}
          <HeaderStyle> React </HeaderStyle> Coin{' '}
        </Header>
      </Container>
    </Link>
  );
};

export default NavBar;
