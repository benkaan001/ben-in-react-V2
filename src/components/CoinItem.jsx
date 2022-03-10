import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.1s ease-in-out;
  }
`;

const CoinItem = ({ coins }) => {
  return (
    <Container>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt='coin symbol' />
        <p>{coins.symbol}</p>
      </div>
      <p>{coins.current_price}</p>
      <p>{coins.price_change_percentage_24h}</p>
      <p>{coins.total_volume}</p>
      <p>{coins.market_cap}</p>
    </Container>
  );
};

export default CoinItem;
