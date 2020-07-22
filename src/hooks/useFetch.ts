import { useEffect, useCallback } from "react";
import { fetchUSD } from "../redux/middleware/thunks";
import { useDispatch } from "react-redux";
import { random } from "../helpers/random";

export const useFetch = (seconds: number) => {
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchUSD());
    setTimeout(fetchData, random(seconds));
  }, [dispatch, seconds]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
};
