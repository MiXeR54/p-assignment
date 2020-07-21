import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../store";
import { Trades } from "../../mocks/data";
import { fetchTrades } from "../actions/actions";

export const GetTrades = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  const trades = await api();
  dispatch(fetchTrades(trades));
};

function api() {
  return Promise.resolve(Trades);
}
