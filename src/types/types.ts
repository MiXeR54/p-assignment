import {
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  DELETE_TRADE,
  SWITCH_USER,
  MARK_AS_READ,
  FETCH_TRADING_INFO,
} from "../redux/actions/actionTypes";

export interface BPI {
  USD: {
    code: string;
    rate: string;
    description: string;
    rate_float: number;
  };
}

export interface TraidingInfo {
  isLoaded: boolean;
  isFetching: boolean;
  bpi: BPI | null;
}

export interface Message {
  income: boolean;
  text: string;
  time: string;
}

export interface Trade {
  id: number;
  buyerName: string;
  paymentMethod: string;
  amount: string;
  isPaid: boolean;
  chat: {
    messages: Message[];
    gotUnreads: {
      buyer: boolean;
      seller: boolean;
    };
  };
}

export interface TradesState {
  trades: Trade[];
  selected: number | null;
  isSeller: boolean;
  tradingInfo: TraidingInfo;
}

interface MarkAsReadAction {
  type: typeof MARK_AS_READ;
  payload: number;
}

interface SelectTradeAction {
  type: typeof SELECT_TRADE;
  payload: number;
}

interface FetchTradesAction {
  type: typeof FETCH_TRADES;
  payload: Trade[];
}

interface PostMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE;
  payload: number;
}

interface SwitchUserAction {
  type: typeof SWITCH_USER;
  payload: boolean;
}

interface FetchTradingInfoAction {
  type: typeof FETCH_TRADING_INFO;
  payload: BPI;
}

export type TradeActionTypes =
  | SelectTradeAction
  | FetchTradesAction
  | PostMessageAction
  | DeleteTradeAction
  | SwitchUserAction
  | MarkAsReadAction
  | FetchTradingInfoAction;
