import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../store";
import { Trades } from "../../mocks/data";
import { fetchTrades, fetchTradingInfoAction } from "../actions/actions";

export const getTrades = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  const trades = await api();
  dispatch(fetchTrades(trades));
};

export const fetchUSD = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        dispatch(fetchTradingInfoAction(data.bpi));
      }, 1000);
    });
};

function api() {
  return Promise.resolve(Trades);
}
