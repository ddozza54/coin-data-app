import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  font-size: 18px;
  h4 {
    color: ${(prop) => prop.theme.accentColor};
  }
`;

const Volume = styled.div`
  grid-column: 1/ -1;
  grid-row: 1/ 2;
  background-color: ${(prop) => prop.theme.tabColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  span {
    font-weight: 600;
  }
`;

const HighestPrice = styled.div`
  grid-template-columns: 1/2;
  grid-template-rows: 2/3;
  background-color: ${(prop) => prop.theme.tabColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  span {
    color: tomato;
    font-weight: 600;
  }
`;

const LowesttPrice = styled.div`
  grid-template-columns: 1/2;
  grid-template-rows: 2/3;
  background-color: ${(prop) => prop.theme.tabColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  span {
    color: skyblue;
    font-weight: 600;
  }
`;

interface PriceProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["price", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const volumes = data?.map((v) => {
    return Number(v.volume).toFixed(2);
  });
  const volume = volumes?.pop();

  const high = data?.map((v) => {
    return v.high;
  });
  const highest = high?.pop();

  const low = data?.map((v) => {
    return v.low;
  });
  const lowest = low?.pop();

  return (
    <Wrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Volume>
            <h4>오늘의 거래량</h4>
            <span>{volume}</span>
          </Volume>
          <HighestPrice>
            <h4>최고가</h4>
            <span>$ {highest}</span>
          </HighestPrice>
          <LowesttPrice>
            <h4>최저가</h4>
            <span>$ {lowest}</span>
          </LowesttPrice>
        </>
      )}
    </Wrapper>
  );
}
