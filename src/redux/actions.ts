import {
  Trade,
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  Message,
  DELETE_TRADE,
  SWITCH_USER,
  MARK_AS_READ,
} from "./types";

export function selectTrade(tradeID: number | null) {
  return {
    type: SELECT_TRADE,
    payload: tradeID,
  };
}

export function fetchTrades(trades: Trade[]) {
  return {
    type: FETCH_TRADES,
    payload: trades,
  };
}

export function deleteTrade(tradeID: number) {
  return {
    type: DELETE_TRADE,
    payload: tradeID,
  };
}

export function switchUser(isSeller: boolean) {
  return {
    type: SWITCH_USER,
    payload: isSeller,
  };
}

export function sendMessage(message: Message) {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
}

export function markAsRead(tradeID: number) {
  return {
    type: MARK_AS_READ,
    payload: tradeID,
  };
}
