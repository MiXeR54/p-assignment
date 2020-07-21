import { Trade, Message } from "../../types/types";
import {
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  DELETE_TRADE,
  SWITCH_USER,
  MARK_AS_READ,
} from "./actionTypes";

export const selectTrade = (tradeID: number | null) => ({
  type: SELECT_TRADE,
  payload: tradeID,
});

export const fetchTrades = (trades: Trade[]) => ({
  type: FETCH_TRADES,
  payload: trades,
});

export const deleteTrade = (tradeID: number) => ({
  type: DELETE_TRADE,
  payload: tradeID,
});

export const switchUser = (isSeller: boolean) => ({
  type: SWITCH_USER,
  payload: isSeller,
});

export const sendMessage = (message: Message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const markAsRead = (tradeID: number) => ({
  type: MARK_AS_READ,
  payload: tradeID,
});
