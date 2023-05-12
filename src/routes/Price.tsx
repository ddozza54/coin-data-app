import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: rosybrown;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
`;

const DataBox = styled.div`
  background-color: whitesmoke;
  border-radius: 10px;
`;

const Volume = styled.div`
  grid-column: 1/ -1;
  grid-row: 1/ 2;
  background-color: whitesmoke;
  border-radius: 10px;
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

  const high = data?.map((v) => {
    return v.high;
  });
  return (
    <Wrapper>
      <Volume>
        <h1></h1>
      </Volume>
    </Wrapper>
  );
}
