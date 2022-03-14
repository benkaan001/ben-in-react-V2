import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const Header = styled.h1`
  font-family: 'Monoton', 'Libre Barcode 39 Extended Text', cursive;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 3rem;
  font-weight: 500;
  color: whitesmoke;
`;

const CoinContainer = styled.div`
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.7rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
`;
const ContentWrapper = styled.div`
  max-width: 740px;
  margin: 1rem auto;
  padding: 0.7rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
`;
const Rank = styled.div`
  margin: 0.5 0;
  display: flex;
  justify-content: center;
`;
const RankBtn = styled.span`
  border: 1px solid black;
  box-shadow: 0px 0px 8px black;
  background-color: green;
  border-radius: 8px;
  padding: 0.2rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  justify-content: center;
  flex-direction: column;
`;
const Table = styled.table`
  margin: 0.5rem 0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  background-color: #333;
`;
const DataCell = styled.td`
  padding: 8px;
  text-align: center;
`;

const CoinHeading = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  justify-content: center;
`;
const CoinPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
const LeftSide = styled.div``;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  margin: 0.6rem 0;
  padding-bottom: 0.5rem;

  p:first-child {
    margin: 1rem 0;
  }
`;
const RightSide = styled.div``;

const About = styled.div`
  h3 {
    margin: 1rem 0;
    text-align: center;
    color: whitesmoke;
  }
`;

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
        <ContentWrapper>
          <Header>{coin.name}</Header>
        </ContentWrapper>

        <ContentWrapper>
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
        </ContentWrapper>

        <ContentWrapper>
          <Table>
            <thead>
              <tr>
                <HeaderCell>1h</HeaderCell>
                <HeaderCell>24h</HeaderCell>
                <HeaderCell>7d</HeaderCell>
                <HeaderCell>14d</HeaderCell>
                <HeaderCell>30d</HeaderCell>
                <HeaderCell>1yr</HeaderCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <DataCell>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
                <DataCell>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
                <DataCell>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
                <DataCell>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
                <DataCell>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
                <DataCell>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </DataCell>
              </tr>
            </tbody>
          </Table>
        </ContentWrapper>
        <ContentWrapper>
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
              {/* <Row>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </Row>
              <Row>
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </Row> */}
            </RightSide>
          </Stats>
        </ContentWrapper>

        <ContentWrapper>
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
        </ContentWrapper>
      </CoinContainer>
    </div>
  );
};

export default Coin;
