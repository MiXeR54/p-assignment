export const SELECT_TRADE = "SELECT_TRADE";
export const FETCH_TRADES = "FETCH_TRADES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_TRADE = "DELETE_TRADE";
export const SWITCH_USER = "SWITCH_USER";
export const MARK_AS_READ = "MARK_AS_READ";

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

export type TradeActionTypes =
  | SelectTradeAction
  | FetchTradesAction
  | PostMessageAction
  | DeleteTradeAction
  | SwitchUserAction
  | MarkAsReadAction;
