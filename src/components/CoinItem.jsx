import React from 'react';

const CoinItem = ({ coins }) => {
  return (
    <div className='coin-row'>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt='coin symbol' />
        <p>{coins.symbol}</p>
      </div>
      <p>{coins.current_price}</p>
      <p>{coins.price_change_percentage_24h}</p>
      <p>{coins.total_volume}</p>
      <p>{coins.market_cap}</p>
    </div>
  );
};

export default CoinItem;
