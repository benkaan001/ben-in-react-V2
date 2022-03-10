import React from 'react';
import CoinItem from './CoinItem';
import styled from 'styled-components';
import { mobile } from '../mobileScreen';
import { Link } from 'react-router-dom';
import Coin from '../pages/Coin';

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
const Hide = styled.p`
  ${mobile({ display: 'none' })}
`;

const Coins = (props) => {
  return (
    <Container>
      <div>
        <Heading>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24hr-change</p>
          <Hide>24hr-Volume</Hide>
          <Hide>Market Cap</Hide>
        </Heading>
        {props.coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Coins;
