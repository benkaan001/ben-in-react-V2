import React from 'react';
import CoinItem from './CoinItem';

const Coins = (props) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24hr</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>
        {props.coins.map((coin) => {
          return <CoinItem coins={coin} key={coin.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
