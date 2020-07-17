import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "./store";
import { Trades } from "./data";
import { fetchTrades } from "./actions";

export const thunkGetTrades = (): ThunkAction<
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
