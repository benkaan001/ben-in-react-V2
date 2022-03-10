import { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import NavBar from './components/NavBar';

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavBar />
      <Coins coins={coins} />
    </>
  );
}

export default App;
