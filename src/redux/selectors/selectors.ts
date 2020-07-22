import { AppState } from "../store";

export const fetchInfo = (state: AppState) => state.trades.tradingInfo;
export const allTrades = (state: AppState) => state.trades.trades;
export const selectedTrade = (state: AppState) => state.trades.selected;
export const selectIsSeller = (state: AppState) => state.trades.isSeller;
export const selectCurrentTrade = (state: AppState) =>
  state.trades.trades.find((trade) => trade.id === state.trades.selected);
