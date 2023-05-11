import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

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
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <div></div>;
}
