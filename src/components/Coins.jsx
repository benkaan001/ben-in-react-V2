import React from 'react';
import CoinItem from './CoinItem';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Coins = (props) => {
  return (
    <Container>
      <div>
        <Heading>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24hr</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </Heading>
        {props.coins.map((coin) => {
          return <CoinItem coins={coin} key={coin.id} />;
        })}
      </div>
    </Container>
  );
};

export default Coins;
