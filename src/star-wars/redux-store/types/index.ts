import type { useDispatch, useSelector } from "react-redux";
import type { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export interface AppThunk<T = void> {
  (): (dispatch: AppDispatch) => Promise<T>;
}

export interface RootState {
  readonly starWars: {
    readonly starShips: readonly StarShip[];
  };
}

export interface StarShip {
  readonly name: string;
}

export type UseAppDispatch = typeof useDispatch<AppDispatch>;

export type UseAppSelector = typeof useSelector<RootState>;
