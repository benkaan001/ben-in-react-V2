import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const Header = styled.h1`
  font-family: 'Libre Barcode 39 Extended Text', cursive;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 3rem;
  font-weight: 500;
`;

const CoinContainer = styled.div``;
const Content = styled.div``;
const Rank = styled.div``;
const RankBtn = styled.span``;
const Info = styled.div``;
const CoinHeading = styled.div``;
const CoinPrice = styled.div``;
const Stats = styled.div``;
const LeftSide = styled.div``;
const Row = styled.div``;
const RightSide = styled.div``;
const About = styled.div``;

const Coin = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CoinContainer>
        <Content>
          <Header>{coin.name}</Header>
        </Content>
        <Content>
          <Rank>
            <RankBtn> Rank # {coin.market_cap_rank}</RankBtn>
          </Rank>
          <Info>
            <CoinHeading>
              {coin.image ? <img src={coin.image.small} alt='' /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </CoinHeading>
            <CoinPrice>
              {coin.market_data?.current_price ? (
                <h1> {coin.market_data.current_price.usd.toLocaleString()} </h1>
              ) : null}
            </CoinPrice>
          </Info>

          <Content>
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_1h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
            <Content>
              <Stats>
                <LeftSide>
                  <Row>
                    <h4>24 Hour Low</h4>
                    {coin.market_data?.low_24h ? (
                      <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                    ) : null}
                  </Row>
                  <Row>
                    <h4>24 Hour High</h4>
                    {coin.market_data?.high_24h ? (
                      <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                    ) : null}
                  </Row>
                </LeftSide>
                <RightSide>
                  <Row>
                    <h4>Market Cap</h4>
                    {coin.market_data?.market_cap ? (
                      <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                    ) : null}
                  </Row>
                  <Row>
                    <h4>Circulating Supply</h4>
                    {coin.market_data ? (
                      <p>{coin.market_data.circulating_supply}</p>
                    ) : null}
                  </Row>
                </RightSide>
              </Stats>
            </Content>
          </Content>
        </Content>
        <Content>
          <About>
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ''
                ),
              }}
            ></p>
          </About>
        </Content>
      </CoinContainer>
    </div>
  );
};

export default Coin;
