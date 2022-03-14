import React from 'react';
import styled from 'styled-components';
import { BsCoin } from 'react-icons/bs';

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
  font-family: 'Monoton';
  font-size: 3rem;
`;
const HeaderStyle = styled.span`
  color: whitesmoke;
`;

const NavBar = () => {
  return (
    <Link to='/'>
      <Container>
        <Icon>
          <BsCoin />
        </Icon>
        <Header>
          {' '}
          <HeaderStyle> React </HeaderStyle> Coin{' '}
        </Header>
        <Icon>
          <BsCoin />
        </Icon>
      </Container>
    </Link>
  );
};

export default NavBar;
