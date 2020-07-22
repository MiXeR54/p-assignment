import produce from "immer";

import { TradesState, TradeActionTypes } from "../../types/types";
import {
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  DELETE_TRADE,
  SWITCH_USER,
  MARK_AS_READ,
  FETCH_TRADING_INFO,
} from "../actions/actionTypes";
import { getIdx } from "../../helpers/getIdx";

const initialState: TradesState = {
  trades: [],
  selected: null,
  isSeller: true,
  tradingInfo: {
    isLoaded: false,
    isFetching: false,
    bpi: null,
  },
};

export const tradeReducer = (state = initialState, action: TradeActionTypes) =>
  produce(state, (draft) => {
    let tradeIdx;
    switch (action.type) {
      case SELECT_TRADE:
        tradeIdx = getIdx("id", action.payload, draft.trades) || 0;
        draft.selected = action.payload;
        break;
      case FETCH_TRADES:
        draft.trades = action.payload;
        break;
      case DELETE_TRADE:
        tradeIdx = getIdx("id", action.payload, draft.trades) || 0;
        draft.trades.splice(tradeIdx, 1);
        draft.selected = null;
        break;
      case SWITCH_USER:
        draft.isSeller = action.payload;
        draft.selected = null;
        break;
      case SEND_MESSAGE:
        tradeIdx = getIdx("id", state.selected, draft.trades) || 0;
        action.payload.income
          ? (draft.trades[tradeIdx].chat.gotUnreads.seller = true)
          : (draft.trades[tradeIdx].chat.gotUnreads.buyer = true);
        draft.trades[tradeIdx].chat.messages.push(action.payload);
        break;
      case MARK_AS_READ:
        tradeIdx = getIdx("id", action.payload, draft.trades) || 0;
        draft.isSeller
          ? (draft.trades[tradeIdx].chat.gotUnreads.seller = false)
          : (draft.trades[tradeIdx].chat.gotUnreads.buyer = false);
        break;
      case FETCH_TRADING_INFO:
        draft.tradingInfo.bpi = action.payload;
        break;
      default:
        return draft;
    }
  });
