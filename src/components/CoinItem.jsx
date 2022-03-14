import React from 'react';
import styled from 'styled-components';
import { mobile } from '../mobileScreen';

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
const Number = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: whitesmoke;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CoinImage = styled.img`
  height: 40px;
  margin-right: 8px;
  width: auto;
`;

const Hide = styled.p`
  ${mobile({ display: 'none' })}
`;

const CoinItem = ({ coins }) => {
  return (
    <Container>
      <Number>{coins.market_cap_rank}</Number>
      <ImageWrapper>
        <CoinImage src={coins.image} alt='coin symbol' />
        <p>{coins.symbol.toUpperCase()}</p>
      </ImageWrapper>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <Hide>${coins.total_volume.toLocaleString()}</Hide>
      <Hide>${coins.market_cap.toLocaleString()}</Hide>
    </Container>
  );
};

export default CoinItem;
