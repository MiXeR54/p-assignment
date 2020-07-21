import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../store";
import { Trades } from "../../mocks/data";
import { fetchTrades, fetchTradingInfoAction } from "../actions/actions";

export const GetTrades = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  const trades = await api();
  dispatch(fetchTrades(trades));
};

export const FetchUSD = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchTradingInfoAction(data.bpi));
    });
};

function api() {
  return Promise.resolve(Trades);
}
